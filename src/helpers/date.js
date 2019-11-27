const getDayName = date => {
    const days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday"
    ];
    return days[date.getDay() - 1];
};

export const getDateString = date => {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    if (date > today) {
        return `${ date.getHours() }:${ date.getMinutes() }`;
    }
    const startOfWeek = today;
    startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay() - 1));
    if (date > startOfWeek) {
        return getDayName(date);
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${ day }/${ month }/${ year }`;
};