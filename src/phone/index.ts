import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type PhoneNumberOptions = {
    format?: string;
};
/**
 * phoneNumber phone decorator
 *
 * @export
 * @param {PhoneNumberOptions} [options]
 * @returns string
 * 
 */
export const phoneNumber = (options?: PhoneNumberOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.phone.phoneNumber, options?.alwaysRandom, options?.format);


type PhoneNumberFormatOptions = {
    phoneFormatsArrayIndex?: number;
};
/**
 * phoneNumberFormat phone decorator
 *
 * @export
 * @param {PhoneNumberFormatOptions} [options]
 * @returns string
 * 
 */
export const phoneNumberFormat = (options?: PhoneNumberFormatOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.phone.phoneNumberFormat, options?.alwaysRandom, options?.phoneFormatsArrayIndex);


type phoneFormatsOptions = {
};
/**
 * phoneFormats phone decorator
 *
 * @export
 * @param {phoneFormatsOptions} [options]
 * @returns string
 * 
 */
export const phoneFormats = (options?: phoneFormatsOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.phone.phoneFormats, options?.alwaysRandom);
