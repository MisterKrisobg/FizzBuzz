const fizzInput = document.querySelector("#fizzInput");
const fizzForm = document.querySelector("#fizzForm");
const fizzResults = document.querySelector("#fizzResults")
const fizzReset = document.querySelector("#fizzReset")
let fizzNum = 1;

fizzForm.addEventListener("submit", (e) => {
    e.preventDefault()
    fizzBuzz(fizzNum)
    document.querySelectorAll("input")[1].disabled = true
})

fizzInput.addEventListener("change", (e) => {
    fizzNum = fizzInput.valueAsNumber
})
fizzReset.addEventListener("click", () => {
    while (fizzResults.firstChild) {
        fizzResults.removeChild(fizzResults.firstChild);
    }
    document.querySelectorAll("input")[1].disabled = false
})


let fizzBuzz = (num) => {
    if (num < 0) {
        appendResult("You must use positive integers.")
    }
    for (let i = 1; i <= num; i++) {
        //FizzBuzz
        if (i % 3 === 0 && i % 5 === 0) {
            appendResult("FizzBuzz")
            continue;
        }
        //Fizz
        else if (i % 3 === 0) {
            appendResult("Fizz")
            continue;
        }
        //Buzz
        else if (i % 5 === 0) {
            appendResult("Buzz")
            continue;
        }
    }
}

let appendResult = (res) => {
    let el = document.createElement("li")
    el.innerText = `${res}`
    fizzResults.append(el)
}