import React from "react";
import "../assets/css/modal.css";
import { Rocket } from "../interfaces/rocket";
import { Crewman } from "../interfaces/crewman";

function FormInput(props: {
    type: string,
    value: string | undefined,
    name: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
    const title = props.name.charAt(0).toUpperCase() + props.name.slice(1);
    return (
        <div className="form-group">
            <label htmlFor="name-input">{title}</label>
            <input type={props.type} className="form-input-field" placeholder={props.name} name={props.name} value={props.value} onChange={props.onChange} />
        </div>
    );
}

export function Modal() {

    function saveInfo() {
        console.log("saveInfo");
    }
    return (
        <div id="edit-modal" className="modal">
            <div className="modal-content">
                <div style={{ display: "flex" }}>
                    <h2>Edit Launch</h2>
                    <button className="close">&times;</button>
                </div>
                <form id="edit-form">
                    <div className="form-group">
                        <label className="edit-form-label" htmlFor="launchcode-input">launchCode</label>
                        <input type="text" className="form-input-field" id="launchcode-input" placeholder="launchcode"></input>
                    </div>
                    <div className="form-group">
                        <label className="edit-form-label" htmlFor="date-input">Date</label>
                        <input type="date" className="form-input-field" id="date-input" placeholder="Date"></input>
                    </div>
                    <div className="form-group">
                        <label className="edit-form-label" htmlFor="rocket-input">Rocket</label>
                        <input type="text" className="form-input-field" id="rocket-input" placeholder="Rocket"></input>
                    </div>
                    <div className="form-group">
                        <label className="edit-form-label" htmlFor="crew-input">Crew</label>
                        <input type="text" className="form-input-field" id="crew-input" placeholder="Crew"></input>
                    </div>
                    <div className="form-group">
                        <label className="edit-form-label" htmlFor="success-input">Success</label>
                        <input type="checkbox" className="form-input-field" id="success-input" placeholder="Success"></input>
                    </div>
                    <button type="submit" className="button" id="edit-save-button" onClick={saveInfo}>Save</button>
                </form>

            </div>
        </div>
    );
}

export function RocketModal(props: { closeModal: () => void, keys: string[], object: Rocket, isEditModal: boolean }) {
    const [formData, setFormData] = React.useState<Rocket>(props.object);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    console.log(formData);

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

export function CrewmanModal(props: { closeModal: () => void, keys: string[], object: Crewman }) {
    const [formData, setFormData] = React.useState<Crewman>(props.object);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(formData);
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <h2>Add Crewman</h2>
                    <button className="close" onClick={props.closeModal}>&times;</button>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <FormInput type="text" value={formData.name} name="name" onChange={handleChange} />
                    <FormInput type="text" value={formData.patent} name="patent" onChange={handleChange} />
                    <button className="button" id="edit-save-button">Save</button>
                </form>
            </div>
        </div>
    );
}

export function LaunchModal(props: { closeModal: () => void, keys: string[], object: Crewman }) {
    const [formData, setFormData] = React.useState<Crewman>(props.object);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(formData);
    }
 
}