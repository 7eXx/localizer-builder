import { JsonObject } from '@angular-devkit/core';
interface Options extends JsonObject {
    source: string;
    destination: string;
}
declare const _default: import("@angular-devkit/architect/src/internal").Builder<Options & JsonObject>;
export default _default;
