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
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const outputHours = hours < 10 ? '0' + hours : hours;
        const outputMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${ outputHours }:${ outputMinutes }`;
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