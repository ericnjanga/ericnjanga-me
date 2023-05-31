

/**
 * 
 * @param text Typescript function that uses a regular expression to remove all HTML tags from the given string:
 * @returns 
 */
export function stripHtmlTags(text: string): string {
    return text.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '');
}





export function subtractDates(date1: string, date2: string): string {
    const [month1, year1] = date1.split("-");
    const [month2, year2] = date2.split("-");

    const monthsDiff = (Number(year2) - Number(year1)) * 12 + (Number(month2) - Number(month1));
    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;

    let result = "";

    if (years > 0) {
        result += years === 1 ? "1 year" : `${years} years`;
    }

    if (months > 0) {
        if (result.length > 0) {
            result += " and ";
        }
        result += months === 1 ? "1 month" : `${months} months`;
    }

    if (result.length === 0) {
        result = "No difference";
    }

    return result;
}
