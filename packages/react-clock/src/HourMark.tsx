import { memo } from 'react';

import Mark from './Mark.js';

import { formatHour as defaultFormatHour } from './shared/hourFormatter.js';

type HourMarkProps = React.ComponentProps<typeof Mark> & {
  formatHour?: typeof defaultFormatHour;
  locale?: string;
  number?: number;
  use24HourFormat?: boolean;
};

const HourMark: React.FC<HourMarkProps> = memo(function HourMark({
  formatHour = defaultFormatHour,
  locale,
  number,
  use24HourFormat = false,
  ...otherProps
}: HourMarkProps) {
  const formattedNumber = number ? formatHour(locale, number, use24HourFormat) : null;
  return <Mark number={formattedNumber} {...otherProps} />;
});

export default HourMark;
