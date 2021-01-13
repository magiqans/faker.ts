import faker from 'faker';

import type { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs, } from "../utils";

type SuffixesOptions = {
};
/**
 * suffixes decorator
 *
 * @export
 * @param {SuffixesOptions} [options]
 * @returns string
 * 
 */
export const suffixes = (options?: SuffixesOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.company.suffixes, options?.alwaysRandom);


type CompanyNameOptions = {
    format?: number;
};
/**
 * companyName decorator
 *
 * @export
 * @param {CompanyNameOptions} [options]
 * @returns string
 * 
 */
export const companyName = (options?: CompanyNameOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.company.companyName, options?.alwaysRandom, options?.format);


type CompanySuffixOptions = {
};
/**
 * companySuffix decorator
 *
 * @export
 * @param {CompanySuffixOptions} [options]
 * @returns string
 * 
 */
export const companySuffix = (options?: CompanySuffixOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.company.companySuffix, options?.alwaysRandom);

type CatchPhraseOptions = {
};
/**
 * catchPhrase decorator
 *
 * @export
 * @param {CatchPhraseOptions} [options]
 * @returns string
 * 
 */
export const catchPhrase = (options?: CatchPhraseOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.company.catchPhrase, options?.alwaysRandom);

type BsOptions = {
};
/**
 * bs decorator
 *
 * @export
 * @param {BsOptions} [options]
 * @returns string
 * 
 */
export const bs = (options?: BsOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.company.bs, options?.alwaysRandom);


type CatchPhraseAdjectiveOptions = {
};
/**
 * catchPhraseAdjective decorator
 *
 * @export
 * @param {CatchPhraseAdjectiveOptions} [options]
 * @returns string
 * 
 */
export const catchPhraseAdjective = (options?: CatchPhraseAdjectiveOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.company.catchPhraseAdjective, options?.alwaysRandom);


type CatchPhraseDescriptorOptions = {
};
/**
 * catchPhraseDescriptor decorator
 *
 * @export
 * @param {CatchPhraseDescriptorOptions} [options]
 * @returns string
 * 
 */
export const catchPhraseDescriptor = (options?: CatchPhraseDescriptorOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.company.catchPhraseDescriptor, options?.alwaysRandom);


type CatchPhraseNounOptions = {
};
/**
 * catchPhraseNoun decorator
 *
 * @export
 * @param {CatchPhraseNounOptions} [options]
 * @returns string
 * 
 */
export const catchPhraseNoun = (options?: CatchPhraseNounOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.company.catchPhraseNoun, options?.alwaysRandom);


type BsAdjectiveOptions = {
};
/**
 * bsAdjective decorator
 *
 * @export
 * @param {BsAdjectiveOptions} [options]
 * @returns string
 * 
 */
export const bsAdjective = (options?: BsAdjectiveOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.company.bsAdjective, options?.alwaysRandom);


type BsBuzzOptions = {
};
/**
 * bsBuzz decorator
 *
 * @export
 * @param {BsBuzzOptions} [options]
 * @returns string
 * 
 */
export const bsBuzz = (options?: BsBuzzOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.company.bsBuzz, options?.alwaysRandom);


type BsNounOptions = {
};
/**
 * bsNoun decorator
 *
 * @export
 * @param {BsNounOptions} [options]
 * @returns string
 * 
 */
export const bsNoun = (options?: BsNounOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.company.bsNoun, options?.alwaysRandom);
