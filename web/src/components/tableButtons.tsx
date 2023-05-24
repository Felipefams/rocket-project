// import { useState } from "react";

function handle() {
    return alert("This feature is not yet implemented.");
}

export function AddButton(props: { handle: () => void }) {

    return (
        <div className="add-button-div">
            <button className="button add-button" onClick={props.handle}>
                add
            </button>
        </div>
    )
}

export function EditButton(props: {id: number, handle: () => void, setModalNumber: (id: number) => void}) {
    function handleBoth(){
        props.handle();
        props.setModalNumber(props.id);
    }
    return (
        <button className="button edit-button" onClick={handleBoth}>
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