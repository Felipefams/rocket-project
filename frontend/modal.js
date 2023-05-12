const local = 'http://localhost:8080';

// Get the modals
const addModal = document.getElementById("add-modal");
const editModal = document.getElementById("edit-modal");

// Get the button that opens the add modal
const addButton = document.querySelector(".add-button");

// Get the button that opens the edit modal
const editButton = document.querySelector(".edit-button");

const closeButtons = document.querySelectorAll(".close");

const editSaveButton = document.getElementById("edit-save-button");
const editForm = document.getElementById("edit-form");



// When the user clicks on the add or edit button, open the corresponding modal
addButton.onclick = function () {
    addModal.style.display = "flex";
};

editButton.onclick = function () {
    editModal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
closeButtons.forEach((button) => {
    button.onclick = function () {
        addModal.style.display = "none";
        editModal.style.display = "none";
    };
});

editSaveButton.onclick = () => {
    const labels = document.querySelectorAll(".edit-form-label");
    const inputFields = document.querySelectorAll(".form-input-field");
    const map = new Map();
    console.log("uwu")
    let i = 0;
    while(i < labels.length) {
        map.set(labels[i].textContent, inputFields[i].value);
        i++;
    }
    
    console.log(map);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == addModal) {
        addModal.style.display = "none";
    } else if (event.target == editModal) {
        editModal.style.display = "none";
    }
};