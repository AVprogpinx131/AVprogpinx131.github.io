// Storing html elements 
const myGuess = document.querySelector('#guess');
const myInput = document.querySelector('#input');
const arrow = document.querySelector('.arrow');
const submit = document.querySelector('#extra-submit');
const high = document.querySelector('.high-guess');
const low = document.querySelector('.low-guess');
const right = document.querySelector('.right-guess');
const emptyField = document.querySelector('.no-input');
const gamingBoard = document.querySelector('.gaming-board');
const result = document.querySelector('.result');
const backBtn = document.querySelector('#submit-btn2')
const victorySound = document.querySelector('#audio1');
const failureSound = document.querySelector('#audio2');
const trueMasterSound = document.querySelector('#audio3');
const text1 = document.querySelector('#output1');
const text2 = document.querySelector('#output2');
const text3 = document.querySelector('#output3');
const options = document.querySelector('#option');
const alert1 = document.querySelector('.alert1');
const alert2 = document.querySelector('.alert2');
const alert3 = document.querySelector('.alert3');
const insBtn = document.querySelector('.ins-btn');

// Initialising values for further use 
let randomNumber;
let guesses = 0;
let points = 0;

// Levels ranges
let levelOne = (start, end) => {
    let ans = [];
    for (let i = start; i <= end; i++){
       ans.push(i);
    }
    return ans;
}


let levelTwo = (start, end) => {
    let ans = [];
    for (let i = start; i <= end; i++){
        ans.push(i);
    }
    return ans; 
}


let levelThree = (start, end) => {
    let ans = [];
    for (let i = start; i <= end; i++){
        ans.push(i);
    }
    return ans;
}


let levelFour = (start, end) => {
    let ans = [];
    for (let i = start; i <= end; i++){
        ans.push(i);
    }
    return ans;
}


let levelFife = (start, end) => {
    let ans = [];
    for (let i = start; i <= end; i++){
        ans.push(i);
    }
    return ans;
}


let levelSix = (start, end) => {
    let ans = [];
    for (let i = start; i <= end; i++){
        ans.push(i);
    }
    return ans
}


let levelSeven = (start, end) => {
    let ans = [];
    for (let i = start; i <= end; i++){
        ans.push(i);
    }
    return ans
}


let levelEight = (start, end) => {
    let ans = [];
    for (let i = start; i <= end; i++){
        ans.push(i);
    }
    return ans
}

let hideElement = () => {
    alert1.style.display = 'none';
    alert2.style.display = 'none';
    alert3.style.display = 'none';
}

// Checking if player inputs the number from the correct level range
let levels = () => {
    let first = levelOne(20, 29);
    let second = levelTwo(30, 39);
    let third = levelThree(40, 49);
    let four = levelFour(50, 59);
    let fife = levelFife(60, 69);
    let six = levelSix(70, 79);
    let seven = levelSeven(80, 89);
    let eight = levelEight(90, 99);

    myInput.addEventListener("mouseout", () => {
        let input = parseInt(myInput.value);

        if (options.value === 'level 1' && first.includes(input)) {
            alert1.style.display = 'block';
            setTimeout(hideElement, 2000);
        } 
        else if (options.value === 'level 2' && second.includes(input)) {
            alert1.style.display = 'block';
            setTimeout(hideElement, 2000);
        } 
        else if (options.value === 'level 3' && third.includes(input)) {
            alert1.style.display = 'block';
            setTimeout(hideElement, 2000);
        } 
        else if (options.value === 'level 4' && four.includes(input)) {
            alert1.style.display = 'block';
            setTimeout(hideElement, 2000);
        } 
        else if (options.value === 'level 5' && fife.includes(input)) {
            alert1.style.display = 'block';
            setTimeout(hideElement, 2000);
        } 
        else if (options.value === 'level 6' && six.includes(input)) {
            setTimeout(hideElement, 2000);
        } 
        else if (options.value === 'level 7' && seven.includes(input)) {
            alert1.style.display = 'block';
            setTimeout(hideElement, 2000);;
        } 
        else if (options.value === 'level 8' && eight.includes(input)) {
            alert1.style.display = 'block';
            setTimeout(hideElement, 2000);
        }
        else {
            if (options.value === "" || myInput.value === "") {
                alert2.style.display = 'block';
                setTimeout(hideElement, 3000);
            } 
            else {
                alert3.style.display = 'block';
                setTimeout(hideElement, 4000);
            }
        }
    })
}

levels();

// Different events in the game 
let gameEvents = () => {
    myInput.addEventListener('mouseout', () => {
        arrow.style.opacity = '1';
        randomNumber = Math.floor(Math.random() * myInput.value)
        console.log(randomNumber);
    })

    myInput.addEventListener('mouseover', () => {
        arrow.style.opacity = '0';
    })

    myGuess.addEventListener('mouseover', () => {
        high.style.opacity = '0';
        low.style.opacity = '0';
    })

}

gameEvents();


