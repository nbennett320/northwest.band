// /**
//  * 
//  * @param {should be given as string, ex: 'shirt' } category 
//  * @param {should be given as string, ex: 'long-sleeve' } subcategory 
//  * @param {should be given as string (represents design/more specific elements), ex: 'box-logo'} model 
//  * @param {should be given as string, ex: 'yellow'} color 
//  * @param {should be given as string of two characters, ex: '0S', '0M', '0L', 'XL', '2L' (where 2L == 2XL)} size 
//  */
// GenerateProductId = (category, subcategory, model, color, size) => {
    
//     let hex, result = ''
//     let paramsArr = [category, subcategory, model, color, size]

//     for(let i = 0; i < paramsArr.length; i++){

//         for(let j = 0; j < paramsArr[i]; j++) {
//             hex = param.charCodeAt(i).toString(16)
//             result += '' + hex
//         }

//     }
    
//     return result
// }
