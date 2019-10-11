const containsAtSymbol = emailString => {

    for(let i = 0; i < emailString.length; i++) {

        if(emailString.charAt(i) !== '@') continue
        else return i

    }

    return false

}

const containsDotAfterAt = (atIndex, emailString) => {

    for(let i = atIndex; i < emailString.length; i++) {

        if(emailString.charAt(i) !== '.') continue
        else return i

    }

    return false

}

const validNumOfCharsAfterFinalDot = (lastDotIndex, emailString) => {

    if(
        emailString.length - lastDotIndex - 1 > 4 ||
        emailString.length - lastDotIndex - 1 < 2
    ) return false
    else return true

}

const hasTwoDotsInRow = (emailString) => {

    for(let i = emailString.length; i > 0; i--) {

        if(
            emailString.charAt(i) === '.' &&
            emailString.charAt(i - 1) === '.'
        ) return true

    }

    return false

}

const validateEmail = emailString => {

    let atIndex = containsAtSymbol(emailString)
    if(!atIndex) return false

    let lastDotIndex = containsDotAfterAt(atIndex, emailString)
    if(!lastDotIndex) return false

    if(!validNumOfCharsAfterFinalDot(lastDotIndex, emailString)) return false

    if(hasTwoDotsInRow(emailString)) return false

    return true

}

export default validateEmail