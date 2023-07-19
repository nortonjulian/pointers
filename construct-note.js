// add whatever parameters you deem necessary
function constructNote(message, letters) {
    let messageChars = {};
    let letterChars = {};

    for (let char of message) {
        messageChars[char] = (messageChars[char] || 0) + 1;
    }

    for (let char of letters) {
        letterChars[char] = (letterChars[char]) + 1;
    }

    for (let char in messageChars) {
        if (!letterChars[char] || letterChars[char] < messageChars[char]) {
            return false;
        }
    }

    return true;
}
