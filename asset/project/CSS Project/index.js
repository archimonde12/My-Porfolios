function convertNumberToRoman(number) {
    let results = ""
    let surplus = number % 5
    let Vs = Math.floor((number % 10) / 5)
    if (surplus < 4) {
        let Ms = Math.floor(number /1000)
        let Ds = Math.floor((number%1000)/500)
        let Cs = Math.floor((number%500)/100)
        let Ls = Math.floor((number%100)/50)
        let Xs = Math.floor((number%50)/10)
        let Vs = Math.floor((number % 10) / 5)
        console.log(Xs)
        console.log(Vs)
        console.log(surplus)
        results =write(Ms, "M")+write(Ds, "D")+write(Cs, "C")+write(Ls, "L")+write(Xs, "X") + write(Vs, "V") + write(surplus, "I")
    } else if (Vs == 0) {
        number++;
        let Ms = Math.floor(number /1000)
        let Ds = Math.floor((number%1000)/500)
        let Cs = Math.floor((number%500)/100)
        let Ls = Math.floor((number%100)/50)
        let Xs = Math.floor((number%50)/10)
        Vs = Math.floor((number % 10) / 5)
        console.log(Xs)
        console.log(Vs)
        console.log(surplus)
        results = write(Ms, "M")+write(Ds, "D")+write(Cs, "C")+write(Ls, "L")+write(Xs, "X") + write(1, "I") + "V"
    } else {
        number++;
        let Ms = Math.floor(number /1000)
        let Ds = Math.floor((number%1000)/500)
        let Cs = Math.floor((number%500)/100)
        let Ls = Math.floor((number%100)/50)
        let Xs = Math.floor((number%50)/10)
        Vs = Math.floor((number % 10) / 5)
        console.log(Xs)
        console.log(Vs)
        console.log(surplus)
        results = write(Ms, "M")+write(Ds, "D")+write(Cs, "C")+write(Ls, "L")+write(Xs - 1, "X") + write(1, "I") + "X"
    }

    let Ms = Math.floor(number /1000)
    results = write(Ms, "M")
    let Ds = Math.floor((number%1000)/500)
    let Cs = Math.floor((number%500)/100)
    if(Cs<4){results+=write(Ds, "D")+write(Cs, "C")} else 

    return results
}

function write(times, content) {
    let results = ""
    for (let i = 0; i < times; i++) {
        results += content
    }
    return results
}


// Cách viết check hàng trăm
function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}