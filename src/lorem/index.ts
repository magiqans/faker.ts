import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type WordOptions = {
    length?: number;
};
/**
 * word lorem decorator
 *
 * @export
 * @param {WordOptions} [options]
 * @returns string
 */
export const word = (options?: WordOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.lorem.word, options?.alwaysRandom, options?.length);


type WordsOptions = {
    num?: number;
};
/**
 * words lorem decorator
 *
 * @export
 * @param {WordsOptions} [options]
 * @returns string
 * 
 */
export const words = (options?: WordsOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.lorem.words, options?.alwaysRandom, options?.num);


type SentenceOptions = {
    wordCount?: number;
    range?: number;
};
/**
 * sentence lorem decorator
 *
 * @export
 * @param {SentenceOptions} [options]
 * @returns string
 * 
 */
export const sentence = (options?: SentenceOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.lorem.sentence, options?.alwaysRandom, options?.wordCount, options?.range);


type SlugOptions = {
    wordCount?: number;
};
/**
 * slug lorem decorator
 *
 * @export
 * @param {SlugOptions} [options]
 * @returns string
 * 
 */
export const slug = (options?: SlugOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.lorem.slug, options?.alwaysRandom, options?.wordCount);


type SentencesOptions = {
    sentenceCount?: number;
};
/**
 * sentences lorem decorator
 *
 * @export
 * @param {SentencesOptions} [options]
 * @returns string
 * 
 */
export const sentences = (options?: SentencesOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.lorem.sentences, options?.alwaysRandom, options?.sentenceCount);


type ParagraphOptions = {
    sentenceCount?: number;
};
/**
 * paragraph lorem decorator
 *
 * @export
 * @param {ParagraphOptions} [options]
 * @returns string
 * 
 */
export const paragraph = (options?: ParagraphOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.lorem.paragraph, options?.alwaysRandom, options?.sentenceCount);


type ParagraphsOptions = {
    paragraphCount?: number;
    separator?: string;
};
/**
 * paragraphs lorem decorator
 *
 * @export
 * @param {ParagraphsOptions} [options]
 * @returns string
 * 
 */
export const paragraphs = (options?: ParagraphsOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.lorem.paragraphs, options?.alwaysRandom, options?.paragraphCount, options?.separator);


type TextOptions = {
    times?: number;
};
/**
 * text lorem decorator
 *
 * @export
 * @param {TextOptions} [options]
 * @returns string
 * 
 */
export const text = (options?: TextOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.lorem.text, options?.alwaysRandom, options?.times);


type LinesOptions = {
    lineCount?: number;
};
/**
 * lines lorem decorator
 *
 * @export
 * @param {LinesOptions} [options]
 * @returns string
 * 
 */
export const lines = (options?: LinesOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.lorem.lines, options?.alwaysRandom, options?.lineCount);
