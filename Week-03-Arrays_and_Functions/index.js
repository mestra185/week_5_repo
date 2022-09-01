//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages)

//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//(do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

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

//b.	Use a loop to iterate through the array again and concatenate all the names together, 
//separated by spaces, and print the result to the console.

let names2 = [...names]

let sum2 = " ";
for (let name = 0; name < names2.length; name++){
    sum2 += names2[name] + ' ';
   
}

console.log(sum2)

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the 
//length of each name to the nameLengths array.
//For example:

let namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] create this new array

let nameLengths = []

let newNum = 0

for (let nam = 0; nam < namesArray.length; nam++) {
        
    newNum = namesArray[nam].length;
    
    nameLengths = [newNum].concat(nameLengths) 

   

    
   
   
}
let nameLengths1 = nameLengths.reverse()

console.log(nameLengths1)


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

let aray = [10, 20, 100, 50]


function averOfAllNum(arr){
    addNum  = 0
    for (num in arr){
        num = arr[num];
        addNum = addNum + num;
    }
    return addNum / arr.length
}

console.log(averOfAllNum(aray))

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the 
//average of the elements in the second array.

function averOfAllNum2(arr1, arr2 ){
    addNum1  = 0
    for (num1 in arr1){
        num1 = arr1[num1];
        addNum1 = addNum1 + num1;
    }
    addNum2  = 0
    for (num2 in arr2){
        num2 = arr2[num2];
        addNum2 = addNum2 + num2;
    }
    let average1 = addNum1 / arr1.length
    let average2 = addNum2 / arr2.length
    //console.log(average1);
    //console.log(average2);
    if(average1 > average2){
        return true
    }
    return false

    
}

console.log(averOfAllNum2(aray, nameLengths1))

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside 
//and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if ( isHotOutside === true && moneyInPocket > 10.50 ){
        return true
    }
    return false
}
 
console.log(willBuyDrink(true, 11))

//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

/* I am going to create a function that tells me if I am over budget in my dining exepenses. I will imput a limit a month.*/



 

function sumInput() {

    let numbers = [];

    let budget = prompt("What is your budget?")
    
  
  
    while (true) {

      
      let expense = prompt("What was your dine in expense today?");
      if (budget === "" || budget === null || !isFinite(budget)){break};
      if (expense === "" || expense === null || !isFinite(expense) || expense === 0) {break};
  

  
      numbers.push(+expense);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    if( sum > budget){
        return 'You spent ' + sum + "$ you are over your budget. No more eating out!";

    }
    return  'You spent ' + sum + "$ you can still eat out ";

  }
  
  alert( sumInput() );

  // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
       {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
           {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    }
    
    //more customers with the same schema
];





 

