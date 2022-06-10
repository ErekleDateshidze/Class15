// function myFunction() {
//     document.getElementById("demo").innerHTML = "hidden text"
// }


// document.getElementById("click").onclick = function () { myFunction() };



// function toogleFunction() {
//     var element = document.getElementById("myDiv");
//     element.classList.toggle("mystyle")
// }  



var button = document.getElementById("clickme");
count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = "click me :" + count;
    if (count == 10) {
        count -= 1;
    }
}