const Length = (str,...x) => { // Returns string length | #1
    if (typeof str !== "string" || !str) return console.warn("Value must be a string");
    console.info(`'${str}' has ${str.toString().length} characters length`);
    x.forEach(e => (typeof e !== "string" || !e) ? console.warn("Value must be a string") : console.info(`'${e}' has ${e.toString().length} characters length`));
}; //Length("Hello","Hi");

const Slice = (str,start,end = 0) => ( // Slices a string | #2
    (typeof str !== "string" || !str) ? console.warn("Value must be a string") :
        (typeof start !== "number" || start < 0) ? console.warn("Value must be a number equal or higher than cero") :
            (typeof end !== "number") ? console.warn("Value must be a number") :
                (str.slice(start,end) === "") ? console.info(`The string hasn't been modified: '${str}'`) : console.info(`Original: '${str}' \nSliced: '${str.slice(start,end)}'`)
); //Slice("Hello",0,4);

const Split = (str,patt = "") => ( // Splits a string | #3
    ((typeof str !== "string" || !str) || ((typeof patt !== "string" || !patt) && patt !== "")) ? console.warn("Value must be a string") :
        (patt === "") ? console.info("The splitted string is:",str.split("")) :
            (!str.includes(patt)) ? console.warn(`The string hasn't been modified: '${str}'`) : console.info("The splitted string is:",str.split(patt))
); //Split("this is a test string"," ");

const Repeat = (str,num = 1) => ( // Repeats a string | #4
    ((typeof str !== "string" || !str)) ? console.warn("Value must be a string") :
        (typeof num !== "number" || num <= 0) ? console.warn("Value must be a number higher than cero") : console.info(`${str}\n`.repeat(num))
); //Repeat("hi man",4);

const Invert = (str,...x) => { // Inverts a string | #5
    if (typeof str !== "string" || !str) return console.warn("Value must be a string");
    console.info(`Original: '${str}'\nInverted: '${str.split("").reverse().join("")}'`);
    x.forEach(e => (typeof e !== "string" || !e) ? console.warn("Value must be a string") : console.info(`Original: '${e}'\nInverted: '${e.split("").reverse().join("")}'`));
}; //Invert("Hello","olleH");

const Count = (str,patt,...x) => { // Counts how many times a pattern is repeated on a string | #6
    if ((typeof str !== "string" || !str) || (typeof patt !== "string" || !patt)) return console.warn("Value must be a string");
    if (!str.includes(patt)) return console.warn(`'${patt}' hasn't been found in the string`); let i = 0, count = 0;
    while (i !== -1) {
        i = str.indexOf(patt,i);
        if (i !== -1) {
            i++; count++;
        }
    }
    console.info(`'${patt}' has been found ${count} times in the string`);
    x.forEach(e => {
        if (typeof e !== "string" || !e) {
            return console.warn("Value must be a string");
        } else if (!str.includes(e)) {
            return console.warn(`'${e}' hasn't been found in the string`);
        } else {
            i = 0; count = 0;
            while (i !== -1) {
                i = str.indexOf(e,i);
                if (i !== -1) {
                    i++; count++;
                }
            } return console.info(`'${e}' has been found ${count} times in the string`);
        }
    });
}; //Count("hi hi hi hi","hi","i");

const Palindrome = (str,...x) => { // Determines if a string is a palindrome or not | #7
    if (typeof str !== "string" || !str) return console.warn("Value must be a string");
    (str.toLowerCase().split("").reverse().join("") === str.toLowerCase()) ? console.info(`'${str}' is a palindrome`) : console.info(`'${str}' is not a palindrome`);
    x.forEach(e => (typeof e !== "string" || !e) ? console.warn("Value must be a string") :
        (e.toLowerCase().split("").reverse().join("") === e.toLowerCase()) ? console.info(`'${e}' is a palindrome`) : console.info(`'${e}' is not a palindrome`)
    );
}; //Palindrome("lol","Dad");

