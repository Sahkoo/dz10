let count = 0
let int = setInterval(() => {
    count++
    console.log("Hello" + count)
    if (count >= 5) {
        clearInterval(int)
        console.log("Стоп машина")
    }
}, 1000)



let block1 = document.querySelector(".block1")
let block2 = document.querySelector(".block2")
let block3 = document.querySelector(".block3")


let blocks = setInterval(() =>{
    block1.style.background = "red"
    block2.style.background = "green"
    block3.style.background = "yellow"
})