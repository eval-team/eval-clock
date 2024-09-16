import getUserLocale from 'get-user-locale';

export function formatHour(
  locale: string | undefined,
  hour: number,
  use24HourFormat: boolean = false
): string {
  if (use24HourFormat) {
    return hour.toString().padStart(2, '0');
  } else {
    return ((hour - 1) % 12 + 1).toString();
  }
}