import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type FirstNameOptions = {
    gender?: number;
};
/**
 * firstName name decorator
 *
 * @export
 * @param {FirstNameOptions} [options]
 * @returns string
 * 
 */
export const firstName = (options?: FirstNameOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.name.firstName, options?.alwaysRandom, options?.gender);


type LastNameOptions = {
    gender?: number;
};
/**
 * lastName name decorator
 *
 * @export
 * @param {LastNameOptions} [options]
 * @returns string
 * 
 */
export const lastName = (options?: LastNameOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.name.lastName, options?.alwaysRandom, options?.gender);


type FindNameOptions = {
    gender?: number;
    firstName?: string;
    lastName?: string;
};
/**
 * findName name decorator
 *
 * @export
 * @param {FindNameOptions} [options]
 * @returns string
 * 
 */
export const findName = (options?: FindNameOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.name.findName, options?.alwaysRandom, options?.firstName, options?.lastName, options?.gender);


type JobTitleOptions = {
};
/**
 * jobTitle name decorator
 *
 * @export
 * @param {JobTitleOptions} [options]
 * @returns string
 * 
 */
export const jobTitle = (options?: JobTitleOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.name.jobTitle, options?.alwaysRandom,);


type PrefixOptions = {
};
/**
 * prefix name decorator
 *
 * @export
 * @param {PrefixOptions} [options]
 * @returns string
 * 
 */
export const prefix = (options?: PrefixOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.name.prefix, options?.alwaysRandom);


type SuffixOptions = {
};
/**
 * suffix name decorator
 *
 * @export
 * @param {SuffixOptions} [options]
 * @returns string
 * 
 */
export const suffix = (options?: SuffixOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.name.suffix, options?.alwaysRandom);


type TitleOptions = {
};
/**
 * title name decorator
 *
 * @export
 * @param {TitleOptions} [options]
 * @returns string
 * 
 */
export const title = (options?: TitleOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.name.title, options?.alwaysRandom);


type JobDescriptorOptions = {
};
/**
 * jobDescriptor name decorator
 *
 * @export
 * @param {JobDescriptorOptions} [options]
 * @returns string
 * 
 */
export const jobDescriptor = (options?: JobDescriptorOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.name.jobDescriptor, options?.alwaysRandom);


type JobAreaOptions = {
};
/**
 * jobArea name decorator
 *
 * @export
 * @param {JobAreaOptions} [options]
 * @returns string
 * 
 */
export const jobArea = (options?: JobAreaOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.name.jobArea, options?.alwaysRandom);


type JobTypeOptions = {
};
/**
 * jobType name decorator
 *
 * @export
 * @param {JobTypeOptions} [options]
 * @returns string
 * 
 */
export const jobType = (options?: JobTypeOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.name.jobType, options?.alwaysRandom);
