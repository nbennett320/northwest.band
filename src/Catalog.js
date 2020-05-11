// const randomNum = max => Math.floor(Math.random() * Math.floor(max))

// const randomETStyleImg = () => {
//   const colors = [
//     'white',
//     'yellow'
//   ]

//   return colors[randomNum(colors.length)]
// }

// const randomSDHoodieStyleImg = () => {
//   const colors = [
//     'pink',
//     'orange',
//     'grey',
//   ]

//   return colors[randomNum(colors.length)]
// }

// const randomSDStyleImg = () => {
//   const colors = [
//     'eggshell',
//     'hot-pink',
//     'orange',
//     'vintage-rose',
//     'yellow'
//   ]

//   return colors[randomNum(colors.length)]
// }

// const randomClassicStyleImg = () => {
//   const colors = [
//     'white-on-black',
//     'black-on-white',
//     'red-on-white',
//     'white-on-green',
//   ]

//   return colors[randomNum(colors.length)]
// }

// const randomLeoTeeStyleImg = () => {
//   const colors = [
//     'white',
//     'orange',
//     'light-blue',
//     'black',
//   ]

//   return colors[randomNum(colors.length)]
// }

// const randomLeoPhotoHoodieStyleImg = () => {
//   const colors = [
//     'grey',
//     'purple',
//     'black',
//   ]

//   return colors[randomNum(colors.length)]
// }

// const BuildCatalog = {

//   0: {
//     title: 'northwest classic t-shirt',
//     //defaultImg: `${require(`./img/img_merch/img_500x500/classic-black-on-white.jpg`)}`,
//     hoverImg: `${require(`./img/img_merch/img_500x500/classic-${randomClassicStyleImg()}.jpg`)}`,
//     altText: 't-shirt with classic nw box logo',
//     description: 't-shirt with classic nw box logo',
//     attributes: {
//       category: 'shirt',
//       subcategory: 'short-sleeve',
//       model: 'classic-tee',
//       style: 'classic',
//       color: 'black-on-white',
//       availableColors: {
//         0: 'white-on-black',
//         1: 'black-on-white',
//         2: 'red-on-white',
//         3: 'white-on-green',
//       },
//       size: '',
//     },
//     price: 12
//   },

//   1: {
//     title: 'northwest suburban dogs t-shirt',
//     // defaultImg: `${require(`./img/img_merch/img_500x500/eggshellsd.jpg`)}`,
//     hoverImg: `${require(`./img/img_merch/img_500x500/${randomSDStyleImg()}sd.jpg`)}`,
//     altText: 't-shirt with black suburban dogs logo',
//     description: 't-shirt with black suburban dogs logo',
//     attributes: {
//       category: 'shirt',
//       subcategory: 'short-sleeve',
//       model: 'suburban-dogs-tee',
//       style: 'suburban-dogs',
//       color: 'eggshell',
//       availableColors: {
//         0: 'hot-pink',
//         1: 'orange',
//         2: 'vintage-rose', 
//         3: 'eggshell',
//         4: 'yellow',
//       },
//       size: '',
//     },
//     price: 12
//   },

//   // 2: {
//   //     title: 'northwest e.t. t-shirt',
//   //     defaultImg: `${require(`./img/img_merch/img_500x500/whiteet.jpg`)}`,
//   //     hoverImg: `${require(`./img/img_merch/img_500x500/${randomETStyleImg()}et.jpg`)}`,
//   //     altText: 'nw tee endorsed by everyone\'s favorite extra terrestrial',
//   //     description: 'nw tee endorsed by everyone\'s favorite extra terrestrial',
//   //     attributes: {
//   //         category: 'shirt',
//   //         subcategory: 'short-sleeve',
//   //         model: 'et-tee',
//   //         style: 'et',
//   //         color: 'white',
//   //         availableColors: {
//   //             0: 'white',
//   //             1: 'yellow',
//   //         },
//   //         size: '',
//   //     },
//   //     price: 12
//   // },

//   2: {
//     title: 'leo photo t-shirt',
//     //defaultImg: `${require('./img/img_merch/img_500x500/leo-tee-white.jpg')}`,
//     hoverImg: `${require(`./img/img_merch/img_500x500/leo-tee-${randomLeoTeeStyleImg()}.jpg`)}`,
//     altText: 't-shirt with a lil rascal named leo on it',
//     description: 't-shirt with a lil rascal named leo on it',
//     attributes: {
//       category: 'shirt',
//       subcategory: 'short-sleeve',
//       model: 'leo-photo-shirt',
//       style: 'suburban-dogs',
//       color: 'white',
//       availableColors: {
//         0: 'white',
//         1: 'orange',
//         2: 'light-blue',
//         3: 'black',
//       },
//       size: '',
//     },
//     price: 14
//   },

//   3: {
//     title: 'leo photo hoodie',
//     //defaultImg: `${require('./img/img_merch/img_500x500/leo-hoodie-grey.jpg')}`,
//     hoverImg: `${require(`./img/img_merch/img_500x500/leo-hoodie-${randomLeoPhotoHoodieStyleImg()}.jpg`)}`,
//     altText: 'hoodie with a lil rascal named leo on it',
//     description: 'hoodie with a lil rascal named leo on it',
//     attributes: {
//       category: 'sweatshirt',
//       subcategory: 'hoodie',
//       model: 'leo-photo-hoodie',
//       style: 'suburban-dogs',
//       color: 'grey',
//       availableColors: {
//         0: 'grey',
//         1: 'purple',
//         2: 'black',
//       },
//       size: '',
//     },
//     price: 24
//   },

//   4: {
//     title: 'northwest suburban dogs hoodie',
//     //defaultImg: `${require('./img/img_merch/img_500x500/grey hoodie.jpg')}`,
//     hoverImg: `${require(`./img/img_merch/img_500x500/${randomSDHoodieStyleImg()} hoodie.jpg`)}`,
//     altText: 'grey hoodie with black suburban dogs',
//     description: 'grey hoodie with black suburban dogs',
//     attributes: {
//       category: 'sweatshirt',
//       subcategory: 'hoodie',
//       model: 'suburban-dogs-hoodie',
//       style: 'suburban-dogs',
//       color: 'grey',
//       availableColors: {
//         0: 'grey',
//         1: 'orange',
//         2: 'pink',
//       },
//       size: '',
//     },
//     price: 22
//   },

//   5: {
//     title: 'suburban dogs cd',
//     //defaultImg: `${require('./img/img_merch/img_500x500/suburban dogs cd cover art.jpg')}`,
//     hoverImg: `${require(`./img/img_merch/img_500x500/suburban dogs cd back art.jpg`)}`,
//     altText: 'physical cd of northwest\'s suburban dogs with a lyrics booklet',
//     description: 'physical cd of northwest\'s suburban dogs with a lyrics booklet',
//     attributes: {
//       category: 'misc',
//       subcategory: 'music',
//       model: 'suburban-dogs-cd',
//       style: 'suburban-dogs',
//       color: 'N/A',
//       availableColors: {
//       },
//       size: 'N/A',
//     },
//     price: 18
//   },

  

// }

// export default BuildCatalog