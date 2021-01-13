import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type AvatarOptions = {
};
/**
 * avatar internet decorator
 *
 * @export
 * @param {AvatarOptions} [options]
 * @returns url to avatar. string
 * 
 */
export const avatar = (options?: AvatarOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.avatar, options?.alwaysRandom);


type EmailOptions = {
    firstName?: string;
    lastName?: string;
    provider?: string;
};
/**
 * email internet decorator
 *
 * @export
 * @param {EmailOptions} [options]
 * @returns string
 * 
 */
export const email = (options?: EmailOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.email, options?.alwaysRandom, options?.firstName, options?.lastName, options?.provider);


type ExampleEmailOptions = {
    firstName?: string;
    lastName?: string;
};
/**
 * exampleEmail internet decorator
 *
 * @export
 * @param {ExampleEmailOptions} [options]
 * @returns string
 * 
 */
export const exampleEmail = (options?: ExampleEmailOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.exampleEmail, options?.alwaysRandom, options?.firstName, options?.lastName);


type UserNameOptions = {
    firstName?: string;
    lastName?: string;
};
/**
 * userName internet decorator
 *
 * @export
 * @param {UserNameOptions} [options]
 * @returns string
 * 
 */
export const userName = (options?: UserNameOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.userName, options?.alwaysRandom, options?.firstName, options?.lastName);


type ProtocolOptions = {
};
/**
 * protocol internet decorator
 *
 * @export
 * @param {ProtocolOptions} [options]
 * @returns string
 * 
 */
export const protocol = (options?: ProtocolOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.protocol, options?.alwaysRandom);


type UrlOptions = {
};
/**
 * url internet decorator
 *
 * @export
 * @param {UrlOptions} [options]
 * @returns string
 * 
 */
export const url = (options?: UrlOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.url, options?.alwaysRandom);


type DomainNameOptions = {
};
/**
 * domainName internet decorator
 *
 * @export
 * @param {DomainNameOptions} [options]
 * @returns string
 * 
 */
export const domainName = (options?: DomainNameOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.domainName, options?.alwaysRandom);


type DomainSuffixOptions = {
};
/**
 * domainSuffix internet decorator
 *
 * @export
 * @param {DomainSuffixOptions} [options]
 * @returns string
 * 
 */
export const domainSuffix = (options?: DomainSuffixOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.domainSuffix, options?.alwaysRandom);


type DomainWordOptions = {
};
/**
 * domainWord internet decorator
 *
 * @export
 * @param {DomainWordOptions} [options]
 * @returns string
 * 
 */
export const domainWord = (options?: DomainWordOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.domainWord, options?.alwaysRandom);


type IpOptions = {
};
/**
 * ip internet decorator
 *
 * @export
 * @param {IpOptions} [options]
 * @returns string
 * 
 */
export const ip = (options?: IpOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.ip, options?.alwaysRandom);


type Ipv6Options = {
};
/**
 * ipv6 internet decorator
 *
 * @export
 * @param {Ipv6Options} [options]
 * @returns string
 * 
 */
export const ipv6 = (options?: Ipv6Options & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.ipv6, options?.alwaysRandom);

type UserAgentOptions = {
};
/**
 * userAgent internet decorator
 *
 * @export
 * @param {UserAgentOptions} [options]
 * @returns string
 * 
 */
export const userAgent = (options?: UserAgentOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.userAgent, options?.alwaysRandom);


type ColorOptions = {
    baseRed255?: number;
    baseGreen255?: number;
    baseBlue255?: number;
};
/**
 * color internet decorator
 *
 * @export
 * @param {ColorOptions} [options]
 * @returns string
 * 
 */
export const color = (options?: ColorOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.color, options?.alwaysRandom, options?.baseRed255, options?.baseGreen255, options?.baseBlue255);


type MacOptions = {
    sep?: string;
};
/**
 * mac internet decorator
 *
 * @export
 * @param {MacOptions} [options]
 * @returns string
 * 
 */
export const mac = (options?: MacOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.mac, options?.alwaysRandom, options?.sep);


type PasswordOptions = {
    len?: number;
    memorable?: boolean;
    pattern?: string | RegExp;
    prefix?: string;
};
/**
 * password internet decorator
 *
 * @export
 * @param {PasswordOptions} [options]
 * @returns string
 * 
 */
export const password = (options?: PasswordOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.internet.password, options?.alwaysRandom, options?.len, options?.memorable, options?.pattern, options?.prefix);
