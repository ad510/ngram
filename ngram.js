#!/usr/bin/env node

const fs = require('fs')

const inp = fs.readFileSync(process.argv[2], 'utf8')
const outLen = parseInt(process.argv[3], 10)
const n = parseInt(process.argv[4], 10)
let out = inp.substr(Math.floor(Math.random() * (inp.length - n)), n)
let alt = 0
while (out.length < outLen) {
  const ngram = out.substring(out.length - n)
  let choices = ''
  for (let i = inp.indexOf(ngram); i != -1 && i < inp.length - n; i = inp.indexOf(ngram, i + 1))
    choices += inp[i + n]
  if (!choices) break
  out += choices[Math.floor(Math.random() * choices.length)]
  alt += choices.length - 1
}
console.log(out)
console.log(alt + ' alternative branches')
