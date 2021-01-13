import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type ColorOptions = {
};
/**
 * color decorator
 *
 * @export
 * @param {ColorOptions} [options]
 * @returns string
 * 
 */
export const color = (options?: ColorOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.commerce.color, options?.alwaysRandom);


type DepartmentOptions = {
};
/**
 * department decorator
 *
 * @export
 * @param {DepartmentOptions} [options]
 * @returns string
 * 
 */
export const department = (options?: DepartmentOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.commerce.department, options?.alwaysRandom);


type ProductNameOptions = {
};
/**
 * productName decorator
 *
 * @export
 * @param {ProductNameOptions} [options]
 * @returns string
 * 
 */
export const productName = (options?: ProductNameOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.commerce.productName, options?.alwaysRandom);


type PriceOptions = {
    min?: number;
    max?: number;
    dec?: number;
    symbol?: string;
};
/**
 * price decorator
 *
 * @export
 * @param {PriceOptions} [options]
 * @returns string
 * 
 */
export const price = (options?: PriceOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.commerce.price, options?.alwaysRandom, options?.min, options?.max, options?.dec, options?.symbol);

type ProductAdjectiveOptions = {
};
/**
 * productAdjective decorator
 *
 * @export
 * @param {ProductAdjectiveOptions} [options]
 * @returns string
 * 
 */
export const productAdjective = (options?: ProductAdjectiveOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.commerce.productAdjective, options?.alwaysRandom);


type ProductOptions = {
};
/**
 * product decorator
 *
 * @export
 * @param {ProductOptions} [options]
 * @returns string
 * 
 */
export const product = (options?: ProductOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.commerce.product, options?.alwaysRandom);


type ProductDescriptionOptions = {
};
/**
 * productDescription decorator
 *
 * @export
 * @param {ProductDescriptionOptions} [options]
 * @returns string
 * 
 */
export const productDescription = (options?: ProductDescriptionOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.commerce.productDescription, options?.alwaysRandom)


type ProductMaterialOptions = {
};
/**
 * productMaterial decorator
 *
 * @export
 * @param {ProductMaterialOptions} [options]
 * @returns string
 * 
 */
export const productMaterial = (options?: ProductMaterialOptions & AlwaysRandom) => 
    makePropertyDecoratorWithArgs(faker.commerce.productMaterial, options?.alwaysRandom);
