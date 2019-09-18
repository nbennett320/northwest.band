/**
 * 
 * should be given as string, ex: 'shirt' => category 
 * should be given as string, ex: 'long-sleeve' => subcategory 
 * should be given as string (represents design/more specific elements), ex: 'box-logo' => model 
 * should be given as string, ex: 'yellow' => color 
 * should be an integer => key
 */
const GenerateProductListing = (category, subcategory, model, color, key) => {
    
    let hex, param, result = ''
    let paramsArr = [category, subcategory, model, color]

    for(let i = 0; i < paramsArr.length; i++){

        param = paramsArr[i]

        for(let j = 0; j < paramsArr[i]; j++) {
            hex = param.charCodeAt(i).toString(16)
            result += '' + hex
        }

    }
    
    return result + '' + key
}

export default GenerateProductListing