// 1) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

const multiply = (first, second, third) => first * second * third;

console.log(multiply(3, 3, 4));

// 2) Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.

const info = `I am a Web Developer
I Love To Code
I Love To Eat Biryani
`
console.log(info);

// 3) Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const defaultParameter = (first, sencond = 0) => first + sencond;

console.log(defaultParameter(100));

// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends

// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result


let newFriendArray = []
const friendName = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length % 2 === 0) {
            newFriendArray.push(arr[i]);
        }
    }
    return newFriendArray;
}

console.log(friendName(["Parvez Hossain Sakib", "Asif Ul Islam", "Israt Jahan Prima", "Rabbi Ahammed Tonmoy", "Nadia Afrin"]));


// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

let  sum = 0
const squarNum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let number = Math.pow(arr[i], 2);
        sum += number;
    }
    let avg = sum / arr.length;
    return avg;
}

console.log(squarNum([2, 3, 4, 5, 6]))

// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the


const newArray = (arr1, arr2) => {
    const arr3 = [...arr1, ...arr2];
    const newarray = Math.max(...arr3);
    return newarray;
    
}

console.log(newArray([2, 4, 6], [1, 3, 5]));