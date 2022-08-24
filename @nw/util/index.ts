export const makeKey = (title: string) => title
  .replace(/\s/g,'-')
  .replace(/[.()]/g,'')
  .toLowerCase()

export const isOverflowing = ({ clientWidth, clientHeight, scrollWidth, scrollHeight }: { clientWidth: number, clientHeight: number, scrollWidth: number, scrollHeight: number }): boolean => {
  return scrollHeight > clientHeight || scrollWidth > clientWidth
}

export const overflowRatio = ({ clientWidth, clientHeight, scrollWidth, scrollHeight }: { clientWidth: number, clientHeight: number, scrollWidth: number, scrollHeight: number }): [number, number] => {
  const height = scrollHeight / clientHeight
  const width = scrollWidth / clientWidth
  return [height, width]
}
