class Utils {

    static dateFormat(date, x = 0) {

        let day = date.getDate() + x;
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let data = new Date(year, month, 0);
        let daysInthisMonth = data.getDate();

        if (day > daysInthisMonth) {
            day = 1;
            month++;
        } else {
            day + x;
        }

        (day < 10) ? day = "0" + day.toString() : day = day.toString();

        (month < 10) ? month = "0" + month.toString() : month =  month.toString();

        return (day +"/"+ month +"/"+ year);

    }

    static dayFormat(date, x = 0) {

        let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return dayName[date.getDay() + x];

    }

}

export {Utils};