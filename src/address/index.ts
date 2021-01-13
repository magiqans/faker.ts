import 'reflect-metadata';
import faker from 'faker';

import { makePropertyDecoratorWithArgs } from '../utils';
import { AlwaysRandom } from '../core';

type ZipCodeOptions = {
    format?: string;
};

/**
 * zipCode decorator
 *
 * @param {ZipCodeOptions} [options]
 * @returns string
 * 
 */
export const zipCode = (options?: ZipCodeOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.zipCode, options?.alwaysRandom, options?.format);

type ZipCodeByStateOptions = {
    state: string;
};
/**
 * zipCodeByState decorator
 *
 * @param {ZipCodeByStateOptions} [options]
 * @returns string
 * 
 */
export const zipCodeByState = (options: ZipCodeByStateOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.zipCodeByState, options.alwaysRandom, options.state);


type CityOptions = {
    format?: number;
};
/**
 * city decorator
 *
 * @param {CityOptions} [options]
 * @returns string
 * 
 */
export const city = (options?: CityOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.city, options?.alwaysRandom, options?.format);

type CityPrefixOptions = {
};
/**
 * cityPrefix decorator
 *
 * @param {CityPrefixOptions} [options]
 * @returns string
 * 
 */
export const cityPrefix = (options?: CityPrefixOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.cityPrefix, options?.alwaysRandom);


type CitySuffixOptions = {
};
/**
 * citySuffix decorator
 *
 * @param {CitySuffixOptions} [options]
 * @returns string
 * 
 */
export const citySuffix = (options?: CitySuffixOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.citySuffix, options?.alwaysRandom);


type StreetNameOptions = {
};
/**
 * streetName decorator
 *
 * @param {StreetNameOptions} [options]
 * @returns string
 * 
 */
export const streetName = (options?: StreetNameOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.streetName, options?.alwaysRandom);

type StreetAddressOptions = {
};
/**
 * streetAddress decorator
 *
 * @param {StreetAddressOptions} [options]
 * @returns string
 * 
 */
export const streetAddress = (options?: StreetAddressOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.streetAddress, options?.alwaysRandom);


type StreetSuffixOptions = {
};
/**
 * streetSuffix decorator
 *
 * @param {StreetSuffixOptions} [options]
 * @returns string
 * 
 */
export const streetSuffix = (options?: StreetSuffixOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.streetSuffix, options?.alwaysRandom);


type StreetPrefixOptions = {
};
/**
 * streetPrefix decorator
 *
 * @param {StreetPrefixOptions} [options]
 * @returns string
 * 
 */
export const streetPrefix = (options?: StreetPrefixOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.streetPrefix, options?.alwaysRandom);


type SecondaryAddressOptions = {
};
/**
 * secondaryAddress decorator
 *
 * @param {StreetPrefixOptions} [options]
 * @returns string
 * 
 */
export const secondaryAddress = (options?: SecondaryAddressOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.secondaryAddress, options?.alwaysRandom);


type CountryOptions = {
};
/**
 * country decorator
 *
 * @param {CountyOptions} [options]
 * @returns string
 * 
 */
export const country = (options?: CountryOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.country, options?.alwaysRandom);


type CountyOptions = {
};
/**
 * county decorator
 *
 * @param {CountyOptions} [options]
 * @returns string
 * 
 */
export const county = (options?: CountyOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.county, options?.alwaysRandom);


type CountryCodeOptions = {
};
/**
 * countryCode decorator
 *
 * @param {CountryCodeOptions} [options]
 * @returns string
 * 
 */
export const countryCode = (options?: CountryCodeOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.countryCode, options?.alwaysRandom);


type StateOptions = {
    useAbbr?: boolean;
};
/**
 * state decorator
 *
 * @param {StateOptions} [options]
 * @returns string
 * 
 */
export const state = (options?: StateOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.state, options?.alwaysRandom);


type StateAbbrOptions = {
};
/**
 * stateAbbr decorator
 *
 * @param {StateAbbrOptions} [options]
 * @returns string
 * 
 */
export const stateAbbr = (options?: StateAbbrOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.stateAbbr, options?.alwaysRandom);

type LatitudeOptions = {
    max?: number;
    min?: number;
    precision?: number;
};
/**
 * latitude decorator
 *
 * @param {LatitudeOptions} [options]
 * @returns string
 * 
 */
export const latitude = (options?: LatitudeOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.latitude, options?.alwaysRandom, options?.max, options?.min, options?.precision);


type LongitudeOptions = {
    max?: number;
    min?: number;
    precision?: number;
};
/**
 * longitude decorator
 *
 * @param {LongitudeOptions} [options]
 * @returns string
 * 
 */
export const longitude = (options?: LongitudeOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.longitude, options?.alwaysRandom, options?.max, options?.min, options?.precision);


type DirectionOptions = {
    useAbbr?: boolean;
};
/**
 * direction decorator
 *
 * @param {DirectionOptions} [options]
 * @returns string
 * 
 */
export const direction = (options?: DirectionOptions & AlwaysRandom) =>
    makePropertyDecoratorWithArgs(faker.address.direction, options?.alwaysRandom, options?.useAbbr);


type CardinalDirectionOptions = {
    useAbbr?: boolean;
};
/**
 * cardinalDirection decorator
 *
 * @param {CardinalDirectionOptions} [options]
 * @returns string
 * 
 */
export const cardinalDirection = (options?: CardinalDirectionOptions & AlwaysRandom) => 
makePropertyDecoratorWithArgs(faker.address.cardinalDirection, options?.alwaysRandom, options?.useAbbr);



type OrdinalDirectionOptions = {
    useAbbr?: boolean;
};

/**
 * ordinalDirection decorator
 *
 * @export
 * @param {OrdinalDirectionOptions} [options]
 * @returns string
 * 
 */
export const ordinalDirection = (options?: OrdinalDirectionOptions & AlwaysRandom) => 
makePropertyDecoratorWithArgs(faker.address.ordinalDirection, options?.alwaysRandom, options?.useAbbr);



type TimeZoneOptions = {
};
/**
 * timeZone decorator
 *
 * @export
 * @param {TimeZoneOptions} [options]
 * @returns string
 * 
 */
export const timeZone = (options?: TimeZoneOptions & AlwaysRandom) => 
makePropertyDecoratorWithArgs(faker.address.timeZone, options?.alwaysRandom);

