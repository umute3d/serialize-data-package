/**
 * Serializes an array of data objects by removing methods and non-serializable properties.
 * @param {Array<any>} datas - The array of data objects to serialize.
 * @returns {Array<any>} - The array of serialized data objects.
 */
export declare function serializeData(datas: any[]): any[];
declare const _default: {
    serializeData: typeof serializeData;
};
export default _default;
