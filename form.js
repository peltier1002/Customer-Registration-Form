const form = document.querySelector("#my-form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname")
const phoneNumber = document.querySelector("#pnumber")
const emailAddress = document.querySelector("#email")


//created a new user object when submit button clicked
function Person(firstName, lastName, phoneNumber, emailAddress) {
    this.firstName= firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.emailAdress = emailAddress;
};

function myFunction(e) {
    //prevent the from being submitted without input
    e.preventDefault;
    //create a new user and add the values of the form feild to the properties of the object 
    const newUser = new Person(firstName.value, lastName.value, phoneNumber.value, emailAddress.value);
    //create a thank you message and assign it to a variable
    let signup = `Thank you ${newUser.firstName} ${newUser.lastName} for signing up!`

    //get input value
    let inputs = signup;
    //create new paragraph element
    let p = document.createElement("p");
    //add a class
    p.className = "output";
    //add text node with input value
    p.appendChild(document.createTextNode(inputs));
    //add the new p to dom 
    form.appendChild(p); 
};



form.addEventListener("submit", myFunction);







