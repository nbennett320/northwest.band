export const makeKey = (title: string) => title
  .replace(/\s/g,'-')
  .replace(/[.()]/g,'')
  .toLowerCase()