// Guessing loop, getting players input and showing information about the guess based on that
let guessingNumber = () => {
    randomNumber = Math.floor(Math.random() * myInput.value);
    submit.addEventListener('click', () => {
        guesses++;
        if (myInput.value === "" || myGuess.value === "" || options.value === "") {
            emptyField.style.opacity = '1';
        } 
        else if (randomNumber > myGuess.value) {
            low.style.opacity = '1';
            emptyField.style.opacity = '0';
        } 
        else if (randomNumber < myGuess.value) {
            high.style.opacity = '1';
            emptyField.style.opacity = '0';
        } 
        else {
            right.style.opacity = '1';
            emptyField.style.opacity = '0';
            insBtn.style.opacity = '0';
            setTimeout(resultAndBackBtnView, 2000);
            gameEndInfo();
            gameEndSoundsAndPoints();
        }
    })
}

guessingNumber();


insBtn.addEventListener('click', () => {
    emptyField.style.opacity = '0';
})


let resultAndBackBtnView = () => {
    result.style.display = 'block';
    gamingBoard.style.opacity = '0';
}

// Players result information
let gameEndInfo = () => {
    result.addEventListener('click', () => {
        result.style.display = 'none';
        backBtn.style.display = 'block';
        text1.innerHTML = `Õige number oli tõesti ${myGuess.value}`;
        text2.innerHTML = `Pakkumisi kokku: ${guesses}`;
        text3.innerHTML = `Punkte kokku: ${points}`;
        hideElement();
    })
}

