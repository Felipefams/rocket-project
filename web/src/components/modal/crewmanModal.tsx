import React from "react";
import { createCrewman, updateCrewman } from "../../api/crewmanApi";
import { Crewman } from "../../interfaces/crewman";
import { FormInput } from "../form/formInput";

export function CrewmanModal(props: { closeModal: () => void, keys: string[], object: Crewman, isEditModal: boolean }) {
    const [formData, setFormData] = React.useState<Crewman>(props.object);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (props.isEditModal) updateCrewman(formData);
        else createCrewman(formData);
        console.log(formData);
    }

    const isEdit = props.isEditModal ? "edit" : "add";

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <h2>{isEdit ? "Edit" : "Add"} Crewman</h2>
                    <button className="close" onClick={props.closeModal}>&times;</button>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <FormInput type="text" value={formData.name} name="name" onChange={handleChange} />
                    <FormInput type="text" value={formData.patent} name="patent" onChange={handleChange} />
                    <button className="button" id={`${isEdit}-save-button`}>Save</button>
                </form>
            </div>
        </div>
    );
}