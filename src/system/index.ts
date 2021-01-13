import faker from 'faker';
import { AlwaysRandom } from '../core';
import { makePropertyDecoratorWithArgs } from "../utils";

type FileNameOptions = {
    ext?: string;
    type?: string;
};
/**
 * fileName system decorator
 *
 * @export
 * @param {FileNameOptions} [options]
 * @returns string
 * 
 */
export const fileName = (options?: FileNameOptions & AlwaysRandom): ParameterDecorator =>
    makePropertyDecoratorWithArgs(faker.system.fileName, options?.alwaysRandom, options?.ext, options?.type);


type CommonFileNameOptions = {
    ext: string;
    type?: string;
};
/**
 * commonFileName system decorator
 *
 * @export
 * @param {CommonFileNameOptions} [options]
 * @returns string
 * 
 */
export const commonFileName = (options: CommonFileNameOptions & AlwaysRandom): ParameterDecorator => makePropertyDecoratorWithArgs(faker.system.commonFileName, options.alwaysRandom, options.ext, options.type);


type MimeTypeOptions = {
};
/**
 * mimeType system decorator
 *
 * @export
 * @param {MimeTypeOptions} [options]
 * @returns string
 * 
 */
export const mimeType = (options?: MimeTypeOptions & AlwaysRandom): ParameterDecorator => makePropertyDecoratorWithArgs(faker.system.mimeType, options?.alwaysRandom);

type CommonFileTypeOptions = {
};
/**
 * commonFileType system decorator
 *
 * @export
 * @param {CommonFileTypeOptions} [options]
 * @returns string
 * 
 */
export const commonFileType = (options?: CommonFileTypeOptions & AlwaysRandom): ParameterDecorator => makePropertyDecoratorWithArgs(faker.system.commonFileType, options?.alwaysRandom);

type FileTypeOptions = {
};
/**
 * fileType system decorator
 *
 * @export
 * @param {FileTypeOptions} [options]
 * @returns string
 * 
 */
export const fileType = (options?: FileTypeOptions & AlwaysRandom): ParameterDecorator => makePropertyDecoratorWithArgs(faker.system.fileType, options?.alwaysRandom);


type FileExtOptions = {
    mimeType: string;
};
/**
 * fileExt system decorator
 *
 * @export
 * @param {FileExtOptions} [options]
 * @returns string
 * 
 */
export const fileExt = (options: FileExtOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.system.fileExt, options.alwaysRandom, options.mimeType);

type DirectoryPathOptions = {
};
/**
 * directoryPath system decorator
 *
 * @export
 * @param {DirectoryPathOptions} [options]
 * @returns string
 * 
 */
export const directoryPath = (options?: DirectoryPathOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.system.directoryPath, options?.alwaysRandom);


type FilePathOptions = {
};
/**
 * filePath system decorator
 *
 * @export
 * @param {FilePathOptions} [options]
 * @returns string
 * 
 */
export const filePath = (options?: FilePathOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.system.filePath, options?.alwaysRandom);


type SemverOptions = {
};
/**
 * semver system decorator
 *
 * @export
 * @param {SemverOptions} [options]
 * @returns string
 * 
 */
export const semver = (options?: SemverOptions & AlwaysRandom) => makePropertyDecoratorWithArgs(faker.system.semver, options?.alwaysRandom);
