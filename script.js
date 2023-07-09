//======Easy Going=============
// for(let i = 1; i <=20; i++){
//     console.log(i);
// }

//======Get Even===============
// for(let i = 0; i <=200; i+= 2) {
//     console.log(i);
// }

//======Fizz Buzz =============
// for (let i = 1; i <=100; i++) {
//     if (i % 3 === 0 && i % 5 ===0) {
//         console.log("FizzBuzz");
//     }else if (i % 3 === 0) {
//         console.log("Fizz");
//     }else if (i % 5 === 0){
//         console.log("Buzz");
//     }else {
//         console.log(i);
//     }
// }

//=======Wild Wild Life=======
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

//1.Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] = plantee[2] + 1;
// console.log(plantee[2]);

//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City";
// console.log(wolfy[3]);

//3.Give D'Art a second hometown by adding "Hawkins"
// dart.push("Hawkins");
// console.log(dart);

//4.Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// wolfy.splice(0,1, "Gameboy");
// console.log(wolfy);

//========Yell at the Ninja Turtles==========
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (const turtles of ninjaTurtles) {
//     console.log(turtles.toUpperCase())
// }

//========Methods Revisited========
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log: the index of Titanic
console.log(favMovies[8]);

//1.use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
// sorts the array in alphabetical order and it does change the array
favMovies.sort();
console.log(favMovies);

//2.Use the method pop
favMovies.pop();
console.log(favMovies);

//3. push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

//4. Reverse the array
favMovies.reverse();
console.log(favMovies);

//5. Use the shift method
favMovies.shift();
console.log(favMovies);

//6.unshift- what does it return?
console.log(favMovies.unshift());

//7.splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?

for (let i = 0; i < favMovies.length; i++) {
    if(favMovies[i] === "Django Unchained"){
        favMovies.splice(i, 1, "Avatar")
    }
}

console.log(favMovies);

//8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?

//9.store the value of your slicein a variable, console.log it - Thought question: what is going on here?

const newMovie = favMovies.slice(favMovies.length /2);
console.log(newMovie);

//10. console.log your final results
console.log(favMovies);

//11.After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?

console.log(favMovies.indexOf("Fast and Furious"));

//==========Where is Waldo=======================
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);

whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);

console.log(whereIsWaldo[2][1][1]);

//========Excited Kitten ========================

const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."];

let meow = 0;


for(let i = 1; i <= 20; i++){
    meow = Math.round(Math.random() * (kittyTalk.length - 1));
    if(i % 2 === 0){
        console.log(kittyTalk[meow]);
    }else{
        console.log("Love me, pet me! HSSSSSS!");
    }
}