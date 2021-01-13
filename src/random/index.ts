import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type NumberOptions = {
    min?: number;
    max?: number;
    precision?: number
};

/**
 * number random decorator
 *
 * @export
 * @param {NumberOptions} [options]
 * @returns number
 * 
 */
export const number = (options?: NumberOptions & AlwaysRandom) => {
    if (options) {
        const { alwaysRandom, ...otherOptions } = options;
        if (otherOptions.max)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return makePropertyDecoratorWithArgs(faker.random.number, alwaysRandom, otherOptions.max);
        if (otherOptions)
            return makePropertyDecoratorWithArgs(faker.random.number, alwaysRandom, otherOptions);
    }
    return makePropertyDecoratorWithArgs(faker.random.number, options?.alwaysRandom);
}


type FloatOptions = {
    min?: number;
    max?: number;
    precision?: number;
};
/**
 * float random decorator
 *
 * @export
 * @param {FloatOptions} [options]
 * @returns number
 * 
 */
export const float = (options?: FloatOptions & AlwaysRandom) => {
    if (options) {
        const { alwaysRandom, ...otherOptions } = options;
        if (otherOptions.max)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return makePropertyDecoratorWithArgs(faker.random.float, alwaysRandom, otherOptions.max);
        if (otherOptions)
            return makePropertyDecoratorWithArgs(faker.random.float, alwaysRandom, otherOptions);
    }
    return makePropertyDecoratorWithArgs(faker.random.float, options?.alwaysRandom);
}

type ArrayElementOptions<T> = {
    array: T[] | ReadonlyArray<T>;
};
/**
 * arrayElement random decorator
 *
 * @export
 * @param {ArrayElementOptions} [options]
 * @returns string or array element
 * 
 */
export const arrayElement = <T>(options: ArrayElementOptions<T> & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.random.arrayElement, options.alwaysRandom, options.array);


type ArrayElementsOptions<T> = {
    array: T[] | ReadonlyArray<T>;
    count?: number;
};
/**
 * arrayElements random decorator
 *
 * @export
 * @param {ArrayElementsOptions} [options]
 * @returns string[] or T[]
 * 
 */
export const arrayElements = <T>(options: ArrayElementsOptions<T> & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.random.arrayElements, options.alwaysRandom, options.array, options.count);


type ObjectElementOptions<K extends keyof O, O = Record<K, unknown>> = {
    object: O;
    field?: string | K;
};
/**
 * objectElement random decorator
 *
 * @export
 * @param {ObjectElementOptions} [options]
 * @returns string or object value
 * 
 */
export const objectElement = <K>(options: ObjectElementOptions<K> & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.random.objectElement, options.alwaysRandom, options.object, options.field);


type UuidOptions = {
};
/**
 * uuid random decorator
 *
 * @export
 * @param {UuidOptions} [options]
 * @returns string
 * 
 */
export const uuid = (options: UuidOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.random.uuid, options.alwaysRandom);


type BooleanOptions = {
};
/**
 * boolean random decorator
 *
 * @export
 * @param {BooleanOptions} [options]
 * @returns boolean
 * 
 */
export const boolean = (options: BooleanOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.random.boolean, options.alwaysRandom);


type WordOptions = {
    type?: string;
};
/**
 * word random decorator
 *
 * @export
 * @param {WordOptions} [options]
 * @returns string
 * 
 */
export const word = (options?: WordOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.random.word, options?.alwaysRandom, options?.type);


type WordsOptions = {
    count?: number;
};
/**
 * words random decorator
 *
 * @export
 * @param {WordsOptions} [options]
 * @returns string
 * 
 */
export const words = (options?: WordsOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.random.words, options?.alwaysRandom, options?.count);


type ImageOptions = {
};
/**
 * image random decorator
 *
 * @export
 * @param {ImageOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const image = (options?: ImageOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.random.image, options?.alwaysRandom);


type LocaleOptions = {
};
/**
 * locale random decorator
 *
 * @export
 * @param {LocaleOptions} [options]
 * @returns string
 * 
 */
export const locale = (options?: LocaleOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.random.locale, options?.alwaysRandom);


type AlphaOptions = {
    count?: number;
    upcase?: boolean;
};
/**
 * alpha random decorator
 *
 * @export
 * @param {AlphaOptions} [options]
 * @returns string
 * 
 */
export const alpha = (options?: AlphaOptions & AlwaysRandom) => {
    if (options) {
        const { alwaysRandom, ...otherOptions } = options;
        return makePropertyDecoratorWithArgs(faker.random.alpha, alwaysRandom, otherOptions);
    }
    return makePropertyDecoratorWithArgs(faker.random.alpha, false, options);
}

type AlphaNumericOptions = {
    count?: number;
};
/**
 * alphaNumeric random decorator
 *
 * @export
 * @param {AlphaNumericOptions} [options]
 * @returns string
 * 
 */
export const alphaNumeric = (options?: AlphaNumericOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.random.alphaNumeric, options?.alwaysRandom, options?.count);


type HexaDecimalOptions = {
    count?: number;
};
/**
 * hexaDecimal random decorator
 *
 * @export
 * @param {HexaDecimalOptions} [options]
 * @returns string
 * 
 */
export const hexaDecimal = (options?: HexaDecimalOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.random.hexaDecimal, options?.alwaysRandom, options?.count);
