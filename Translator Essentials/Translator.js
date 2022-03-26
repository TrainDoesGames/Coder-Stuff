const Letter = require("./config.json");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What is your message?\n`, MSG => {
    var MSG = MSG.replace(/a/g, Letter.a)
                    .replace(/b/g, Letter.b)
                    .replace(/c/g, Letter.c)
                    .replace(/d/g, Letter.d)
                    .replace(/e/g, Letter.e)
                    .replace(/f/g, Letter.f)
                    .replace(/g/g, Letter.g)
                    .replace(/h/g, Letter.h)
                    .replace(/i/g, Letter.i)
                    .replace(/j/g, Letter.j)
                    .replace(/k/g, Letter.k)
                    .replace(/l/g, Letter.l)
                    .replace(/m/g, Letter.m)
                    .replace(/n/g, Letter.n)
                    .replace(/o/g, Letter.o)
                    .replace(/p/g, Letter.p)
                    .replace(/q/g, Letter.q)
                    .replace(/r/g, Letter.r)
                    .replace(/s/g, Letter.s)
                    .replace(/t/g, Letter.t)
                    .replace(/u/g, Letter.u)
                    .replace(/v/g, Letter.v)
                    .replace(/w/g, Letter.w)
                    .replace(/x/g, Letter.x)
                    .replace(/y/g, Letter.y)
                    .replace(/z/g, Letter.z);

    console.log(MSG)

    readline.close()
  })
  