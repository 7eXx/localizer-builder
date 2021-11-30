"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const fs_1 = require("fs");
exports.default = (0, architect_1.createBuilder)(copyFileBuilder);
function copyFileBuilder(options, context) {
    return __awaiter(this, void 0, void 0, function* () {
        context.reportStatus(`Copying ${options.source} to ${options.destination}.`);
        try {
            yield fs_1.promises.copyFile(options.source, options.destination);
        }
        catch (err) {
            context.logger.error('Failed to copy file.');
            return {
                success: false,
                error: err.message,
            };
        }
        context.reportStatus('Done.');
        return { success: true };
    });
}
//# sourceMappingURL=localized-builder.js.map