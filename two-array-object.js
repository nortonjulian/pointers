// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const result = {};

    keys.forEach((key, index) => {
        const value = index < values.length ? values[index] : null;
        result[key] = value
    });

    return result;
}