const Delete = (str,patt,...x) => { // Deletes a pattern from a string | #8
    if ((typeof str !== "string" || !str) || (typeof patt !== "string" || !patt)) return console.warn("Value must be a string");
    if (!str.includes(patt)) return console.warn(`'${patt}' hasn't been found in the string`);
    let new_str = str.replace(new RegExp(patt,"ig"),"");
    x.forEach(e => (typeof e !== "string" || !e) ? console.warn("Value must be a string") :
        (!str.includes(e)) ? console.warn(`'${e}' hasn't been found in the string`) : new_str = new_str.replace(new RegExp(e,"ig"),"")
    ); return console.info(`Original: '${str}'\nModified: '${new_str}'`);
}; //Delete("-1-2-3-4","-","3");

const Random_501_600 = () => console.info(((Math.random() + 5.01) * 100).toFixed()); // Returns a random number between 501 and 600
//Random();

// - | #10

const Factorial = (num,...x) => { // Returns the factorial of a number | #11
    if (typeof num !== "number" || num < 0) return console.warn("Value must be a number equal or higher than cero"); let fact = num;
    for (let i = num - 1; i > 1; i--) fact *= i; console.info(`The factorial of ${num} is: ${fact}`);
    x.forEach(e => {
        if (typeof e !== "number" || e < 0) {
            return console.warn("Value must be a number equal or higher than cero");
        } else {
            fact = e; for (let i = e - 1; i > 0; i--) fact *= i; return console.info(`The factorial of ${e} is: ${fact}`);
        }
    });
}; //Factorial(4,6);

const Prime = (num,...x) => { // Determines if a number is prime or not | #12
    if (typeof num !== "number" || !num) return console.warn("Value must be a number different from cero");
    if (num < 0) return console.info("Negative numbers can't be prime");
    ((num % 2 === 0 && num !== 2) || (num % 3 === 0 && num !== 3) || (num % 5 === 0 && num !== 5) || (num % 7 === 0 && num !== 7)) ? console.info(`${num} is not prime`) : console.info(`${num} is prime`);
    x.forEach(e => 
        (typeof e !== "number" || !e) ? console.warn("Value must be a number different from cero") :
            (e < 0) ? console.info("Negative numbers can't be prime") :
                ((e % 2 === 0 && e !== 2) || (e % 3 === 0 && e !== 3) || (e % 5 === 0 && e !== 5) || (e % 7 === 0 && e !== 7)) ? console.info(`${e} is not prime`) : console.info(`${e} is prime`)
    );
}; //Prime(7,4,-1);

const Pair = (num,...x) => { // Determines if a number is pair or not | #13
    if (typeof num !== "number") return console.warn("Value must be a number");
    (num % 2 === 0) ? console.info(`${num} is pair`) : console.info(`${num} is not pair`);
    x.forEach(e => (typeof e !== "number") ? console.warn("Value must be a number") :
        (e % 2 === 0) ? console.info(`${e} is pair`) : console.info(`${e} is not pair`)
    );
}; //Pair(2,5,-1);

const Temp = (temp,measure = "c") => ( // Converts C° to F° and vice versa | #14
    (typeof temp !== "number") ? console.warn("Value must be a number") :
        ((measure.toLowerCase() !== "c" && measure.toLowerCase() !== "f")) ? console.warn("Value must be C or F") :
            (measure.toLowerCase() === "c") ? console.info(`${temp} C° = ${(temp * 9/5) + 32} F°`) : console.info(`${temp} F° = ${(temp - 32) * 5/9} C°`)
); //Temp(30,"F");

// - | #15

const Discount = (price,disc = 0,...x) => { // Returns price whit discount | #16
    if ((typeof price !== "number" || price <= 0) || (typeof disc !== "number" || disc <= 0)) return console.warn("Value must be a number higher than cero");
    console.info(`Regular Price: $${price}\n${disc}% Discount: $${price - ((price / 100) * disc)}`);
    x.forEach(e => (typeof e !== "number" || e <= 0) ? console.warn("Value must be higher than cero") : console.info(`Regular Price: $${e}\n${disc}% Discount: $${e - ((e / 100) * disc)}`));
}; //Discount(100,50,300);

