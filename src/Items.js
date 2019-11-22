// class Items {    
//     randomNum = max => Math.floor(Math.random() * Math.floor(max))

//     randomETStyleImg = () => {
//         const colors = [
//             'white',
//             'yellow'
//         ]

//         return colors[this.randomNum(colors.length)]
//     }

//     randomSDHoodieStyleImg = () => {
//         const colors = [
//             'pink',
//             'orange',
//             'grey',
//         ]

//         return colors[this.randomNum(colors.length)]
//     }

//     randomSDStyleImg = () => {
//         const colors = [
//             'white',
//             'hotpink',
//             'orange',
//             'pink',
//             'yellow'
//         ]

//         return colors[this.randomNum(colors.length)]
//     }

//     randomClassicStyleImg = () => {
//         const colors = [
//             'white-on-black',
//             'black-on-white',
//             'red-on-white',
//             'white-on-green',
//         ]

//         return colors[this.randomNum(colors.length)]
//     }

//     Items = {

//         0: {
//             title: 'northwest classic t-shirt',
//             defaultImg: `${require(`./img/img_merch/img_500x500/classic-black-on-white.png`)}`,
//             hoverImg: `${require(`./img/img_merch/img_500x500/classic-${this.randomClassicStyleImg()}.png`)}`,
//             altText: 't-shirt with classic nw box logo',
//             description: 't-shirt with classic nw box logo',
//             attributes: {
//                 category: 'shirt',
//                 subcategory: 'short-sleeve',
//                 model: 'suburban-classic-tee',
//                 color: '',
//                 availableColors: {
//                     0: 'white-on-black',
//                     1: 'black-on-white',
//                     2: 'red-on-white',
//                     3: 'white-on-green',
//                 },
//                 size: '',
//             },
//             price: 12
//         },
    
//         1: {
//             title: 'northwest suburban dogs t-shirt',
//             defaultImg: `${require(`./img/img_merch/img_500x500/whitesd.png`)}`,
//             hoverImg: `${require(`./img/img_merch/img_500x500/${this.randomSDStyleImg()}sd.png`)}`,
//             altText: 't-shirt with black suburban dogs logo',
//             description: 't-shirt with black suburban dogs logo',
//             attributes: {
//                 category: 'shirt',
//                 subcategory: 'short-sleeve',
//                 model: 'suburban-dogs-tee',
//                 color: 'eggshell',
//                 availableColors: {
//                     0: 'hot-pink',
//                     1: 'orange',
//                     2: 'vintage-rose',
//                     3: 'eggshell',
//                     4: 'yellow',
//                 },
//                 size: '',
//             },
//             price: 12
//         },
    
//         2: {
//             title: 'northwest e.t. t-shirt',
//             defaultImg: `${require(`./img/img_merch/img_500x500/whiteet.png`)}`,
//             hoverImg: `${require(`./img/img_merch/img_500x500/${this.randomETStyleImg()}et.png`)}`,
//             altText: 'nw tee endorsed by everyone\'s favorite extra terrestrial',
//             description: 'nw tee endorsed by everyone\'s favorite extra terrestrial',
//             attributes: {
//                 category: 'shirt',
//                 subcategory: 'short-sleeve',
//                 model: 'et-tee',
//                 color: 'white',
//                 availableColors: {
//                     0: 'white',
//                     1: 'yellow',
//                 },
//                 size: '',
//             },
//             price: 12
//         },
    
//         3: {
//             title: 'northwest suburban dogs hoodie',
//             defaultImg: `${require('./img/img_merch/img_500x500/grey hoodie.png')}`,
//             hoverImg: `${require(`./img/img_merch/img_500x500/${this.randomSDHoodieStyleImg()} hoodie.png`)}`,
//             altText: 'grey hoodie with black suburban dogs',
//             description: 'grey hoodie with black suburban dogs',
//             attributes: {
//                 category: 'sweatshirt',
//                 subcategory: 'hoodie',
//                 model: 'suburban-dogs-hoodie',
//                 color: 'grey',
//                 size: '',
//             },
//             price: 22
//         },
    
//     }

// }

// export default Items