import PropTypes from "prop-types";
import { MaterialHeader } from "./MaterialHeader";
import { CalendarBody } from "./CalendarBody";

const dayjs = require("dayjs");
require("dayjs/locale/ru");
dayjs.locale("ru");
export const Calendar = ({ date }) => {
  const dayjsDate = dayjs(date);

  return (
    <div className="ui-datepicker">
      <MaterialHeader date={dayjsDate} />
      <CalendarBody date={dayjsDate} />
    </div>
  );
};

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
};
