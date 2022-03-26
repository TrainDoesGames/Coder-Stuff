const Letter = require("./config.json");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`What do you want encoded/decoded?\n#Prefix your message with ">" to make it encoded\n#Prefix your message with "<" to make it decoded\n`, MSG => {

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

    const CompMSG = LowMSG.slice(1)

    const OffMSG = CompMSG.replace(/\s/g, "--")

    const NewMSG = OffMSG.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, function(matched){
        return Replacements[matched];
    });

    console.log(NewMSG)
}else if(MSG.charAt(0) == "<") {

    const LowMSG = MSG.toLowerCase();

    const Replacements1 = {
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

    const CompMSG = LowMSG.slice(1)

    const OffMSG = CompMSG.replace(/--/g, " ")

    const NewMSG = OffMSG.replace(/hn26|hn25|hn24|hn23|hn22|hn21|hn20|hn19|hn18|hn17|hn16|hn15|hn14|hn13|hn12|hn11|hn10|hn9|hn8|hn7|hn6|hn5|hn4|hn3|hn2|hn1/gi, function(matched){
        return Replacements1[matched];
    });

    console.log(NewMSG);

}else if(MSG.charAt(0) != ">") {
    console.log("Please enter a method!")
}else if(MSG.charAt(0) != "<") {
    console.log("Please enter a method!")
}else if(MSG.toLowerCase() == cancel) {
    console.log("Alright, have a good day!")
}

    readline.close()
  })