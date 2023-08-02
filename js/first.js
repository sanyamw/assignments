// 1. Add three numbers from variables in console.
function addThreeNumbers(a,b,c){
    return a+b+c
}
console.log(addThreeNumbers(2,5,7))

// 2. Check mean of three numbers.
function checkMean(a,b,c){
    return (a+b+c)/3
}
console.log(checkMean(1,1,1))

// 3. Calculate year from age.
function checkYear(age){
    return 2022-age
}
console.log(checkYear(16))

// 4. Check Area of rectangle, square, circle.
function checkArea(a,b){
    return a*b
}console.log(checkArea(5,2))

function checkAreaCircle(r){
    return 3.14*r*r
}console.log(checkAreaCircle(7))

// 5. Check Perimeter of rectangle and square.
function perimeter(a,b){
    return 2*(a+b)
}console.log(perimeter(2,2))

// 6. Calculate BMI of user using weight and height.
function bmi(weight,height){
    return weight/(height*height)
}console.log(bmi(67,2))

// 7. Convert Temperature in F to C.
function celcius(f){
    return (5*(f-32))/9
}console.log(celcius(25))

// 8. Convert miles to kms.
function km(miles){
    return miles*1.60934
}console.log(km(1))