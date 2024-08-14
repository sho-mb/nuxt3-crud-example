export const countCharacters = (text: string) => {
  let count = 0
  for (const char of text) {
    // eslint-disable-next-line no-control-regex
    if (char.match(/[\x00-\x7F]/)) {
      count += 1
    }
    else {
      count += 2
    }
  }
  return count
}
