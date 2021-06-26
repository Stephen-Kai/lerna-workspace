export function format(a, b, c) {
  return `Sum(${a}, ${b}) = ${c}`
}

export function rawFormat(a) {
  return a?.toString()
}
export const VERSION = 3;


export function rand(max: number) {
  return Math.ceil(Math.random() * max)
}
