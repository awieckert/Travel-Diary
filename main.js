console.log("YAY!")

const locations = [
    {
        title: "Rome",
        img: "/img/rome.jpg",
        description: "It'sa Roma!",
    },
    {
        title: "Sydney",
        img: "/img/sydney.jpg",
        description: "Welcome to the Outback Mate!",
    },
    {
        title: "Porto",
        img: "/img/porto.jpg",
        description: "It'sa Porto!",
    },
    {
        title: "London",
        img: "/img/london.jpg",
        description: "Cherrio! Welcome to London chap!",
    },
    {
        title: "Paris",
        img: "/img/paris.jpg",
        description: "Bienvenue à Paris",
    },
    {
        title: "New York",
        img: "/img/new-york.jpg",
        description: "Welcome to New York, F@*! outta the way!",
    },
]

const printToDom = (string, divID) => {
    let thingToPrint = document.getElementById(divID);
    thingToPrint.innerHTML += string;
};

const cardBuilder = (locationArray) => {
    let stringToPrint = "";
    locationArray.forEach(element => {
        stringToPrint += `<div class="location-card">`;
        stringToPrint +=   `<h2 class="location-title">${element.title}</h2>`;
        stringToPrint +=   `<img src="${element.img}" alt="" class="dest-img">`;
        stringToPrint +=   `<p class="dest-descrip">${element.description}</p>`;
        stringToPrint +=   `<textarea name="" id="" cols="20" rows="5" class="diaryentry"></textarea>`;
        stringToPrint +=   `<button class="diary-button">Submit Entry</button>`;
        stringToPrint += `</div>`;
    });
    printToDom(stringToPrint, "location-container");
};

cardBuilder(locations);

const addDiaryEntry = () => {
    let textToCopy = e.target.previousSibling.value;
    console.log("Value of event target: ", textToCopy);
}

const allMyButtons = document.getElementsByClassName("diary-button");

const addEventListeners = () => {
    for(let i = 0; i < allMyButtons.length; i++){
        allMyButtons[i].addEventListener("click", (e) => {
            console.log("Event: ", e);
            let textToCopy = e.target.previousSibling.value;
            console.log("Value of event target: ", textToCopy);
        })
    }
};

addEventListeners();

