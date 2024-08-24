
/**
 * Capitalize the first letter of a string
 * @param str - The string to capitalize
 * @returns The capitalized string
 */
function capitalize(str: string) {
    if (!str || typeof str !== "string") return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncate a string to a certain length
 * @param str - The string to truncate
 * @param length - The length to truncate to
 * @returns The truncated string
 */
function truncate(str: string, length: number) {
    if (!str || str.length <= length) return str;
    return `${str.slice(0, length)}...`;
}

export { capitalize, truncate };