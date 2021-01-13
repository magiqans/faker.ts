import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type ImageOptions = {
};
/**
 * image decorator
 *
 * @export
 * @param {ImageOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const image = (options?: ImageOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.image.image, options?.alwaysRandom);


type AvatarOptions = {
};
/**
 * avatar decorator
 *
 * @export
 * @param {AvatarOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const avatar = (options?: AvatarOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.image.avatar, options?.alwaysRandom);


type ImageUrlOptions = {
};
/**
 * imageUrl decorator
 *
 * @export
 * @param {ImageUrlOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const imageUrl = (options?: ImageUrlOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.image.imageUrl, options?.alwaysRandom);



/**
 * abstract decorator
 *
 * @export
 * @param {AbstractOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const abstract = () => makePropertyDecoratorWithArgs(faker.image.abstract, false);


/**
 * animals decorator
 *
 * @export
 * @param {AnimalsOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const animals = () => makePropertyDecoratorWithArgs(faker.image.animals, false);


/**
 * business decorator
 *
 * @export
 * @param {BusinessOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const business = () => makePropertyDecoratorWithArgs(faker.image.business, false);


/**
 * cats decorator
 *
 * @export
 * @param {CatsOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const cats = () => makePropertyDecoratorWithArgs(faker.image.cats, false);

/**
 * city decorator
 *
 * @export
 * @param {CityOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const city = () => makePropertyDecoratorWithArgs(faker.image.city, false);


/**
 * food decorator
 *
 * @export
 * @param {FoodOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const food = () => makePropertyDecoratorWithArgs(faker.image.food, false);


/**
 * nightlife image decorator
 *
 * @export
 * @param {NightlifeOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const nightlife = () => makePropertyDecoratorWithArgs(faker.image.nightlife, false);


/**
 * fashion image decorator
 *
 * @export
 * @param {FashionOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const fashion = () => makePropertyDecoratorWithArgs(faker.image.fashion, false);


/**
 * people image decorator
 *
 * @export
 * @param {PeopleOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const people = () => makePropertyDecoratorWithArgs(faker.image.people, false);



/**
 * nature image decorator
 *
 * @export
 * @param {NatureOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const nature = () => makePropertyDecoratorWithArgs(faker.image.nature, false);


/**
 * sports image decorator
 *
 * @export
 * @param {SportsOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const sports = () => makePropertyDecoratorWithArgs(faker.image.sports);

/**
 * technics image decorator
 *
 * @export
 * @param {TechnicsOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const technics = () => makePropertyDecoratorWithArgs(faker.image.technics);


/**
 * transport image decorator
 *
 * @export
 * @param {TransportOptions} [options]
 * @returns url to placeimg service. string
 * 
 */
export const transport = () => makePropertyDecoratorWithArgs(faker.image.transport);


type DataUriOptions = {
    width?: number;
    height?: number;
    color?: string;
};
/**
 * dataUri image decorator
 *
 * @export
 * @param {DataUriOptions} [options]
 * @returns string
 * 
 */
export const dataUri = (options?: DataUriOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.image.dataUri, options?.alwaysRandom, options?.width, options?.height, options?.color );
