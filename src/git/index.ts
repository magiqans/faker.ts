import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type BranchOptions = {
};
/**
 * branch decorator
 *
 * @export
 * @param {BranchOptions} [options]
 * @returns string
 * 
 */
export const branch = (options?: BranchOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.git.branch, options?.alwaysRandom);


type CommitEntryOptions = {
    merge: boolean;
};
/**
 * commitEntry decorator
 *
 * @export
 * @param {CommitEntryOptions} [options]
 * @returns string
 * 
 */
export const commitEntry = (options: CommitEntryOptions & AlwaysRandom) => {
    const { alwaysRandom, ...otherOptions } = options;
    return makePropertyDecoratorWithArgs(faker.git.commitEntry, alwaysRandom, otherOptions);
}


type CommitMessageOptions = {
};
/**
 * commitMessage decorator
 *
 * @export
 * @param {CommitMessageOptions} [options]
 * @returns string
 * 
 */
export const commitMessage = (options?: CommitMessageOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.git.commitMessage, options?.alwaysRandom);


type CommitShaOptions = {
};
/**
 * commitSha decorator
 *
 * @export
 * @param {CommitShaOptions} [options]
 * @returns string
 * 
 */
export const commitSha = (options?: CommitShaOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.git.commitSha, options?.alwaysRandom);


type ShortShaOptions = {
};
/**
 * shortSha decorator
 *
 * @export
 * @param {ShortShaOptions} [options]
 * @returns string
 * 
 */
export const shortSha = (options?: ShortShaOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.git.shortSha, options?.alwaysRandom);
