// Get the modals
const addModal = document.getElementById("add-modal");
// Get the button that opens the add modal
const addButton = document.querySelector(".add-button");
//button to close the modal
// const closeButtons = document.querySelectorAll(".close");

const addSaveButton = document.getElementById("add-save-button");
const addForm = document.getElementById("add-form");

addButton.addEventListener("click", () => {
    addModal.style.display = "flex";
});

// addButton.onclick = function () {
//     addModal.style.display = "flex";
// };

// When the user clicks on <span> (x), close the modal
closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        addModal.style.display = "none";
    });
});

// const saveInfo = addSaveButton.onclick = async (endpoint) => {
//     const labels = document.querySelectorAll(".add-form-label");
//     const inputFields = document.querySelectorAll(".form-input-field");
//     const map = new Map();
//     console.log("uwu");
//     let i = 0;
//     while (i < labels.length) {
//         map.set(labels[i].textContent, inputFields[i].value);
//         i++;
//     }
//     console.log(map);
//     const data = Object.fromEntries(map);
//     const response = await fetch(`${local}/${endpoint}`, {
//         method: 'POST',
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }

