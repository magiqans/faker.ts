import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type PastOptions = {
    years?: number;
    refDate?: string | Date;
};
/**
 * past decorator
 *
 * @export
 * @param {PastOptions} [options]
 * @returns Date
 * 
 */
export const past = (options?: PastOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.date.past, options?.alwaysRandom, options?.years, options?.refDate);


type FutureOptions = {
    years?: number;
    refDate?: string | Date;
};
/**
 * future decorator
 *
 * @export
 * @param {FutureOptions} [options]
 * @returns Date
 * 
 */
export const future = (options?: FutureOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.date.future, options?.alwaysRandom, options?.years, options?.refDate);


type BetweenOptions = {
    from: number | string | Date;
    to: string | Date;
};
/**
 * between decorator
 *
 * @export
 * @param {BetweenOptions} [options]
 * @returns Date
 * 
 */
export const between = (options: BetweenOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.date.between, options.alwaysRandom, options.from, options.to);


type RecentOptions = {
    days?: number;
    refDate?: string | Date;
};
/**
 * recent decorator
 *
 * @export
 * @param {RecentOptions} [options]
 * @returns Date
 * 
 */
export const recent = (options: RecentOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.date.recent, options.alwaysRandom, options?.days, options.refDate);


type SoonOptions = {
    days?: number;
    refDate?: string | Date;
};
/**
 * soon decorator
 *
 * @export
 * @param {SoonOptions} [options]
 * @returns Date
 * 
 */
export const soon = (options: SoonOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.date.soon, options.alwaysRandom, options?.days, options.refDate);


type MonthOptions = {
    abbr?: boolean;
    context?: boolean;
};
/**
 * month decorator
 *
 * @export
 * @param {MonthOptions} [options]
 * @returns string
 * 
 */
export const month = (options: MonthOptions & AlwaysRandom) => {
    const { alwaysRandom, ...otherOptions } = options;
    return makePropertyDecoratorWithArgs(faker.date.month, alwaysRandom, otherOptions);
}


type WeekdayOptions = {
    abbr?: boolean;
    context?: boolean;
};
/**
 * weekday decorator
 *
 * @export
 * @param {WeekdayOptions} [options]
 * @returns string
 * 
 */
export const weekday = (options: WeekdayOptions & AlwaysRandom) => {
    const { alwaysRandom, ...otherOptions } = options;
    return makePropertyDecoratorWithArgs(faker.date.weekday, alwaysRandom, otherOptions);
}