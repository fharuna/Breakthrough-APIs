


// Global Variable used to store the quotes 
// fetched from the API
var data;
let front = true;
  
// Getting the front and the back author boxes
const authors = document.querySelectorAll(".author");
  
// Getting the front and the back texts
const texts = document.querySelectorAll(".text");
  
// Getting the body
const body = document.getElementById("body");
  
// Getting the buttons
const button = document.querySelectorAll(".new-quote");
var frontButton = document.querySelector("#frontbutton") 
var backButton =document.querySelector("#backbutton")

var frontQuote = document.querySelector("#frontquote")
var backQuote = document.querySelector("#backquote")

const blockFront = document.querySelector(".block__front");
const blockBack = document.querySelector(".block__back");
  
const authorFront = authors[0];
const authorBack = authors[1];
  
const textFront = texts[0];
const textBack = texts[1];
  
const buttonFront = button[0];
const buttonBack = button[1];
  
// An arrow function used to get a quote randomly
// // const displayQuote = () =>{
  
//     // Generates a random number between 0 
//     // and the length of the dataset
//     let index = Math.floor(Math.random()*data.length);


//     // Stores the author of the respective quote
//     let author = data[index].author;
  
//     // Making the author anonymous if no author is present
//     if(!author){
//         author = "Anonymous"
//     }
  
//     // Replacing the current quote and the author with a new one
  
//     if(front){
//         // Changing the front if back-side is displayed
//         textFront.innerHTML = quote;
//         authorFront.innerHTML = author;
//     }else{
//         // Changing the back if front-side is displayed
//         textBack.innerHTML = quote;
//         authorBack.innerHTML = author;
//     }
      
//     front = !front;
  
// }

//API Function

// fetch("https://api.kanye.rest")
//     .then(function(response) {
//         return response.json(); 
//     }) 
//     .then(function(data) {
  
//         // Storing the quotes internally upon 
//         // successful completion of request
//         this.data = data; 
  
// });
function newQuote(){
      
    // Rotating the Quote Box
    blockBack.classList.toggle('rotateB');
    blockFront.classList.toggle('rotateF');
  
}
frontButton.addEventListener("click", function(){
    console.log("front button clicked")
    // when user clicks button, API is accessed to get data and input on page
    fetch("https://api.kanye.rest")
    .then(function(response) {
        return response.json(); 
    }) 
    .then(function(data) {
        console.log(data)
        frontQuote.textContent = data.quote
    })
})
backButton.addEventListener("click", function(){
    console.log("back button clicked")
    fetch("https://api.kanye.rest")
    .then(function(response) {
        return response.json(); 
    }) 
    .then(function(data) {
        console.log(data)
        backQuote.textContent = data.quote
    })
})
