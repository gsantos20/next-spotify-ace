export function RandomString(L: number): string {
  let s = ''
  const randomchar = (): string => {
    const n = Math.floor(Math.random() * 62)
    if (n < 10) return n.toString() // 1-10
    if (n < 36) return String.fromCharCode(n + 55) // A-Z
    return String.fromCharCode(n + 61) // a-z
  }

  while (s.length < L) s += randomchar()
  return s
}
