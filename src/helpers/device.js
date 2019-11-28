const iOSClassList = () => {
    const body = document.body;
    if (isIOS()) {
        body.classList.add('body-ios');
    }
};

export const isIOS = () => {
    return (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
        || (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
};

const checkStandalone = () => {
    const body = document.body;
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        body.classList.add('body-standalone');
    }
};

const setHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const processHeight = () => {
    setHeight();
    window.addEventListener('resize', setHeight);
};

export default () => {
    iOSClassList();
    checkStandalone();
};