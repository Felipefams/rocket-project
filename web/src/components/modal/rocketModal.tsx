import React, { useContext } from "react";
import { updateRocket, createRocket } from "../../api/rocketApi";
import { Rocket } from "../../interfaces/rocket";
import { FormInput } from "../form/formInput";
import { DataContext } from "../contexts/dataContext";
import { useTranslation } from "react-i18next";

export function RocketModal(props: { closeModal: () => void, keys: string[], object: Rocket, isEditModal: boolean }) {
    const [formData, setFormData] = React.useState<Rocket>(props.object);
    const { changeData } = useContext(DataContext);
    const { t } = useTranslation();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const isEdit = props.isEditModal ? t("edit") : t("add");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (props.isEditModal) await updateRocket(formData);
        else await createRocket(formData);
        changeData();
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <h2>{isEdit} {t("rockets")}</h2>
                    <button className="close" onClick={props.closeModal}>&times;</button>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <FormInput type="text" value={formData.name} name="name" onChange={handleChange} />
                    <button className="button" id={`${props.isEditModal ? "edit" : "add"}-save-button`}>Save</button>
                </form>

            </div>
        </div>
    );
}