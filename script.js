const isAdult = age => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greeting = age => {
    if (isAdult(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(greeting(65));
console.log(greeting(9));

