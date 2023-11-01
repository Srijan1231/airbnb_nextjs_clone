"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";

interface CalenderProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}
const Calendar: React.FC<CalenderProps> = ({
  value,
  onChange,
  disabledDates,
}) => {
  return <DateRange></DateRange>;
};

export default Calendar;
