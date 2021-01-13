# Faker.ts

Generate massive amounts of fake contextual data using typescript decorators

## This package based from [faker.js](https://github.com/Marak/faker.js) package

## Usage

```ts
import Faker, { address, internet } from "faker-ts";

@Faker()
class MyObject {
  @address.name()
  randomName: string;

  @internet.email()
  randomEmail: string;
}

const instance = new MyObject();
instance.randomName; // // Rowan Nikolaus
instance.randomEmail; // Kassandra.Haley@erich.biz
```

## Setup (typescript)

- `npm i typescript --save-dev`
- `npx tsc --init` - creates tsconfig.json file

- Enable `experimentalDecorators` and `emitDecoratorMetadata` in your tsconfig.json file

### API

Each parameter decorator have an option : `alwaysRandom`. It means each call of property - generate new value.

Example:

```ts
import { Fake, name } from "faker-ts";
@Fake()
class RandomMan {
  @name.firstName({ alwaysRandom: true })
  alwaysRandomName: string;
}
const myModel = new RandomMan();
function hello(name: string) {
  console.log("Hello, ", name);
}
hello(myModel.alwaysRandomName); // output: Hello, Marlin
hello(myModel.alwaysRandomName); // output: Hello, Sydnie
```

#### Fake()

Fake class decorator initialze all fakes properties.

Example:

```ts
import { Fake, fake } from "faker-ts";
@Fake()
class A {
  @fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")
  name: string;
}
console.log(new A().name); // outputs: "Marks, Dean Sr."
```

#### fake()

fake property decorator that will call original [faker.fake()](https://github.com/Marak/faker.js#fakerfake) function with the same parameters.

Example:

```ts
import { Fake, fake } from "faker-ts";
@Fake()
class A {
  @fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")
  name: string;
}
console.log(new A().name); // outputs: "Marks, Dean Sr."
```

API Decorators

- address
- - zipCode
- - zipCodeByState
- - city
- - cityPrefix
- - citySuffix
- - streetName
- - streetAddress
- - streetSuffix
- - streetPrefix
- - secondaryAddress
- - county
- - country
- - countryCode
- - state
- - stateAbbr
- - latitude
- - longitude
- - direction
- - cardinalDirection
- - ordinalDirection
- - nearbyGPSCoordinate
- - timeZone
- commerce
- - color
- - department
- - productName
- - price
- - productAdjective
- - productMaterial
- - product
- - productDescription
- company
- - suffixes
- - companyName
- - companySuffix
- - catchPhrase
- - bs
- - catchPhraseAdjective
- - catchPhraseDescriptor
- - catchPhraseNoun
- - bsAdjective
- - bsBuzz
- - bsNoun
- database
- - column
- - type
- - collation
- - engine
- date
- - past
- - future
- - between
- - recent
- - soon
- - month
- - weekday
- finance
- - account
- - accountName
- - routingNumber
- - mask
- - amount
- - transactionType
- - currencyCode
- - currencyName
- - currencySymbol
- - bitcoinAddress
- - litecoinAddress
- - creditCardNumber
- - creditCardCVV
- - ethereumAddress
- - iban
- - bic
- - transactionDescription
- git
- - branch
- - commitEntry
- - commitMessage
- - commitSha
- - shortSha
- hacker
- - abbreviation
- - adjective
- - noun
- - verb
- - ingverb
- - phrase
- helpers
- - randomize
- - createCard
- - contextualCard
- - userCard
- - createTransaction
- image
- - image
- - avatar
- - imageUrl
- - abstract
- - animals
- - business
- - cats
- - city
- - food
- - nightlife
- - fashion
- - people
- - nature
- - sports
- - technics
- - transport
- - dataUri
- - lorempixel
- - unsplash
- - lorempicsum
-internet
- - avatar
- - email
- - exampleEmail
- - userName
- - protocol
- - url
- - domainName
- - domainSuffix
- - domainWord
- - ip
- - ipv6
- - userAgent
- - color
- - mac
- - password
- lorem
- - word
- - words
- - sentence
- - slug
- - sentences
- - paragraph
- - paragraphs
- - text
- - lines
- - music
- - genre
-name
- - firstName
- - lastName
- - findName
- - jobTitle
- - gender
- - prefix
- - suffix
- - title
- - jobDescriptor
- - jobArea
- - jobType
- phone
- - phoneNumber
- - phoneNumberFormat
- - phoneFormats
- random
- - number
- - float
- - arrayElement
- - arrayElements
- - objectElement
- - uuid
- - boolean
- - word
- - words
- - image
- - locale
- - alpha
- - alphaNumeric
- - hexaDecimal
- system
- - fileName
- - commonFileName
- - mimeType
- - commonFileType
- - commonFileExt
- - fileType
- - fileExt
- - directoryPath
- - filePath
- - semver
- time
- - recent
- - unique
- vehicle
- - vehicle
- - manufacturer
- - model
- - type
- - fuel
- - vin
- - color
