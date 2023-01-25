// let title = document.querySelector("h1")
// let subTitle = document.querySelector('h2')

// console.log(title);

// title.textContent = "Text from JS"

// console.log(title);

// title.style.color = "red"

// subTitle.classList.add('hide')


// // let link = document.querySelector('a')

// // link.setAttribute('href', 'https://google.com')

// title.addEventListener('click', function () {
//     if (title.style.color == "red") {
//         title.style.color = "blue"
//         title.classList.add('move')
//     }   else if (title.style.color == "blue") {
//         title.style.color = "red"
//         title.classList.remove('move')
//     }
// })



// let btnRed = document.querySelector('#first')
let body = document.querySelector('body')
let html = document.querySelector('html')

// btnRed.addEventListener('click', function(){
//     body.style.backgroundImage = "url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)"
// })


// let btnOrange = document.querySelector('#second')

// btnOrange.addEventListener('click', function(){
//     body.style.backgroundImage = "url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
// })



// body.style.backgroundImage = 'url(https://images.wallpapersden.com/image/download/small-memory_am1pa2aUmZqaraWkpJRmbmdlrWZlbWU.jpg)'
// let img = 1

// html.addEventListener('click', function(){
//     if (img == 1) {
//         body.style.backgroundImage = 'url(https://images.hdqwalls.com/download/neon-world-7o-1920x1080.jpg)'
//         img = 2
//     }   else if(img == 2){
//         body.style.backgroundImage = 'url(https://images.wallpapersden.com/image/download/small-memory_am1pa2aUmZqaraWkpJRmbmdlrWZlbWU.jpg)'
//         img = 3
//     }   else{
//         body.style.backgroundImage = 'url(https://images5.alphacoders.com/112/thumb-1920-1123013.jpg)'
//         img = 1
//     }
// })


let sliderContainer = document.querySelector('.slider-container')

let btnLeft = document.querySelector('.btn-left')
let btnRight = document.querySelector('.btn-right')

let image = 1   

btnRight.addEventListener('click', function () {
    if (image < 2) {
        sliderContainer.style.transform = 'translateX(-100%)'
        image = 2
        btnLeft.classList.remove('disabled')
        btnLeft.style.cursor = 'pointer'
    }   else if (image < 3) {
        sliderContainer.style.transform = 'translateX(-200%)'
        image = 3
        btnRight.classList.add('disabled')
        btnRight.style.cursor = 'default'
    }
})

btnLeft.addEventListener('click', function () {
    if (image > 2) {
        sliderContainer.style.transform = 'translateX(-100%)'
        image = 2
        btnRight.classList.remove('disabled')
        btnRight.style.cursor = 'pointer'
    }   else if (image > 1) {
        sliderContainer.style.transform = 'translateX(0%)'
        image = 1
        btnLeft.classList.add('disabled')
        btnLeft.style.cursor = 'default'
    }
})





















let plus = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    result = Number(num1) + Number(num2)

    document.querySelector('.result').innerHTML = result
}

let minus = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    result = num1 - num2

    document.querySelector('.result').innerHTML = result
}

let multiply = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    result = num1 * num2

    document.querySelector('.result').innerHTML = result
}

let divide = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    result = num1 / num2

    document.querySelector('.result').innerHTML = result
}




















let screen = document.querySelector('.screen')
let btnOne = document.querySelector('.one')
let btnTwo = document.querySelector('.two')
let btnThree = document.querySelector('.three')
let btnFour = document.querySelector('.four')
let btnFive = document.querySelector('.five')
let btnSix = document.querySelector('.six')
let btnSeven = document.querySelector('.seven')
let btnEight = document.querySelector('.eight')
let btnNine = document.querySelector('.nine')
let btnZero = document.querySelector('.zero')
let btnPlus = document.querySelector('.plus')
let btnMinus = document.querySelector('.minus')
let btnMultiply = document.querySelector('.multiply')
let btnDivide = document.querySelector('.divide')
let btnClear = document.querySelector('.clear')
let btnEqual = document.querySelector('.equal')




