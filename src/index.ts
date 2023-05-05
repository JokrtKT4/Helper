export class Helper {

    constructor() { }

    public static IntToLetters(value: number): string {
        const code = 'A'.charCodeAt(0) - 1;
        return String.fromCharCode(code + value);
    }
    public static getString(str: any): string {
        if (str == undefined || str == null)
            return ""
        else
            return str
    }
    public static getInt(value: any): number {
        if (!value || value == null) {
            value = 0;
        }
        if (isNaN(parseInt(value)))
            value = 0;
        return parseInt(value);
    }
    public static getDecimal(value: any): number {
        if (!value || value == null) {
            value = 0;
        }
        if (isNaN(parseFloat(value)))
            value = 0;
        return parseFloat(value);
    }
    public static IsNumeric(value: any): boolean {
        if (isNaN(parseFloat(value)))
            return false;
        else
            return true;
    }
    public static arrayKeysUppercase(obj: object[]) {
        obj = obj.map(function (item: any) {
            for (var key in item) {
                var upper = key.toUpperCase();
                // check if it already wasn't uppercase
                if (upper !== key) {
                    item[upper] = item[key];
                    delete item[key];
                }
            }
            return item;
        });
    }
    public static TitleCase(str: string) {
        return str.replace(/\p{L}+('\p{L}+)?/gu, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.slice(1)
        })
    }
}