// import { useState } from "react";

import { useEffect } from "react";
import { deleteCrew } from "../api/crewApi";

function handle() {
    return alert("This feature is not yet implemented.");
}

export function AddButton(props: { handle: () => void , setIsEdit: (isEdit: boolean) => void}) {
    function handleBoth() {
        props.setIsEdit(false);
        props.handle();
    }
    return (
        <div className="add-button-div">
            <button className="button add-button" onClick={handleBoth}>
                add
            </button>
        </div>
    )
}

export function EditButton(props: { id: number, handle: () => void, setModalNumber: (id: number) => void, setIsEdit: (isEdit: boolean) => void }) {
    function handleBoth() {
        props.setIsEdit(true);
        props.handle();
        props.setModalNumber(props.id);
    }
    return (
        <button className="button edit-button" onClick={handleBoth}>
            edit
        </button>
    )
}

export function DeleteButton(props: { id: number, type: string}) {


    function deleteItem() {
        if(props.type === "crew")
            deleteCrew(props.id);
        // else if(props.type === "rocket")
        // else if(props.type === "crewman")
    }

    return (
        <button className="button delete-button" onClick={deleteItem}>
            delete
        </button>
    )
}