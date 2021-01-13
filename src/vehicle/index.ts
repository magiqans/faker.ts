import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type VehicleOptions = {
};
/**
 * vehicle decorator
 *
 * @export
 * @param {VehicleOptions} [options]
 * @returns string
 */
export const vehicle = (options?: VehicleOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.vehicle.vehicle, options?.alwaysRandom);


type ManufacturerOptions = {
};
/**
 * manufacturer vehicle decorator
 *
 * @export
 * @param {ManufacturerOptions} [options]
 * @returns string
 */
export const manufacturer = (options?: ManufacturerOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.vehicle.manufacturer, options?.alwaysRandom);


type ModelOptions = {
};
/**
 * model vehicle decorator
 *
 * @export
 * @param {ModelOptions} [options]
 * @returns string
 */
export const model = (options?: ModelOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.vehicle.model, options?.alwaysRandom);


type TypeOptions = {
};
/**
 * type vehicle decorator
 *
 * @export
 * @param {TypeOptions} [options]
 * @returns string
 * 
 */
export const type = (options?: TypeOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.vehicle.type, options?.alwaysRandom);


type FuelOptions = {
};
/**
 * fuel vehicle decorator
 *
 * @export
 * @param {TypeOptions} [options]
 * @returns string
 * 
 */
export const fuel = (options?: FuelOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.vehicle.fuel, options?.alwaysRandom);


type VinOptions = {
};
/**
 * vin vehicle decorator
 *
 * @export
 * @param {VinOptions} [options]
 * @returns string
 * 
 */
export const vin = (options?: VinOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.vehicle.vin, options?.alwaysRandom);


type ColorOptions = {
};
/**
 * color vehicle decorator
 *
 * @export
 * @param {ColorOptions} [options]
 * @returns string
 * 
 */
export const color = (options?: ColorOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.vehicle.color, options?.alwaysRandom);
