export class Str {

    capitalize(str: string) {
        if (!str || typeof str !== "string") return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    truncate = (str: string, length: number) => {
        if (!str || str.length <= length) return str;
        return `${str.slice(0, length)}...`;
    };
}