import PropTypes from "prop-types";
import { CalendarBodyHeader } from "./CalendarBodyHeader";
import { CalendarBodyTable } from "./CalendarBodyTable";

export const CalendarBody = ({ date }) => (
  <>
    <CalendarBodyHeader date={date} />
    <CalendarBodyTable date={date} />
  </>
);

CalendarBody.propTypes = {
  date: PropTypes.shape({ format: PropTypes.func.isRequired }),
};
