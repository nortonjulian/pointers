// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();

    if (str1.length !== str2.length) {
        return false;
    }

    const freq1 = {};
    const freq2 = {};

    for (let digit of str1) {
        freq1[digit] = (freq1[digit] || 0) + 1;
    }

    for (let digit of str2) {
        freq2[digit] = (freq2[digit] || 0) + 1;
    }

    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }

    return true;
}
