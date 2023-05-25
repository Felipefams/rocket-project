import React from "react";
import "../assets/css/modal.css";
import { Rocket } from "../interfaces/rocket";
import { Crewman } from "../interfaces/crewman";
import { Launch } from "../interfaces/launch";
import { Crew } from "../interfaces/crew";

function FormInput(props: {
    type: string,
    value?: string | undefined,
    name: string,
    checked?: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {

    const title = props.name.charAt(0).toUpperCase() + props.name.slice(1);
    const checkedExists = (props.checked == undefined) ? false : true;
    const inputOrCheckbox = checkedExists ? "checkbox" : "form-input-field";
    return (
        <div className="form-group">
            <label htmlFor="name-input">{title}</label>
            <input
                type={props.type}
                className={inputOrCheckbox}
                placeholder={props.name}
                name={props.name}
                {...checkedExists && { checked: props.checked }}
                {...!checkedExists && { value: props.value }}
                onChange={props.onChange}
                 />
        </div>
    );
}

export function RocketModal(props: { closeModal: () => void, keys: string[], object: Rocket, isEditModal: boolean }) {
    const [formData, setFormData] = React.useState<Rocket>(props.object);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const isEdit = props.isEditModal ? "edit" : "add";

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <h2>{isEdit ? "Edit" : "Add"} Rocket</h2>
                    <button className="close" onClick={props.closeModal}>&times;</button>
                </div>
                <form className="form">
                    <FormInput type="text" value={formData.name} name="name" onChange={handleChange} />
                    <button type="button" className="button" id={`${isEdit}-save-button`}>Save</button>
                </form>

            </div>
        </div>
    );
}

export function CrewmanModal(props: { closeModal: () => void, keys: string[], object: Crewman, isEditModal: boolean }) {
    const [formData, setFormData] = React.useState<Crewman>(props.object);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
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

export function LaunchModal(props: { closeModal: () => void, keys: string[], object: Launch, isEditModal: boolean }) {
    const [formData, setFormData] = React.useState<Launch>(props.object);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = event.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
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

export function CrewModal(props: { closeModal: () => void, keys: string[], object: Crew, isEditModal: boolean }) {
    const [formData, setFormData] = React.useState<Crew>(props.object);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(formData);
    }

    const isEdit = props.isEditModal ? "edit" : "add";
    const crewman = formData.crewman?.toString() ?? "";

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <h2>{isEdit ? "Edit" : "Add"} Crewman</h2>
                    <button className="close" onClick={props.closeModal}>&times;</button>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <FormInput type="text" value={formData.name} name="name" onChange={handleChange} />
                    <FormInput type="text" value={crewman} name="crewman" onChange={handleChange} />
                    <button className="button" id={`${isEdit}-save-button`}>Save</button>
                </form>
            </div>
        </div>
    );
}