import { format } from "@samuraitruong/lerna-pkg-2";

export function sum(a, b) {
  return format(a+b)
}

export function sumArr(...args) {
  return args.reduce((a,b) => a+b,0)
}
