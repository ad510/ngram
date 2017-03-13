#!/usr/bin/env node

const fs = require('fs')

const inp = fs.readFileSync(process.argv[2], 'utf8')
const outLen = parseInt(process.argv[3], 10)
const maxN = parseInt(process.argv[4], 10)
let out = ''
let sum = 0
while (out.length < outLen) {
  let n = Math.min(maxN, out.length)
  while (inp.indexOf(out.substring(out.length - n)) == inp.lastIndexOf(out.substring(out.length - n))) n--
  const ngram = out.substring(out.length - n)
  let choices = ''
  for (let i = inp.indexOf(ngram); i != -1 && i < inp.length - n; i = inp.indexOf(ngram, i + 1))
    choices += inp[i + n]
  const c = choices[Math.floor(Math.random() * choices.length)]
  out += c
  sum += n
  process.stdout.write(c)
}
console.log('\naverage window size: ' + sum / out.length)
