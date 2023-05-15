// Get the modals
const editModal = document.getElementById("edit-modal");
// Get the button that opens the edit modal
const editButton = document.querySelector(".edit-button");
//button to close the modal
const closeButtons = document.querySelectorAll(".close");

const editSaveButton = document.getElementById("edit-save-button");
const editForm = document.getElementById("edit-form");

editButton.addEventListener("click", () => {
    editModal.style.display = "flex"; 
});

// When the user clicks on <span> (x), close the modal
closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        editModal.style.display = "none";
    });
});

const saveInfo = editSaveButton.onclick = async (endpoint) => {
    const labels = document.querySelectorAll(".edit-form-label");
    const inputFields = document.querySelectorAll(".form-input-field");
    const map = new Map();
    console.log("uwu");
    let i = 0;
    while (i < labels.length) {
        map.set(labels[i].textContent, inputFields[i].value);
        i++;
    }
    console.log(map);
    const data = Object.fromEntries(map);
    const response = await fetch(`${local}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return response.json();
}