const Year_diff = (y,m,d) => { // Returns the years of difference between one year and another | #17 
    let date_now = new Date(); if (typeof y !== "number" || y > date_now.getFullYear()) return console.warn("Invalid year"); 
    if (y === date_now.getFullYear()) return console.info(`${y} is the actual year`);
    if (typeof m !== "number" || m <= 0 || m > 12) return console.warn("Invalid month");
    if (typeof d !== "number" || d <= 0 || d > 31 ) return console.warn("Invalid day"); let date = new Date(y,(m - 1),d);
    return (y < 100 && y >= 0) ? console.info(`${date_now.getFullYear() - (date.getFullYear() - 1900)} years have passed since ${date.getFullYear() - 1900} a.d`) :
        (y < 0) ? console.info(`${date_now.getFullYear() - date.getFullYear()} years have passed since ${Math.abs(date.getFullYear())} b.c`) : console.info(`${date_now.getFullYear() - date.getFullYear()} years have passed since ${date.getFullYear()} a.d`);
}; //Year_diff(2001,1,13);

const Vowels_Consonants = (str,...x) => { // Counts all vowels and consonants on the string | #18
    if (typeof str !== "string" || !str) return console.warn("Value must be a string"); let vowel = 0, cons = 0;
    str.toLowerCase().split("").forEach(e => {
        if (/[aeiouáéíóúü]/.test(e)) vowel++;
        if (/[bcdfghjklmnñpqrstvwxyz]/.test(e)) cons++;    
    });
    console.info(`'${str}' has ${vowel} vowels and ${cons} consonants`);
    x.forEach(e => {
        vowel = 0; cons = 0; if (typeof e !== "string" || !e) return console.warn("Value must be a string");
        e.toLowerCase().split("").forEach(f =>{
            if (/[aeiouáéíóú]/.test(f)) vowel++;
            if (/[bcdfghjklmnñpqrstvwxyz]/.test(f)) cons++;
        }); return console.info(`'${x}' has ${vowel} vowels and ${cons} consonants`);
    });
}; //Vowels_Consonants("Hello","Hi");

const Name = (str,...x) => { // Determinates if a name is valid or not | #19
    if (typeof str !== "string" || !/^[a-zñáéíóúü\s]+$/g.test(str.toLowerCase())) return console.warn(`Invalid name`);
    console.info(`'${str}' is a valid name`);
    x.forEach(e => (typeof e !== "string" || !/^[a-zñáéíóúü\s]+$/g.test(e.toLowerCase())) ? console.warn(`Invalid name`) : console.info(`'${e}' is a valid name`));
}; //Name("Git Hub","github");

const Email = (str,...x) => { // Determinates if an e-mail is valid or not | #20
    if (!/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(str)) return console.warn("Enter a valid e-mail");
    console.info(`'${str}' is a valid e-mail`);
    x.forEach(e => (/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(e)) ? console.info(`'${e}' is a valid e-mail`) : console.warn(`Enter a valid e-mail`));
}; //Email("git@hub.com");

const Square = array => { // Takes an array of numbers and returns a new array with numbers to square | #21
    if (Array.isArray(array) && typeof array[0] === "number") {
        let new_array = []; array.forEach(e => (typeof e !== "number") ? console.warn("Value must be a number") : new_array.push(e * e)); 
        return console.info(new_array);
    }
    return console.warn("Value must be an array of numbers");
}; //Square([2,4,-9]);

const High_Low = array => { // Takes an array of numbers or just numbers and returns the highest and lowest number | #22
    if (Array.isArray(array) && array.length > 1) for (let num of array) return (typeof num !== "number") ? console.warn("Value must be a number") : console.info(`Highest: ${Math.max(...array)}\nLowest: ${Math.min(...array)}`);
    return console.warn("Value must be an array of numbers");
}; //High_Low([10,-20,30]);

const Pair_Odd = array => { // Takes an array of numbers and returns one array with pair numbers and another with odd numbers | #23
    if (Array.isArray(array) && typeof array[0] === "number") {
        let pair = [], odd = [];
        array.forEach(e => (typeof e !== "number") ? console.warn("Value must be a number") : (e % 2 === 0) ? pair.push(e) : odd.push(e))
        return console.info({pair,odd});
    }
    return console.warn("Value must be an array of numbers");
}; //Pair_Odd([2,4,-9]);

