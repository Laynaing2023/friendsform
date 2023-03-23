// const name = document.getElementById("name");
// const age = document.getElementById("age");
// const type = document.getElementById("type");
const habbitContainer = document.getElementById("habbitContainer")
const habbit = document.getElementById("habbit");
const output= document.getElementById('output');
const addHabbitButton = document.getElementById("addHabit");
const addFriendsButton = document.getElementById("addFriends");
let collectedHabbit = ""; const allHabits=[];


const form = document.querySelector('form');

//Add Habbit
function habbitCollector () {
    collectedHabbit = habbit.value;
    allHabits.push(collectedHabbit);
    appendHabbit();
}
 function appendHabbit() {

    let habbitBox = document.createElement("p");
    let button = document.createElement("button");
    habbitBox.textContent = collectedHabbit;
    button.textContent = "Delete Habit";
    button.onclick = () => {button.parentElement.remove()};
    habbitBox.appendChild(button);
    habbitContainer.appendChild(habbitBox);
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

        if (form[i].id === 'habbit') {
            let array = document.createElement('p');
            array.textContent = allHabits;
            output.appendChild(array);
        } else {
            // formValues[form[i].name] = form[i].value
            makePElement(form[i].name, form[i].value)
        }
        // console.log(form[i].firstName, form[i].value);
    }
    console.log(allHabits);
}

addHabbitButton.onclick = habbitCollector





