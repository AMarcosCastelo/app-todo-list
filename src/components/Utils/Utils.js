class Utils {
  static dateFormat(date, x = 0) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    const data = new Date(year, month, 0);
    const daysInthisMonth = data.getDate();

    if (day > daysInthisMonth) {
      day = 1;
      month += 1;
    } else {
      day += x;
    }

    // eslint-disable-next-line no-unused-expressions
    day < 10 ? (day = `0${day.toString()}`) : (day = day.toString());

    // eslint-disable-next-line no-unused-expressions
    month < 10 ? (month = `0${month.toString()}`) : (month = month.toString());

    return `${day}/${month}/${year}`;
  }

  static dayFormat(date, x = 0) {
    const dayName = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    return dayName[date.getDay() + x];
  }
}

export { Utils };
