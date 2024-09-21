"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeData = void 0;
/**
 * Serializes an array of data objects by removing methods and non-serializable properties.
 * @param {Array<any>} datas - The array of data objects to serialize.
 * @returns {Array<any>} - The array of serialized data objects.
 */
function serializeData(datas) {
    // Serialize data to remove any methods or non-serializable properties
    var plainData = datas.map(function (data) {
        var plainData = __assign({}, data);
        // Remove any methods or non-serializable properties
        for (var key in plainData) {
            if (typeof plainData[key] === "function" ||
                typeof plainData[key] === "symbol") {
                delete plainData[key];
            }
        }
        return plainData;
    });
    return plainData;
}
exports.serializeData = serializeData;
// Conditional export for CommonJS
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = { serializeData: serializeData };
}
// Add this line at the end of the file
exports.default = { serializeData: serializeData };
