import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type CreateCardOptions = {
};
/**
 * createCard decorator
 * 
 * @export
 * @param {CreateCardOptions} [options]
 * @returns {*} Faker.Card
 */
export const createCard = (options?: CreateCardOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.helpers.createCard, options?.alwaysRandom);


type CreateTransactionOptions = {
};
/**
 * createCard decorator
 * 
 * @export
 * @param {CreateCardOptions} [options]
 * @returns {*} Faker.Transaction
 */
export const createTransaction = (options?: CreateTransactionOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.helpers.createTransaction, options?.alwaysRandom);


type RandomizeOptions<T> = {
    array?: T[]
};
/**
 * randomize decorator
 * 
 * Pick random element of the input arrray or generate a random string
 * 
 * @export
 * @param {CreateCardOptions} [options]
 * @returns {*} Faker.Transaction
 */
export const randomize = <T>(options?: RandomizeOptions<T> & AlwaysRandom) => options && options.array ?
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    makePropertyDecoratorWithArgs(faker.helpers.randomize, options?.alwaysRandom, options.array) :
    makePropertyDecoratorWithArgs(faker.helpers.randomize, options?.alwaysRandom);


type UserCardOptions = {
};
/**
 * createCard decorator
 * 
 * @export
 * @param {UserCardOptions} [options]
 * @returns {*} Faker.UserCard
 */
export const userCard = (options?: UserCardOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.helpers.userCard, options?.alwaysRandom);
