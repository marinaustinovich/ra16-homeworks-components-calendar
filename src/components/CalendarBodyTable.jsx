import PropTypes from "prop-types";
import { CalendarBodyTableThead } from "./CalendarBodyTableThead";
import { CalendarBodyTableCol } from "./CalendarBodyTableCol";
import { CalendarBodyTableTbody } from "./CalendarBodyTableTbody";

export const CalendarBodyTable = ({ date }) => (
  <table className="ui-datepicker-calendar">
    <CalendarBodyTableCol />
    <CalendarBodyTableThead />
    <CalendarBodyTableTbody date={date} />
  </table>
);

CalendarBodyTable.propTypes = {
  date: PropTypes.shape({ format: PropTypes.func.isRequired }),
};
