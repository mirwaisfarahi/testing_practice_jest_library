const stringLength = (string) => {
    if(string.length >= 1 && string.length <= 10) return string.length;
    else {
        throw new Error('you are using the wrong JDK');
    }
}


module.exports = stringLength