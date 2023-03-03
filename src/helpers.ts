import { BinaryLike, createHash } from 'crypto'
export function hash (data: BinaryLike) {
  return createHash('sha256').update(data).digest('hex')
}


export function hashValidado ({ hash, dificuldade = 4, prefixo = '0' }: { hash: string, dificuldade: number, prefixo?: string }) {
  const check = prefixo.repeat(dificuldade)
  return hash.startsWith(check)
}
