import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs} from "../utils";

type ColumnOptions = {
};
/**
 * column decorator
 *
 * @export
 * @param {ColumnOptions} [options]
 * @returns string
 * 
 */
export const column = (options?: ColumnOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.database.column, options?.alwaysRandom);


type TypeOptions = {
};
/**
 * type decorator
 *
 * @export
 * @param {TypeOptions} [options]
 * @returns string
 * 
 */
export const type = (options?: TypeOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.database.type, options?.alwaysRandom);


type CollationOptions = {
};
/**
 * collation decorator
 *
 * @export
 * @param {CollationOptions} [options]
 * @returns string
 * 
 */
export const collation = (options?: CollationOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.database.collation, options?.alwaysRandom);


type EngineOptions = {
};
/**
 * engine decorator
 *
 * @export
 * @param {EngineOptions} [options]
 * @returns string
 * 
 */
export const engine = (options?: EngineOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.database.engine, options?.alwaysRandom);
