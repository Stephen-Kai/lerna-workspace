import { format } from "@samuraitruong/lerna-pkg-2";

/**
 * Sum to number
 * @param {number} a 
 * @param {number} b 
 * @returns {number} sum of a +b
 */
export function sum(a, b) {
  return format(a+b)
}

export function sumArr(...args) {
  return args.reduce((a,b) => a+b,0)
}
