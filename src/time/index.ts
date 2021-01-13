import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type RecentOptions = {
    outputType?: 'abbr' | 'wide' | 'unix';
};
/**
 * recent time decorator
 *
 * @export
 * @param {RecentOptions} [options]
 * @returns string or number
 * 
 */
export const recent = (options?: RecentOptions & AlwaysRandom) =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    makePropertyDecoratorWithArgs(faker.time.recent, options?.alwaysRandom, options?.outputType);
