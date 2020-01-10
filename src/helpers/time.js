export const getModulo = time => {
    const modulo = Math.round(time / 10) % 100;
    if (modulo < 10) {
        return '0' + modulo;
    }

    return modulo;
};

export const getSeconds = time => {
    const seconds = Math.floor(time / 1000) % 60;
    if (seconds < 10) {
        return '0' + seconds;
    }

    return seconds;
};

export const getMinutes = time => {
    const minutes = Math.floor(time / 60000);
    if (minutes < 10) {
        return '0' + minutes;
    }
    
    return minutes;
};

export const getCutMinutes = time => {
    const minutes = Math.floor(time / 60000) % 60;
    if (minutes < 10) {
        return '0' + minutes;
    }
    
    return minutes;
};

export const getHours = time => {
    const hours = Math.floor(time / 3600000);
    if (hours < 10) {
        return '0' + hours;
    }
    
    return hours;
};

export const timeToString = time => {
    const minutes = getMinutes(time);
    const seconds = getSeconds(time);
    const modulo = getModulo(time);

    return `${ minutes }:${ seconds },${ modulo }`;
};