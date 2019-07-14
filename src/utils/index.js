export const delay = (timer = 1e3) => {
  return new Promise((resolve) => setTimeout(resolve, timer))
}
