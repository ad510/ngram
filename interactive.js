#!/usr/bin/env node

const fs = require('fs')

const inp = fs.readFileSync(process.argv[2], 'utf8')
const maxN = parseInt(process.argv[3], 10)
let out = ''
process.stdin.setEncoding('utf8')
process.stdin.on('data', chunk => {
  out += chunk.trimRight()
  if (out.length > 0 && out[out.length - 1].trim()) out += ' '
  do {
    let n = Math.min(maxN, out.length)
    while (inp.indexOf(out.substring(out.length - n)) == inp.lastIndexOf(out.substring(out.length - n))) n--
    const ngram = out.substring(out.length - n)
    let choices = ''
    for (let i = inp.indexOf(ngram); i != -1 && i < inp.length - n; i = inp.indexOf(ngram, i + 1))
      choices += inp[i + n]
    out += choices[Math.floor(Math.random() * choices.length)]
  } while (out[out.length - 1].trim())
  process.stdout.write(out)
})
