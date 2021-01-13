import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type AccountOptions = {
    length?: number;
};
/**
 * account decorator
 *
 * @export
 * @param {AccountOptions} [options]
 * @returns string
 * 
 */
export const account = (options?: AccountOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.account, options?.alwaysRandom, options?.length);


type AccountNameOptions = {
};
/**
 * accountName decorator
 *
 * @export
 * @param {AccountNameOptions} [options]
 * @returns string
 * 
 */
export const accountName = (options?: AccountNameOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.accountName, options?.alwaysRandom);


type RoutingNumberOptions = {
};
/**
 * routingNumber decorator
 *
 * @export
 * @param {RoutingNumberOptions} [options]
 * @returns string
 * 
 */
export const routingNumber = (options?: RoutingNumberOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.routingNumber, options?.alwaysRandom);


type MaskOptions = {
    length?: number;
    parens?: boolean;
    elipsis?: boolean;
};
/**
 * mask decorator
 *
 * @export
 * @param {MaskOptions} [options]
 * @returns string
 * 
 */
export const mask = (options?: MaskOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.mask, options?.alwaysRandom, options?.length, options?.parens, options?.elipsis);


type AmountOptions = {
    min?: number;
    max?: number;
    dec?: number;
    symbol?: string;
};
/**
 * amount decorator
 *
 * @export
 * @param {AmountOptions} [options]
 * @returns string
 * 
 */
export const amount = (options?: AmountOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.amount, options?.alwaysRandom, options?.min, options?.max, options?.dec, options?.symbol);


type TransactionTypeOptions = {
};
/**
 * transactionType decorator
 *
 * @export
 * @param {TransactionTypeOptions} [options]
 * @returns string
 * 
 */
export const transactionType = (options?: TransactionTypeOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.transactionType, options?.alwaysRandom);


type CurrencyCodeOptions = {
};
/**
 * currencyCode decorator
 *
 * @export
 * @param {CurrencyCodeOptions} [options]
 * @returns string
 * 
 */
export const currencyCode = (options?: CurrencyCodeOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.currencyCode, options?.alwaysRandom);


type CurrencyNameOptions = {
};
/**
 * currencyName decorator
 *
 * @export
 * @param {CurrencyNameOptions} [options]
 * @returns string
 * 
 */
export const currencyName = (options?: CurrencyNameOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.currencyName, options?.alwaysRandom);


type CurrencySymbolOptions = {
};
/**
 * currencySymbol decorator
 *
 * @export
 * @param {CurrencySymbolOptions} [options]
 * @returns string
 * 
 */
export const currencySymbol = (options?: CurrencySymbolOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.currencySymbol, options?.alwaysRandom);


type BitcoinAddressOptions = {
};
/**
 * bitcoinAddress decorator
 *
 * @export
 * @param {BitcoinAddressOptions} [options]
 * @returns string
 * 
 */
export const bitcoinAddress = (options?: BitcoinAddressOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.bitcoinAddress, options?.alwaysRandom);


type LitecoinAddressOptions = {
};
/**
 * litecoinAddress decorator
 *
 * @export
 * @param {LitecoinAddressOptions} [options]
 * @returns string
 * 
 */
export const litecoinAddress = (options?: LitecoinAddressOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.litecoinAddress, options?.alwaysRandom);


type CreditCardNumberOptions = {
    provider?: string;
};
/**
 * creditCardNumber decorator
 *
 * @export
 * @param {CreditCardNumberOptions} [options]
 * @returns string
 * 
 */
export const creditCardNumber = (options?: CreditCardNumberOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.creditCardNumber, options?.alwaysRandom, options?.provider);


type CreditCardCVVOptions = {
};
/**
 * creditCardCVV decorator
 *
 * @export
 * @param {CreditCardCVVOptions} [options]
 * @returns string
 * 
 */
export const creditCardCVV = (options?: CreditCardCVVOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.creditCardCVV, options?.alwaysRandom);


type EthereumAddressOptions = {
};
/**
 * ethereumAddress decorator
 *
 * @export
 * @param {EthereumAddressOptions} [options]
 * @returns string
 * 
 */
export const ethereumAddress = (options?: EthereumAddressOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.ethereumAddress, options?.alwaysRandom);


type IbanOptions = {
    formatted?: boolean;
};
/**
 * iban decorator
 *
 * @export
 * @param {IbanOptions} [options]
 * @returns string
 * 
 */
export const iban = (options?: IbanOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.iban, options?.alwaysRandom, options?.formatted);


type BicOptions = {
};
/**
 * bic decorator
 *
 * @export
 * @param {BicOptions} [options]
 * @returns string
 * 
 */
export const bic = (options?: BicOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.bic, options?.alwaysRandom);


type TransactionDescriptionOptions = {
};
/**
 * transactionDescription decorator
 *
 * @export
 * @param {TransactionDescriptionOptions} [options]
 * @returns string
 * 
 */
export const transactionDescription = (options?: TransactionDescriptionOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.finance.transactionDescription, options?.alwaysRandom);
