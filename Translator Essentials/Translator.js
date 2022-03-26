const Letter = require("./config.json");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`What is your message?\n`, MSG => {

    if(MSG.charAt(0) == ">") {

    const LowMSG = MSG.toLowerCase();

    const Replacements = {
        a: Letter.a,
        b: Letter.b,
        c: Letter.c,
        d: Letter.d,
        e: Letter.e,
        f: Letter.f,
        g: Letter.g,
        h: Letter.h,
        i: Letter.i,
        j: Letter.j,
        k: Letter.k,
        l: Letter.l,
        m: Letter.m,
        n: Letter.n,
        o: Letter.o,
        p: Letter.p,
        q: Letter.q,
        r: Letter.r,
        s: Letter.s,
        t: Letter.t,
        u: Letter.u,
        v: Letter.v,
        w: Letter.w,
        x: Letter.x,
        y: Letter.y,
        z: Letter.z
    }

    const NewMSG = LowMSG.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, function(matched){
        return Replacements[matched];
    });

    console.log(NewMSG)
}else if(MSG.charAt(0) == "<") {

    const Replacements = {
        hn1: "a",
        hn2: "b",
        hn3: "c",
        hn4: "d",
        hn5: "e",
        hn6: "f",
        hn7: "g",
        hn8: "h",
        hn9: "i",
        hn10: "j",
        hn11: "k",
        hn12: "l",
        hn13: "m",
        hn14: "n",
        hn15: "o",
        hn16: "p",
        hn17: "q",
        hn18: "r",
        hn19: "s",
        hn20: "t",
        hn21: "u",
        hn22: "v",
        hn23: "w",
        hn24: "x",
        hn25: "y",
        hn26: "z"
    }

    const SplitMSG = MSG.split('hn1','hn2','hn3','hn4','hn5','hn6','hn7','hn8','hn9','hn10','hn11','hn12','hn13','hn14','hn15','hn16','hn17','hn18','hn19','hn20','hn21','hn22','hn23','hn24','hn25','hn26').join(' ')

    console.log(SplitMSG)

    const NewMSG = MSG.replace(/hn1|hn2|hn3|hn4|hn5|hn6|hn7|hn8|hn9|hn10|hn11|hn12|hn13|hn14|hn15|hn16|hn17|hn18|hn19|hn20|hn21|hn22|hn23|hn24|hn25|hn26/gi, function(matched){
        return Replacements[matched];
    });

    console.log(NewMSG);

}else if(MSG.charAt(0) != ">") {
    console.log("Please enter a method!")
}else if(MSG.charAt(0) != "<") {
    console.log("Please enter a method!")
}

    readline.close()
  })
  