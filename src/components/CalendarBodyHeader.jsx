import PropTypes from "prop-types";
import { capitalizeFirstLetter } from "./MaterialHeader";

export const CalendarBodyHeader = ({ date }) => (
  <div className="ui-datepicker-header">
    <div className="ui-datepicker-title">
      <span className="ui-datepicker-month">
        {capitalizeFirstLetter(date.format("MMMM"))}
      </span>
      &nbsp;<span className="ui-datepicker-year">{date.format("YYYY")}</span>
    </div>
  </div>
);

CalendarBodyHeader.propTypes = {
  date: PropTypes.shape({ format: PropTypes.func.isRequired }),
};
