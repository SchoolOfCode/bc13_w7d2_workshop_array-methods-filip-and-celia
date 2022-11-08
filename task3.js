let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];


let newArr = someNumbers.some((someNumber) => {
    return someNumber%3 === 0 || someNumber%5 === 0 || someNumber%60 === 0 || someNumber%90 === 0
})


console.log(newArr)

3
5
60
90