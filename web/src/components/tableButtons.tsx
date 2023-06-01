// import { useState } from "react";

import { deleteCrew } from "../api/crewApi";
import { deleteLaunch } from "../api/launchApi";
import { deleteRocket } from "../api/rocketApi";
import { deleteCrewman } from "../api/crewmanApi";
import { useTranslation } from "react-i18next";
import { DataContext } from "./contexts/dataContext";
import { useContext } from "react";


export function AddButton(props: { handle: () => void, setIsEdit: (isEdit: boolean) => void }) {
    const { t } = useTranslation();
    function handleBoth() {
        props.setIsEdit(false);
        props.handle();
    }
    return (
        <div className="add-button-div">
            <button className="button add-button" onClick={handleBoth}>
                {t("add")}
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
    const { t } = useTranslation();
    return (
        <button className="button edit-button" onClick={handleBoth}>
            {t("edit")}
        </button>
    )
}

export function DeleteButton(props: { id: number, type: string }) {
    const { t } = useTranslation();
    const { changeData } = useContext(DataContext);

    async function deleteItem() {
        if (props.type === "crew")
            await deleteCrew(props.id);
        else if (props.type === "launch")
            await deleteLaunch(props.id);
        else if (props.type === "rocket")
            await deleteRocket(props.id);
        else if (props.type === "crewman")
            await deleteCrewman(props.id);
        else
            throw new Error("Invalid type");

        changeData();
    }

    return (
        <button className="button delete-button" onClick={deleteItem}>
            {t("delete")}
        </button>
    )
}