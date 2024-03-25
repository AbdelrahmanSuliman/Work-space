function CalculateDaysBetween(begin, end) {
    // Parse the dates as JavaScript Date objects
    var date1 = new Date(begin);
    var date2 = new Date(end);

    // Calculate the difference in milliseconds
    var difference = date2.getTime() - date1.getTime();

    // Convert the difference from milliseconds to days
    var days = difference / (1000 * 3600 * 24);

    // Return the number of days
    return Math.round(days);
}

console.log(CalculateDaysBetween("2020-01-01", "2020-01-31"));