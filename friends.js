// const name = document.getElementById("name");
// const age = document.getElementById("age");
// const type = document.getElementById("type");
const habbitContainer = document.getElementById("habbitContainer")
const habbit = document.getElementById("habbit");
const output = document.getElementById('output');
const addHabbitButton = document.getElementById("addHabit");
const addFriendsButton = document.getElementById("addFriends");


const type = document.getElementById("type");
const addOther = document.getElementById("other");

let collectedHabbit = "";
let allHabits = {};
let habitCounter = 0;


const form = document.querySelector('form');

function other() {
    if (type.value === "other") {
        addOther.style.display = "block";

    } else {
        addOther.style.display = "none";
    }
}

type.onchange = other;

function habbitCollector() {
    collectedHabbit = habbit.value;
    allHabits[habitCounter] = collectedHabbit;
    // allHabits.push(collectedHabbit);
    appendHabbit();
    habitCounter++;
}

function appendHabbit() {

    let habbitBox = document.createElement("p");
    let button = document.createElement("button");
    habbitBox.textContent = collectedHabbit;
    button.textContent = "Delete Habit";
    button.classList.add("btn", "btn-danger");
    let buttonId = habitCounter;
    button.onclick = () => {
        button.parentElement.remove();
        delete allHabits[buttonId];
    };

    habbitBox.appendChild(button);
    habbitContainer.appendChild(habbitBox);
}


habbit.oninput = () => {
    addHabbitButton.disabled = habbit.value.length <= 5;
}

const makePElement = (key, value) => {
    const paraEl = document.createElement('p');
    paraEl.textContent = key + ': ' + value;
    output.appendChild(paraEl);
}

form.onsubmit = (event) => {
    event.preventDefault();
    // const formValues=[];
    for (let i = 0; i < form.length - 2; i++) {
        let key;
        let value;

        if (form[i].id === 'habbit') {
            let hobbyEl = document.createElement('p');
            hobbyEl.textContent = Object.values(allHabits);
            output.appendChild(hobbyEl);
            continue;
        }
        if (form[i].id === "type") {
            key = 'Type';
            if (form[i].value === "other") {
                // let otherType = document.createElement("p");
                value = document.getElementById('other').value
                // output.appendChild(otherType);
            } else {
                value = type.value
            }
        } else if (form[i].id === "other") {
            continue;
        } else {
            key = form[i].name;
            value = form[i].value;
        }
        makePElement(key, value);
    }
    clearForm();
}

function clearForm() {
    habbitContainer.replaceChildren();
    allHabits = {};
    habitCounter = 0;


}

addHabbitButton.onclick = habbitCollector





