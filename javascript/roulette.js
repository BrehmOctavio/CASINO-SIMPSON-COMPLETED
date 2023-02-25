//VARIABLES

const go = document.querySelector(".go");
const roulette = document.querySelector(".roulette-img");
const back = document.querySelector(".back");
const form = document.querySelector(".form");
const players = document.querySelector(".players");

//BACK

back.addEventListener("click",()=>{
    window.open("../html/main.html");
    window.close("../html/roulette.html");
});

//GO

go.addEventListener("click",()=>{
    roulette.style.transform += "rotate(360deg)";
}); 

//GET-RESULT

const getResult = (number)=>{
    let numberChoose = number.value;
    let numberRandom = Math.floor(Math.random()*36);
    console.log(numberRandom);

    if(numberChoose == numberRandom){
        swal ( "WIN" );
        swal (`WIN - WINNER NUMBER: ${numberRandom}`);
    }else{
        swal ("LOSE");
        swal (`LOSE - WINNER NUMBER: ${numberRandom}`);
    };
};

//NUMBER

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const {number} = e.target;
    setTimeout(() => {
        getResult(number);
    }, 4000);
});

//PLAYERS

const getData = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    return json;
};

const printData = async()=>{
    const playerNames = await getData();
    for(let item of playerNames){
        players.innerHTML += `
            <div style="margin:1rem;display:flex;align-items:center;justify-content:center;border:1px dashed rgb(255, 255, 255);">
                <p style="font-size: 0.9rem;font-weight: lighter;font-family: sans-serif;color: rgb(255, 255, 255);">${item.name}</p>
            </div>
        `;
    };
};

printData();