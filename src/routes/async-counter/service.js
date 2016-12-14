export function fetch () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Date.now() % 2 === 0) {
        resolve(1)
      } else {
        reject()
      }
    }, 1000)
  })
}
