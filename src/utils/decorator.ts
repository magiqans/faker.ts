// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function makePropertyDecoratorWithArgs<TF extends (...args: A) => any, A extends any[], P extends Parameters<TF>>(fakerFn: TF, recalling?: boolean, ...args: P): PropertyDecorator {
    return function (target, propertyKey) {
        const result: unknown = !recalling ? Reflect.apply(fakerFn, null, args) : undefined;
        if(result) {
            Reflect.defineMetadata(propertyKey, result, target);
        } else {
            Reflect.defineMetadata(propertyKey, fakerFn, target);
            Reflect.defineMetadata(propertyKey, args, target, propertyKey);
        }
    }
}