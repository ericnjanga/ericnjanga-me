

/**
 * 
 * @param text Typescript function that uses a regular expression to remove all HTML tags from the given string:
 * @returns 
 */
export function stripHtmlTags(text: string): string {
    return text.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '');
}