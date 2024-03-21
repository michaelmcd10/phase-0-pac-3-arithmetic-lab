let number = 10

function add5(){
    return(number+=5);
}

function dividedBy5(){
    return(number/=5);
}

add5()
dividedBy5()

parseInt("2", 10);

console.log(parseInt("2", 10))

parseInt("2.2222", 10);

console.log(parseInt("2.2222", 10))

parseInt("nonsense!", 10);

console.log(parseInt("nonsense", 10))

parseFloat("80.123999", 10);

console.log(parseFloat("80.123999", 10))

function makeInt(string){
    return parseInt(string)
}

console.log(makeInt("2"))

function preserveDecimal(string){
    return parseFloat(string)
}
console.log(preserveDecimal("2.22999"))