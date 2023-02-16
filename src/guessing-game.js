class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;          
    }

    guess() {
        //предположение
        this.res = this.min + Math.ceil((this.max - this.min)/2);
        return this.res;
    }

    lower() {
        //загаданное число меньше, чем предположение
        this.max =  this.res;
    }

    greater() {
        //загаданное число больше, чем предположение
        this.min =  this.res;       
    }
}

module.exports = GuessingGame;
