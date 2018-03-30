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

const deleteEvent = (e) => {
    let itemToDelete = e.target.parentNode;
    itemToDelete.style.display = "none";
    console.log("Delete Event: ", e);
};

const makeDeleteEvent = () => {
    let deleteButton = document.getElementById('deleteButton');
    deleteButton.addEventListener("click", deleteEvent);
}

const editEvent = (e) => {
    console.log("Edit Event: ", e)
    let hideOriginalText = e.target.parentNode.children[3].firstChild;
    if(e.target.innerHTML === "Edit"){
    let originalText = e.target.parentNode.children[3].firstChild.innerHTML;
    hideOriginalText.style.display = "none";
    console.log("Hide", hideOriginalText);
    let editThis = `<textarea id="editor">${originalText}</textarea>`;
    printToDom(editThis, 'text-field');
    e.target.innerHTML = "Finish";
    } else {
        let editedText = document.getElementById('editor').value;
        hideOriginalText.style.display = "block";
        hideOriginalText.innerHTML = editedText;
        let hideEditor = document.getElementById('editor');
        hideEditor.style.display = "none";
        e.target.innerHTML = "Edit";
    }
}

const makeEditEvent = () => {
    let editButton = document.getElementById('editButton');
    editButton.addEventListener("click", editEvent);
}

const addDiaryEntry = (e) => {
    let textToCopy = e.target.previousSibling.value;
    let stringToPrint = "";
    stringToPrint += `<div class="entry">`;
    stringToPrint +=   `<h3>${e.target.parentElement.firstChild.innerHTML}</h3>`;
    stringToPrint +=   `<button id="editButton" class="edit">Edit</button>`;
    stringToPrint +=   `<button id="deleteButton" class="delete">Delete</button>`;
    stringToPrint +=   `<div id="text-field">`;
    stringToPrint +=   `<p id="editThis" class="entry-text">${textToCopy}</p>`;
    stringToPrint +=   `</div>`;
    stringToPrint += `</div>`;
    printToDom(stringToPrint, "diary-container");
    e.target.previousSibling.value = "";
    e.target.parentNode.classList.add('newColor');
    makeDeleteEvent();
    makeEditEvent();
};





const allMyButtons = document.getElementsByClassName("diary-button");

const addEventListeners = () => {
    for(let i = 0; i < allMyButtons.length; i++){
        allMyButtons[i].addEventListener("click", (e) => {
            console.log("Event: ", e);
            addDiaryEntry(e);
        })
    }
};

addEventListeners();