let onScreen = []
let allNumbers = []
let numbersCount = 0
let operators = []
let operatorsCount = 0

btnOne.addEventListener('click', function () {
    onScreen.push(1)
    screen.innerHTML = onScreen.join('')
})


btnTwo.addEventListener('click', function () {
    onScreen.push(2)
    screen.innerHTML = onScreen.join('')
})

btnThree.addEventListener('click', function () {
    onScreen.push(3)
    screen.innerHTML = onScreen.join('')
})

btnFour.addEventListener('click', function () {
    onScreen.push(4)
    screen.innerHTML = onScreen.join('')
})

btnFive.addEventListener('click', function () {
    onScreen.push(5)
    screen.innerHTML = onScreen.join('')
})

btnSix.addEventListener('click', function () {
    onScreen.push(6)
    screen.innerHTML = onScreen.join('')
})

btnSeven.addEventListener('click', function () {
    onScreen.push(7)
    screen.innerHTML = onScreen.join('')
})

btnEight.addEventListener('click', function () {
    onScreen.push(8)
    screen.innerHTML = onScreen.join('')
})

btnNine.addEventListener('click', function () {
    onScreen.push(9)
    screen.innerHTML = onScreen.join('')
})

btnZero.addEventListener('click', function () {
    onScreen.push(0)
    screen.innerHTML = onScreen.join('')
})










btnPlus.addEventListener('click', function () {
    allNumbers[numbersCount] = onScreen
    numbersCount++
    console.log(allNumbers);

    operators.push('+')
    operatorsCount++

    onScreen = []
    screen.innerHTML = onScreen.join('')
})



btnMinus.addEventListener('click', function () {
    allNumbers[numbersCount] = onScreen
    numbersCount++
    console.log(allNumbers);

    operators.push('-')
    operatorsCount++

    onScreen = []
    screen.innerHTML = onScreen.join('')
})



btnMultiply.addEventListener('click', function () {
    allNumbers[numbersCount] = onScreen
    numbersCount++
    console.log(allNumbers);

    operators.push('*')
    operatorsCount++

    onScreen = []
    screen.innerHTML = onScreen.join('')
})



btnDivide.addEventListener('click', function () {
    allNumbers[numbersCount] = onScreen
    numbersCount++
    console.log(allNumbers);

    operators.push('/')
    operatorsCount++

    onScreen = []
    screen.innerHTML = onScreen.join('')
})





btnClear.addEventListener('click', function () {
    allNumbers = [] 
    numbersCount = 0

    operators = []
    operatorsCount = 0

    onScreen = []
    screen.innerHTML = onScreen.join('')
})










btnEqual.addEventListener('click', function () {
    let result = []

    allNumbers[numbersCount] = onScreen

    
    // allNumbers.forEach(item => {
    //     let temporaryOperator
    //     if (operators.reverse()[operatorsCount-=1]) {
    //         temporaryOperator = operators.reverse()[operatorsCount]
    //     }   else{
    //         temporaryOperator = ''
    //     }
    //     result.push(item.join(''), 
    //     temporaryOperator, 
    //     onScreen ? onScreen.join('') : '')
    // })

    let allNumbers2 = allNumbers.concat()

    for (let j = 0; j < allNumbers.length; j++) {
        if (allNumbers2[j] != allNumbers[j].join('')) {
            allNumbers[j] = allNumbers[j].join('')
        }
        
    }

    let operatorsCount2 = operatorsCount
    let index = 1

    for (let i = 0; i < operatorsCount2; i++) {
        let temporaryOperator = 0

        console.log(operators);
        console.log(operatorsCount);
        if (operators) {
            temporaryOperator = operators.reverse().splice(operatorsCount-1, 1).join('')
            operatorsCount--
        }
        

        allNumbers.splice(index, 0, temporaryOperator)
        result = allNumbers.concat() 

        index += 2
    }

    console.log(result);

    onScreen.push(eval(result.join('')))

    screen.innerHTML = eval(result.join(''))
})


