//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages)

//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

function minAges(age1, age2){

return age1.shift() - age2.pop();

}

let ages2 = [...ages]

console.log(minAges(ages2, ages2));


//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

let ages3 = [...ages]

ages3.push(20)

console.log(minAges(ages3, ages3));

//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.


let ages4 = [...ages];

function addAges(arr){

        let sum = 0;
        for (let age = 0;age < arr.length; age++){
        sum = sum + arr[age];
    }
    return sum / arr.length
}

console.log(addAges(ages4));


//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
 let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.


let names1 = [...names];

let sum1 = 0;
for (let name = 0; name < names1.length; name++){
    sum1 = sum1 + names1[name].length
}
console.log(sum1 / names1.length)

//b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let names2 = [...names]

let sum2 = " ";
for (let name = 0; name < names2.length; name++){
    sum2 += names2[name] + ' ';
   
}

console.log(sum2)

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

let namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] create this new array

let nameLengths = []

let newNum = 0

for (let nam = 0; nam < namesArray.length; nam++) {
        
    newNum = namesArray[nam].length;
    
    nameLengths = [newNum].concat(nameLengths) 

   
   
}

console.log(nameLengths)
let nameLengths1 = [...nameLengths]

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
addNum  = 0
for (num in nameLengths){
    num = nameLengths[num]
    addNum = addNum + num

}

console.log(addNum)

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function multWord(word, n){

    return word.repeat(n)
    
}

console.log(multWord("Hello", 3))

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let aray = [10, 20, 100, 50]


function trueIfOverHun(arr){
    addNum  = 0
    for (num in arr){
        num = arr[num];
        addNum = addNum + num;
        
    
        if (addNum > 100){
            return true

            }
            
    }
    return false
}  
 

console.log(trueIfOverHun(nameLengths1))
 

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averOfAllNum(arr){
    addNum  = 0
    for (num in arr){
        num = arr[num];
        addNum = addNum + num;
    }
    return addNum / arr.length
}

console.log(averOfAllNum(aray))