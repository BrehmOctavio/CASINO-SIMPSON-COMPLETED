//VARIABLES

const form = document.querySelector(".form");
const imageLottery = document.querySelector(".image-lottery");
const result = document.querySelector(".result");
const back = document.querySelector(".back");
const body = document.querySelector(".body");

//BACK

back.addEventListener("click",()=>{
    window.open("../html/main.html");
    window.close("../html/lottery.html");
});

//IMAGES

const images = {
    imageWin: "../assets/winner.gif",
    imageLose: "../assets/lose.jfif"
};

//GET-RESULT

const getResult = (number)=>{
    let numbers = [];
    let counter = 0;

    while(counter !== 5){
        let numberWinner = Math.floor(Math.random()*10);
        numbers.push(numberWinner);
        counter++;
    };

    result.innerHTML += `<p style="">RESULT: ${numbers} <br></p>`;
    result.style.display = "block";

    let found = numbers.find(item => item == number.value);

    if(found){
        imageLottery.setAttribute("src",images.imageWin);
    }else{
        imageLottery.setAttribute("src",images.imageLose);
    };
};

//GO

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const {number} = e.target;  
    getResult(number);
});

