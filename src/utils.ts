import {Comments} from './types/comment';

// DD, month YYYY
export function convertDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
}

// TODO: add correct type
export function splitArrayHalf(arr: Comments) {
  const half = Math.ceil(arr.length / 2);

  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(-half);

  return [firstHalf, secondHalf];
}
