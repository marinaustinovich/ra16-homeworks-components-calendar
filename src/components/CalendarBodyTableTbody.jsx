import PropTypes from "prop-types";

export const CalendarBodyTableTbody = ({ date: currentDay }) => {
  const dates = [];
  const start = currentDay.startOf("month").startOf("week");
  const end = currentDay.endOf("month").endOf("week");

  for (let date = start; date.isBefore(end); date = date.add(1, "day")) {
    dates.push({
      date,
      isInCurrentMonth: date.month() === currentDay.month(),
      isCurrentDay: date.isSame(currentDay, "day"),
    });
  }

  // Разбиваем массив дат на недели
  const daysInWeek = 7;
  const weeks = Array.from(
    { length: Math.ceil(dates.length / daysInWeek) },
    (_, i) => dates.slice(i * daysInWeek, i * daysInWeek + daysInWeek)
  );

  return (
    <tbody>
      {weeks.map((week, i) => (
        <tr key={i}>
          {week.map(({ date, isInCurrentMonth, isCurrentDay }) => (
            <td
              className={`${isInCurrentMonth || "ui-datepicker-other-month"} ${
                isCurrentDay && "ui-datepicker-today"
              }`}
              key={date.format("YYYY-MM-DD")}
            >
              {date.format("D")}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

CalendarBodyTableTbody.propTypes = {
  date: PropTypes.shape({ format: PropTypes.func.isRequired }),
};
