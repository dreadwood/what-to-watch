import {Comments} from './types/comment';

/*
 * DD, month YYYY
 */
export function convertDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
}

export function splitArrayHalf(arr: Comments) {
  const half = Math.ceil(arr.length / 2);

  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half, arr.length);

  const result = [];

  if (firstHalf) {
    result.push(firstHalf);
  }

  if (secondHalf) {
    result.push(secondHalf);
  }

  return result;
}
