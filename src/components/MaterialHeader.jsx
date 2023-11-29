import PropTypes from "prop-types";

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const toGenitiveMonth = (month) => {
  const map = {
    январь: "января",
    февраль: "февраля",
    март: "марта",
    апрель: "апреля",
    май: "мая",
    июнь: "июня",
    июль: "июля",
    август: "августа",
    сентябрь: "сентября",
    октябрь: "октября",
    ноябрь: "ноября",
    декабрь: "декабря",
  };
  return map[month.toLowerCase()] || month;
};

export const MaterialHeader = ({ date }) => {
  const formattedDay = capitalizeFirstLetter(date.format("dddd"));
  const formattedDayNum = date.format("D");
  const formattedMonth = toGenitiveMonth(date.format("MMMM"));
  const formattedYear = date.format("YYYY");

  return (
    <div className="ui-datepicker-material-header">
      <div className="ui-datepicker-material-day">{formattedDay}</div>
      <div className="ui-datepicker-material-date">
        <div className="ui-datepicker-material-day-num">{formattedDayNum}</div>
        <div className="ui-datepicker-material-month">{formattedMonth}</div>
        <div className="ui-datepicker-material-year">{formattedYear}</div>
      </div>
    </div>
  );
};

MaterialHeader.propTypes = {
  date: PropTypes.shape({ format: PropTypes.func.isRequired }),
};
