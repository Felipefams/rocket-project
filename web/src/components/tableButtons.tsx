function handle() {
    console.log("teste");
}

export function AddButton() {
    return (
        <div className="add-button-div">
            <button className="button add-button" onClick={handle}>
                add
            </button>
        </div>
    )
}

export function EditButton() {
    return (
        <button className="button edit-button" onClick={handle}>
            edit
        </button>
    )
}
export function DeleteButton() {
    return (
        <button className="button delete-button" onClick={handle}>
            delete
        </button>
    )
}