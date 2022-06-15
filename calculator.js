class Calculator {
    static divide = (x, y) => {
        if (x === 0 && y !== 0)
            return "Invalid!";

        if (x === 0 && y === 0)
            return "Not Allowed!";

        if (x !== 0 && y === 0)
            return "Not Allowed!";

        return x / y;
    }

    static add = (x, y) => {
        return x + y;
    }

    static substract = (x, y) => {
        return x - y;
    }

    static multiply = (x, y) => {
        return x * y;
    }
}

module.exports = Calculator;