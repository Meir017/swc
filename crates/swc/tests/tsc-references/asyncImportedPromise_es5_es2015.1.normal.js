// @target: es5
// @lib: es5,es2015.promise
// @module: commonjs
// @filename: task.ts
export class Task extends Promise {
}
// @filename: test.ts
import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
class Test {
    example() {
        return _async_to_generator(function*() {
            return;
        })();
    }
}
export { };
