import React, { ReactNode, useState } from "react";
import { Crudable } from "../types";
import { AddButton, DeleteButton, EditButton } from "./tableButtons";
import { CrewmanModal, RocketModal } from "./modal";
import { Rocket } from "../interfaces/rocket";

function TBody(props: { object: Crudable, handle: () => void, setModalNumber: (id: number) => void }) {

    function buildTableData() {
        const elements = props.object.map((element, i) => {
            const values = Object.values(element).map((value, j) => <td key={j}>{value as ReactNode}</td>);
            return (
                <tr key={i}>
                    {values}
                    <td className="td-button">
                        <EditButton id={i} handle={props.handle} setModalNumber={props.setModalNumber} />
                        <DeleteButton />
                    </td>
                </tr>
            );
        });
        return elements;
    }

    return (
        <tbody>
            {buildTableData()}
        </tbody>
    )
}

export function Table(props: { data: Crudable, name: string, keys: string[], instance: string}) {
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [currentOpenModal, setCurrentOpenModal] = useState<number>(0);

    const setModalNumber = (id: number) => setCurrentOpenModal(id);

    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => setIsAddModalOpen(false);

    const openEditModal = () => setIsEditModalOpen(true);
    const closeEditModal = () => setIsEditModalOpen(false); 

    let ModalType;
    switch(props.instance){
        case "rocket":
            ModalType = RocketModal;
            break;
        case "crew":
            ModalType = CrewModal;
            break;
        case "crewman":
            ModalType = CrewmanModal;
            break;
        case "launch":
            ModalType = LaunchModal;
            break;
    }

    return (
        <>
            <div id="wrap-table-and-button">
                <div className="table-div">
                    <table className="main-table">
                        <caption className="table-title">{props.name}</caption>
                        <thead>
                            <tr>
                                {props.keys.map((item, index) => <th key={index}>{item}</th>)}
                                <th></th>
                            </tr>
                        </thead>
                        <TBody object={props.data} handle={openEditModal} setModalNumber={setModalNumber} />
                    </table>
                </div>
                <AddButton handle={openAddModal} />
            </div>
            {isAddModalOpen && <ModalType closeModal={closeAddModal} keys={props.keys} object={{}} isEditModal={false}/>}
            {isEditModalOpen && <ModalType closeModal={closeEditModal} keys={props.keys} object={props.data[currentOpenModal]} isEditModal={true}/>}
        </>
    )
}

// export function RocketTable(props: { data: Rocket[], keys: string[]}) {

// }