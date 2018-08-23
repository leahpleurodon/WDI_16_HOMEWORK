export default class Password {
    constructor(string = ""){
        this.string = string
    }

    eval(){
        this.getScore()
        return { 
            score: this.getScore(), 
            hasSpecialChar: this.hasSymbol(),
            hasLowerCase: this.hasLowerCase(), 
            hasUpperCase: this.hasUpperCase(),
            hasNumber: this.hasNumber(),
            isOver8Char: this.overEightChars()
        }
    }

    hasLowerCase(){
        return this.string.toUpperCase() !== this.string ?  true : false
    }

    hasUpperCase(){
        return this.string.toLowerCase() !== this.string ?  true : false
    }

    overEightChars(){
        return this.string.length > 7 ? true : false 
    }

    hasSymbol(){
        return /[\W_]/.test(this.string)
    }

    hasNumber(){
        return /[\d]/.test(this.string)
    }
    

    getScore(){
        let score = 0
        if(this.hasLowerCase()){score ++}
        if(this.hasUpperCase()){score ++}
        if(this.hasSymbol()){score ++}
        if(this.hasNumber()){score ++}
        if(this.overEightChars()){score ++}
        return score
    }
}