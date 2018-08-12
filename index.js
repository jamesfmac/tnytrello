#!/usr/bin/env node

const args = process.argv
let response = ''

if (args[2]=='red'){
    response = 'alret, alert!'
}
else{
    response = 'All clear'
}
console.log(response)
console.log(process.env)
