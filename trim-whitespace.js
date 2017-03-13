#!/usr/bin/env node

const fs = require('fs')

fs.writeFileSync(process.argv[3], fs.readFileSync(process.argv[2], 'utf8').split(/\s+/).join(' '))
