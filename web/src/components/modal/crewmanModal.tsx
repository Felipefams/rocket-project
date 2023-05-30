import React, { useContext } from "react";
import { createCrewman, updateCrewman } from "../../api/crewmanApi";
import { Crewman } from "../../interfaces/crewman";
import { FormInput } from "../form/formInput";
import { DataContext } from "../contexts/dataContext";

export function CrewmanModal(props: { closeModal: () => void, keys: string[], object: Crewman, isEditModal: boolean }) {
    const [formData, setFormData] = React.useState<Crewman>(props.object);
    const { changeData } = useContext(DataContext);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (props.isEditModal) await updateCrewman(formData);
        else await createCrewman(formData);
        changeData();
    }

    const isEdit = props.isEditModal ? "Edit" : "Add";

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <h2>{isEdit} Crewman</h2>
                    <button className="close" onClick={props.closeModal}>&times;</button>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <FormInput type="text" value={formData.name} name="name" onChange={handleChange} />
                    <FormInput type="text" value={formData.patent} name="patent" onChange={handleChange} />
                    <button className="button" id={`${isEdit.toLowerCase()}-save-button`}>Save</button>
                </form>
            </div>
        </div>
    );
}