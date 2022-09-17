import {Comments} from './types/comment';

/**
 * return date in format month DD, YYYY
 *
 * (exam: June 14, 2022)
 */
export function convertDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
}

/**
 * return the array divided in half
 *
 * (exam: [1, 2, 3, 4, 5] => [[1, 2, 3], [4, 5]])
 */
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

/**
 * return string with one leading zero
 *
 * (exam: 2 => 02)
 */
export const addLead0 = (num: number) => num.toString().padStart(2, '0');

/**
 * return string with time left
 *
 * (exam: 53:12 or 1:45:35)
 */
export const getDuration = (duration: number, current: number) => {
  const INITIAL_STATE = '--:--';

  if (current > duration) {
    return INITIAL_STATE;
  }

  const SECONDS_PER_HOUR = 3600;
  const SECONDS_PER_MINUTE = 60;

  const delta = duration - current;

  const hours = Math.floor(delta / SECONDS_PER_HOUR );
  const minutes = Math.floor(delta % SECONDS_PER_MINUTE / SECONDS_PER_MINUTE);
  const seconds = Math.round(delta % SECONDS_PER_MINUTE);

  const hh = hours ? `${hours}:` : '';
  const mm = `${addLead0(minutes)}:`;
  const ss = addLead0(seconds);

  return `${hh}${mm}${ss}`;
};