// Point system and sounds 
let gameEndSoundsAndPoints = () => {
    if (guesses === 1 && options.value === 'level 1') {
        points += 10;
        trueMasterSound.play();
    } else if (guesses === 1 && options.value === 'level 2') {
        points += 15
        trueMasterSound.play();
    } else if (guesses === 1 && options.value === 'level 3') {
        points += 20
        trueMasterSound.play();
    } else if (guesses === 1 && options.value === 'level 4') {
        points += 25
        trueMasterSound.play();
    } else if (guesses === 1 && options.value === 'level 5') {
        points += 30
        trueMasterSound.play();
    } else if (guesses === 1 && options.value === 'level 6') {
        points += 35
        trueMasterSound.play();
    } else if (guesses === 1 && options.value === 'level 7') {
        points += 40
        trueMasterSound.play();
    } else if (guesses === 1 && options.value === 'level 8') {
        points += 50
        trueMasterSound.play();
    } else if (guesses === 2 && options.value === 'level 1') {
        points += 9
        victorySound.play();
    } else if (guesses === 2 && options.value === 'level 2') {
        points += 14
        victorySound.play();
    } else if (guesses === 2 && options.value === 'level 3') {
        points += 19
        victorySound.play();
    } else if (guesses === 2 && options.value === 'level 4') {
        points += 24
        victorySound.play();
    } else if (guesses === 2 && options.value === 'level 5') {
        points += 29
        victorySound.play();
    } else if (guesses === 2 && options.value === 'level 6') {
        points += 34
        victorySound.play();
    } else if (guesses === 2 && options.value === 'level 7') {
        points += 39
        victorySound.play();
    } else if (guesses === 2 && options.value === 'level 8') {
        points += 49
        victorySound.play();
    } else if (guesses === 3 && options.value === 'level 1') {
        points += 8
        victorySound.play();
    } else if (guesses === 3 && options.value === 'level 2') {
        points += 13
        victorySound.play();
    } else if (guesses === 3 && options.value === 'level 3') {
        points += 18
        victorySound.play();
    } else if (guesses === 3 && options.value === 'level 4') {
        points += 23
        victorySound.play();
    } else if (guesses === 3 && options.value === 'level 5') {
        points += 28
        victorySound.play();
    } else if (guesses === 3 && options.value === 'level 6') {
        points += 33
        victorySound.play();
    } else if (guesses === 3 && options.value === 'level 7') {
        points += 38
        victorySound.play();
    } else if (guesses === 3 && options.value === 'level 8') {
        points += 48
        victorySound.play();
    } else if (guesses === 4 && options.value === 'level 1') {
        points += 7
        victorySound.play();
    } else if (guesses === 4 && options.value === 'level 2') {
        points += 12
        victorySound.play();
    } else if (guesses === 4 && options.value === 'level 3') {
        points += 17
        victorySound.play();
    } else if (guesses === 4 && options.value === 'level 4') {
        points += 22
        victorySound.play();
    } else if (guesses === 4 && options.value === 'level 5') {
        points += 27
        victorySound.play();
    } else if (guesses === 4 && options.value === 'level 6') {
        points += 32
        victorySound.play();
    } else if (guesses === 4 && options.value === 'level 7') {
        points += 37
        victorySound.play();
    } else if (guesses === 4 && options.value === 'level 8') {
        points += 47
        victorySound.play();
    } else if (guesses === 5 && options.value === 'level 1') {
        points += 6
        victorySound.play();
    } else if (guesses === 5 && options.value === 'level 2') {
        points += 11
        victorySound.play();
    } else if (guesses === 5 && options.value === 'level 3') {
        points += 16
        victorySound.play();
    } else if (guesses === 5 && options.value === 'level 4') {
        points += 21
        victorySound.play();
    } else if (guesses === 5 && options.value === 'level 5') {
        points += 26
        victorySound.play();
    } else if (guesses === 5 && options.value === 'level 6') {
        points += 31
        victorySound.play();
    } else if (guesses === 5 && options.value === 'level 7') {
        points += 36
        victorySound.play();
    } else if (guesses === 5 && options.value === 'level 8') {
        points += 46
        victorySound.play();
    } else if (guesses === 6 && options.value === 'level 1') {
        points += 5
        victorySound.play();
    } else if (guesses === 6 && options.value === 'level 2') {
        points += 10
        victorySound.play();
    } else if (guesses === 6 && options.value === 'level 3') {
        points += 15
        victorySound.play();
    } else if (guesses === 6 && options.value === 'level 4') {
        points += 20
        victorySound.play();
    } else if (guesses === 6 && options.value === 'level 5') {
        points += 25
        victorySound.play();
    } else if (guesses === 6 && options.value === 'level 6') {
        points += 30
        victorySound.play();
    } else if (guesses === 6 && options.value === 'level 7') {
        points += 35
        victorySound.play();
    } else if (guesses === 6 && options.value === 'level 8') {
        points += 45
        victorySound.play();
    } else if (guesses === 7 && options.value === 'level 1') {
        points += 4
        victorySound.play();
    } else if (guesses === 7 && options.value === 'level 2') {
        points += 9
        victorySound.play();
    } else if (guesses === 7 && options.value === 'level 3') {
        points += 14
        victorySound.play();
    } else if (guesses === 7 && options.value === 'level 4') {
        points += 19
        victorySound.play();
    } else if (guesses === 7 && options.value === 'level 5') {
        points += 24
        victorySound.play();
    } else if (guesses === 7 && options.value === 'level 6') {
        points += 29
        victorySound.play();
    } else if (guesses === 7 && options.value === 'level 7') {
        points += 34
        victorySound.play();
    } else if (guesses === 7 && options.value === 'level 8') {
        points += 44
        victorySound.play();
    } else if (guesses === 8 && options.value === 'level 1') {
        points += 3
        failureSound.play();
    } else if (guesses === 8 && options.value === 'level 2') {
        points += 8
        failureSound.play();
    } else if (guesses === 8 && options.value === 'level 3') {
        points += 13
        failureSound.play();
    } else if (guesses === 8 && options.value === 'level 4') {
        points += 18
        failureSound.play();
    } else if (guesses === 8 && options.value === 'level 5') {
        points += 23
        failureSound.play();
    } else if (guesses === 8 && options.value === 'level 6') {
        points += 28
        failureSound.play();
    } else if (guesses === 8 && options.value === 'level 7') {
        points += 33
        failureSound.play();
    } else if (guesses === 8 && options.value === 'level 8') {
        points += 43
        failureSound.play();
    } else if (guesses === 9 && options.value === 'level 1') {
        points += 2
        failureSound.play();
    } else if (guesses === 9 && options.value === 'level 2') {
        points += 7
        failureSound.play();
    } else if (guesses === 9 && options.value === 'level 3') {
        points += 12
        failureSound.play();
    } else if (guesses === 9 && options.value === 'level 4') {
        points += 17
        failureSound.play();
    } else if (guesses === 9 && options.value === 'level 5') {
        points += 22
        failureSound.play();
    } else if (guesses === 9 && options.value === 'level 6') {
        points += 27
        failureSound.play();
    } else if (guesses === 9 && options.value === 'level 7') {
        points += 32
        failureSound.play();
    } else if (guesses === 9 && options.value === 'level 8') {
        points += 42
        failureSound.play();
    } else if (guesses === 10 && options.value === 'level 1') {
        points += 1
        failureSound.play();
    } else if (guesses === 10 && options.value === 'level 2') {
        points += 6
        failureSound.play();
    } else if (guesses === 10 && options.value === 'level 3') {
        points += 11
        failureSound.play();
    } else if (guesses === 10 && options.value === 'level 4') {
        points += 16
        failureSound.play();
    } else if (guesses === 10 && options.value === 'level 5') {
        points += 21
        failureSound.play();
    } else if (guesses === 10 && options.value === 'level 6') {
        points += 26
        failureSound.play();
    } else if (guesses === 10 && options.value === 'level 7') {
        points += 31
        failureSound.play();
    } else if (guesses === 10 && options.value === 'level 8') {
        points += 41
        failureSound.play();
    } else {
        points;
        failureSound.play();
    }
}

// Gsap for button animation
gsap.fromTo('.result', {scale: 1}, {scale: 1.1, yoyo: true, repeat: -1, duration: 0.7})

