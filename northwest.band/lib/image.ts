export const getAverageRGB = (img: HTMLImageElement) => {
  const blockSize = 5
  const defaultRGB = { r: 0, g: 0, b: 0 }
  const canvas = document.createElement('canvas')
  const context = canvas.getContext && canvas.getContext('2d')
  let data, width, height
  let i = -4
  let length
  let rgb = { r: 0, g: 0, b: 0 }
  let count = 0
  
  if(!context) {
    return defaultRGB
  }

  height = canvas.height = img.naturalHeight 
    || img.offsetHeight
    || img.height
  width = canvas.width = img.naturalWidth
    || img.offsetWidth
    || img.width

  context.drawImage(img, 0, 0)

  try {
    data = context.getImageData(0, 0, width, height)
  } catch(e) {
    return defaultRGB
  }
  
  length = data.data.length

  while((i += blockSize*4) < length) {
    ++count
    rgb.r += data.data[i]
    rgb.g += data.data[i+1]
    rgb.b += data.data[i+2]
  }

  rgb.r = ~~(rgb.r/count)
  rgb.g = ~~(rgb.g/count)
  rgb.b = ~~(rgb.b/count)

  return rgb
}

export const useDarkTextOverImage = (img: HTMLImageElement) => {
  const rgb = getAverageRGB(img)
  const avg = (rgb.r + rgb.g + rgb.b) / 3
  return avg > 100
}
