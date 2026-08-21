/**
 * Combines multiple CSS class names into a single string.
 * Filters out falsy values (null, undefined, false, empty string).
 */
export function cn(...classes: (string | undefined | null | boolean | Record<string, boolean>)[]): string {
  const result: string[] = [];

  for (const c of classes) {
    if (!c) continue;

    if (typeof c === 'string') {
      result.push(c);
    } else if (typeof c === 'object') {
      for (const [key, value] of Object.entries(c)) {
        if (value) {
          result.push(key);
        }
      }
    }
  }

  return result.join(' ');
}

/**
 * Formats a number with standard commas.
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

/**
 * Translates YYYY-MM date string to human-readable Month YYYY.
 */
export function formatCompletionDate(dateStr: string): string {
  const [year, month] = dateStr.split('-');
  if (!year || !month) return dateStr;
  
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
