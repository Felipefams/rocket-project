import React, { useContext } from "react";
import { Crew } from "../../interfaces/crew";
import { strToArr } from "../../utils/string";
import { createCrew, updateCrew } from "../../api/crewApi";
import { FormInput } from "../form/formInput";
import { DataContext } from "../contexts/dataContext";
import { useTranslation } from "react-i18next";

export function CrewModal(props: { closeModal: () => void, keys: string[], object: Crew, isEditModal: boolean }) {
    const [formData, setFormData] = React.useState<Crew>(props.object);
    const { changeData } = useContext(DataContext);
    const { t } = useTranslation();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        const nv = name === "crewman" ? strToArr(value) : value;
        setFormData({ ...formData, [name]: nv });
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (props.isEditModal) await updateCrew(formData);
        else await createCrew(formData);
        changeData();
    }

    const isEdit = props.isEditModal ? t("edit") : t("add");
    const crewman = formData.crewman?.toString() ?? "";

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <h2>{isEdit} {t("crews")}</h2>
                    <button className="close" onClick={props.closeModal}>&times;</button>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <FormInput type="text" value={formData.name} name="name" onChange={handleChange} />
                    <FormInput type="text" value={crewman} name="crewman" onChange={handleChange} />
                    <button className="button" id={`${props.isEditModal ? "edit" : "add"}-save-button`}>Save</button>
                </form>
            </div>
        </div>
    );
}