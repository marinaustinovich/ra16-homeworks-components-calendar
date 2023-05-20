import PropTypes from 'prop-types';

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toGenitiveMonth(month) {
    const map = {
        'январь': 'января',
        'февраль': 'февраля',
        'март': 'марта',
        'апрель': 'апреля',
        'май': 'мая',
        'июнь': 'июня',
        'июль': 'июля',
        'август': 'августа',
        'сентябрь': 'сентября',
        'октябрь': 'октября',
        'ноябрь': 'ноября',
        'декабрь': 'декабря',
    };
    return map[month.toLowerCase()] || month;
}

export function MaterialHeader(props) {
    const { date } = props;
    return (
        <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{capitalizeFirstLetter(date.format('dddd'))}</div>
            <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">{date.format('D')}</div>
                <div className="ui-datepicker-material-month">{toGenitiveMonth(date.format('MMMM'))}</div>
                <div className="ui-datepicker-material-year">{date.format('YYYY')}</div>
            </div>
        </div>
    );
}

MaterialHeader.propTypes = {
    date: PropTypes.shape({ format: PropTypes.func.isRequired })
    // date: PropTypes.instanceOf(Date)
}