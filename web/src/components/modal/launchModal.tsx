import React from "react";
import { Launch } from "../../interfaces/launch";
import { createLaunch, updateLaunch } from "../../api/launchApi";
import { FormInput } from "../form/formInput";

export function LaunchModal(props: { closeModal: () => void, keys: string[], object: Launch, isEditModal: boolean }) {
    const [formData, setFormData] = React.useState<Launch>(props.object);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = event.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        formData.launchCode = Number(formData.launchCode);
        formData.crew = Number(formData.crew);
        formData.rocket = Number(formData.rocket);
        if (props.isEditModal) updateLaunch(formData);
        else createLaunch(formData);

        console.log(formData);
    }


    const isEdit = props.isEditModal ? "edit" : "add";
    const crew: string = formData.crew?.toString() ?? "";
    const rocket: string = formData.rocket?.toString() ?? "";
    const launchCode: string = formData.launchCode?.toString() ?? "";
    const date: string = formData.date?.toString() ?? "";
    const success: boolean = formData.success ?? false;

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <h2>{isEdit ? "Edit" : "Add"} Rocket</h2>
                    <button className="close" onClick={props.closeModal}>&times;</button>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <FormInput type="text" value={launchCode} name="launchCode" onChange={handleChange} />
                    <FormInput type="date" value={date} name="date" onChange={handleChange} />
                    <FormInput type="text" value={rocket} name="rocket" onChange={handleChange} />
                    <FormInput type="text" value={crew} name="crew" onChange={handleChange} />
                    <FormInput type="checkbox" checked={success} name="success" onChange={handleChange} />
                    <button type="submit" className="button" id={`${isEdit}-save-button`}>Save</button>
                </form>
            </div>
        </div>
    );

}