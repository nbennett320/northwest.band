const filterString = string => {
    string = string.replace('(', '')
    string = string.replace(')', '')
    string = string.replace(' ', '')
    string = string.replace('-', '')
    return string
}

const isOnlyNumbers = phoneString => Number.isInteger(Number(filterString(phoneString)))

const isValidLength = phoneString => {

    if(filterString(phoneString).length === 10) return true
    else return false

}

const validatePhone = phoneString => {
    
    if(!isOnlyNumbers(phoneString)) return false
    
    if(!isValidLength(phoneString)) return false

    return true

}

export default validatePhone