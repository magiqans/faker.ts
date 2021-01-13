import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type AbbreviationOptions = {
};
/**
 * abbreviation decorator
 *
 * @export
 * @param {AbbreviationOptions} [options]
 * @returns string
 * 
 */
export const abbreviation = (options?: AbbreviationOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.hacker.abbreviation, options?.alwaysRandom);


type AdjectiveOptions = {
};
/**
 * adjective decorator
 *
 * @export
 * @param {AdjectiveOptions} [options]
 * @returns string
 * 
 */
export const adjective = (options?: AdjectiveOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.hacker.adjective, options?.alwaysRandom);


type NounOptions = {
};
/**
 * noun decorator
 *
 * @export
 * @param {NounOptions} [options]
 * @returns string
 * 
 */
export const noun = (options?: NounOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.hacker.noun, options?.alwaysRandom);


type VerbOptions = {
};
/**
 * verb decorator
 *
 * @export
 * @param {VerbOptions} [options]
 * @returns string
 * 
 */
export const verb = (options?: VerbOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.hacker.verb, options?.alwaysRandom);


type IngverbOptions = {
};
/**
 * ingverb decorator
 *
 * @export
 * @param {IngverbOptions} [options]
 * @returns string
 * 
 */
export const ingverb = (options?: IngverbOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.hacker.ingverb, options?.alwaysRandom);


type PhraseOptions = {
};
/**
 * phrase decorator
 *
 * @export
 * @param {PhraseOptions} [options]
 * @returns string
 * 
 */
export const phrase = (options?: PhraseOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.hacker.phrase, options?.alwaysRandom);