const Crescent_Decrescent = array => { // Takes an array of numbers and returns one array with numbers increasing and another one with numbers decreasing | #24
    if (!Array.isArray(array) || typeof array[0] !== "number") return console.warn("Value must be an array of numbers");
    array.forEach(e => {
        if (typeof e !== "number") console.warn("Value must be a number");
    });
    return console.info({
        cresc: array.map(e => e).sort(),
        decr: array.map(e => e).sort().reverse()
    });
}; //Crescent_Decrescent([1,2,4,8,6]);

const No_Duplicates = array => { // Takes an array of values and returns a new one without duplicates | # 25
    if (!Array.isArray(array) || array.length < 2) return console.warn("Value must be an array whit two or more elements");
    for (let val of array) {
        if ((!val && val !== 0 && val !== false) || (typeof val === "object")) return console.warn("Value is empty or invalid");
    };
    console.info({
        Original: array,
        No_Duplicates: array.filter((e,i,self) => self.indexOf(e) === i)
    });
}; //No_Duplicates(["x",1,2,3,"x","z","1"]);

const Average = array => { // Takes an array of numbers and returns the average | #26
    if (!Array.isArray(array) || array.length < 2) return console.warn("Value must be an array whit two or more elements"); let sum = 0;
    for (let val of array) {
        if (typeof val !== "number" || typeof val === "object") return console.warn("Value is empty or invalid");
        sum += val;
    };
    return console.info({
        Grades: array,
        Average: (sum / array.length).toFixed(2)
    })
}; //Average([10,4,9,7]);

class Movie {
    constructor(id,title,director,year,countries,genders,rating) {
        this.accepted_genders = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
        this.error = false;
        if (typeof id !== "string" || !/^([a-z]{2}[0-9]{7})+$/i.test(id)) return console.warn("Invalid Id");
        if (typeof title !== "string" || title.length > 100 || !title) return console.warn("Invalid Title");
        if (typeof director !== "string" || director.length > 50 || !/^[a-z.\s]+$/i.test(director)) return console.warn ("Invalid Director");
        if (typeof year !== "number" || typeof year === "object" || year < 1900) return console.warn ("Invalid Year");
        if (!Array.isArray(countries)) return console.warn("Countries must be an array");
        countries.forEach(e => {
            if (typeof e !== "string" || e.length < 2 || !/^[a-z-.\s]+$/i.test(e)) {
                this.error = true;
                return console.warn ("Invalid country");
            } if (this.error === true) return;
        });
        if (!Array.isArray(genders)) return console.warn("Genders must be an array");
        genders.forEach(e => {
            if (!this.accepted_genders.includes(e)) {
                this.error = true;
                return console.warn("Invalid gender");
            }
        }); if (this.error === true) return;
        if (typeof rating !== "number" || typeof rating === "object" || rating < 0 || rating > 10) return console.warn("Invalid rating");
        this.id = id.toLowerCase(),
        this.title = title,
        this.director = director,
        this.year = year,
        this.countries = countries,
        this.genders = genders,
        this.rating = rating.toFixed(1)
    }
    static acceptedGenders() {
        return console.info(`Accepted Genders: \n\n- ${["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"].join(`\n- `)}`)
    }
    movieData() {
        if (this.id && this.title && this.director && this.year && this.countries && this.genders && this.rating) return console.info(`Movie Data:\n\n- Id: ${this.id}\n- Title: ${this.title}\n- Director: ${this.director}\n- Year: ${this.year}\n- Countries: ${this.countries.join(" - ")}\n- Genders: ${this.genders.join(" - ")}\n- Rating: ${this.rating}`)
        return console.error("Data Missing");
    }
}
// Movie.acceptedGenders();
// const baby_driver = new Movie("tt3890160","Baby Driver","Edgar Wright",2017,["United Kingdom","United States"],["Action","Crime","Drama","Music","Thriller"],7.6);
// baby_driver.movieData();