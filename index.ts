/**
 * Serializes an array of data objects by removing methods and non-serializable properties.
 * @param {Array<any>} datas - The array of data objects to serialize.
 * @returns {Array<any>} - The array of serialized data objects.
 */
export function serializeData(datas: any[]): any[] {
  // Serialize data to remove any methods or non-serializable properties
  const plainData = datas.map((data) => {
    const plainData: Record<string, any> = { ...data };
    // Remove any methods or non-serializable properties
    for (const key in plainData) {
      if (
        typeof plainData[key] === "function" ||
        typeof plainData[key] === "symbol"
      ) {
        delete plainData[key];
      }
    }
    return plainData;
  });
  return plainData;
}

// Conditional export for CommonJS
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { serializeData };
}

// Add this line at the end of the file
export default { serializeData };