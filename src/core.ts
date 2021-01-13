import 'reflect-metadata';
import faker from 'faker';
import { makePropertyDecoratorWithArgs } from './utils';

type Fn<R, A extends unknown[] = unknown[]> = (...args: A) => R;

/**
 * mark property as a fake.
 * 
 * @export
 * @param {string} key
 * @return {*}  {PropertyDecorator}
 */
export function fake(key: string, options?: AlwaysRandom): PropertyDecorator {
    return makePropertyDecoratorWithArgs(faker.fake, options?.alwaysRandom, key);
}
/**
 * Class decorator that initialize fakes properties
 *
 * @export
 * @return {*}  {ClassDecorator}
 */
export function Faker(options?: { locale?: FakerLocales }): ClassDecorator {
    return target => {
        if (options?.locale) {
            faker.setLocale(options.locale);
        }
        return new Proxy(target, {
            construct(t, args) {
                const instance = Reflect.construct(t, args) as Record<string, unknown>;
                const keys = Reflect.getOwnMetadataKeys(t.prototype) as string[];
                keys.forEach(key => {
                    const metadata = Reflect.getMetadata(key, instance) as Fn<unknown> | Primitive | Composite;
                    const args = Reflect.getMetadata(key, instance, key) as unknown[];
                    if (typeof metadata === 'function' && args && args.length) {
                        let currentValue = Reflect.apply(metadata, this, args) as unknown;
                        let useSetter = false;
                        Reflect.defineProperty(instance, key, {
                            get() {
                                if (useSetter) {
                                    useSetter = false;
                                    return currentValue;
                                }
                                useSetter = false;
                                currentValue = Reflect.apply(metadata, this, args);
                                return currentValue;
                            },
                            set(value) {
                                currentValue = value;
                                useSetter = true;
                            }
                        })
                    } else {
                        instance[key] = metadata;
                    }
                });
                // fallback to default lang
                if (options?.locale) {
                    faker.setLocale('en');
                }


                return instance;
            }
        });
    }
}

export type AlwaysRandom = {
    /*each call of property will generate new value.*/
    alwaysRandom?: boolean;
};

type FakerLocales =
    | 'az'
    | 'ar'
    | 'cz'
    | 'de'
    | 'de_AT'
    | 'de_CH'
    | 'en'
    | 'en_AU'
    | 'en_AU_ocker'
    | 'en_BORK'
    | 'en_CA'
    | 'en_GB'
    | 'en_IE'
    | 'en_IND'
    | 'en_US'
    | 'en_ZA'
    | 'es'
    | 'es_MX'
    | 'fa'
    | 'fi'
    | 'fr'
    | 'fr_CA'
    | 'fr_CH'
    | 'ge'
    | 'id_ID'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nb_NO'
    | 'nep'
    | 'nl'
    | 'nl_BE'
    | 'pl'
    | 'pt_BR'
    | 'pt_PT'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sv'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh_CN'
    | 'zh_TW';


type Primitive = number | string | boolean | undefined;
type Composite = null | Record<string, unknown>;