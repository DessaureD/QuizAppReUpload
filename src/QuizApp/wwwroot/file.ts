class Test {
    totalPoints() {
        alert(`${total} points earned! Nice!`)
    }
}

let finalTotal = new Test();

alert("Welcome to your first quiz my friend!");

let total = 0;

let question1  = prompt("What color is the sky? Please choose between these three options: White, Blue, or Red.");
if (question1 == "Blue") {
    console.log("Question 1, Correct!");
    total = total + 20
}
else if (question1 != "Blue") {
    console.log("Question 1, Incorrect!");
}


let question2 = prompt("Who is the President of the United States of America? Please choose btween these three options: Mike Pence, Donald Trump or George Washington.");
if (question2 == "Donald Trump") {
    console.log("Question 2, Correct!");
    total = total + 20
}
else if (question2 != "Donald Trump") {
    console.log("Question 2, Incorrect!");
}


let question3 = prompt("Who is the Vice President of the United States of America? Please choose btween these three options: Mike Pence, Donald Trump or George Washington.");
if (question3 == "Mike Pence") {
    console.log("Question 3, Correct!");
    total = total + 20
}
else if (question3 != "Mike Pence") {
    console.log("Question 3, Incorrect!");
}


let question4 = prompt("Who was the first President of the United States of America? Please choose btween these three options: Mike Pence, Donald Trump or George Washington.");
if (question4 == "George Washington") {
    console.log("Question 4, Correct!");
    total = total + 20
}
else if (question4 != "George Washington") {
    console.log("Question 4, Incorrect!");
}


let question5 = prompt("Who made Microsoft? Please choose between these three options: Bill Gates, Steve Jobs, or Barack Obama.");
if (question5 == "Bill Gates") {
    console.log("Question 5, Correct!");
    total = total + 20
}
else if (question5 != "Bill Gates") {
    console.log("Question 5, Incorrect!");
}


finalTotal.totalPoints();