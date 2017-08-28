class StringExtensions {
    static isNullOrEmpty(str) {
    return (!str || 0 === str.length);
}

    static isNullOrWhiteSpace(str) {
        return (str.length === 0 || !str.trim());
    }
}

export default StringExtensions;
