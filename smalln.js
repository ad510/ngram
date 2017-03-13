#!/usr/bin/env node

const fs = require('fs')

const inp = fs.readFileSync(process.argv[2], 'utf8')
const outLen = parseInt(process.argv[3], 10)
const n = parseInt(process.argv[4], 10)
let out = inp.substr(Math.floor(Math.random() * (inp.length - n)), n)
while (out.length < outLen) {
  const i = Math.floor(Math.random() * (inp.length - n))
  if (!out.endsWith(inp.substr(i, n))) continue
  out += inp[i + n]
  process.stdout.write(inp[i + n])
}
console.log()
