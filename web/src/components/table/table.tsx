import { ReactNode } from "react";
import { Crudable } from "../../types";
import { AddButton, DeleteButton, EditButton } from "../tableButtons";
import { CrewModal, CrewmanModal, LaunchModal, RocketModal } from "../modal";
import { useModal } from "../hooks/useModal";
import { Rocket } from "../../interfaces/rocket";
import { Crew } from "../../interfaces/crew";
import { Crewman } from "../../interfaces/crewman";
import { Launch } from "../../interfaces/launch";

function TBody(props: {
    object: Crudable,
    type: string,
    handle: () => void,
    setModalNumber: (id: number) => void,
    setIsEdit: (isEdit: boolean) => void
}) {
    function buildTableData() {
        const elements = props.object.map((element, i) => {
            const values = Object.values(element).map((value, j) => <td key={j}>{value as ReactNode}</td>);
            return (
                <tr key={i}>
                    {values}
                    <td className="td-button">
                        <EditButton id={i} handle={props.handle} setModalNumber={props.setModalNumber} setIsEdit={props.setIsEdit} />
                        <DeleteButton id={element.id ?? -1} type={props.type} />
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

function THead(props: { keys: string[] }) {
    return (
        <thead>
            <tr>
                {props.keys.map((item, index) => <th key={index}>{item}</th>)}
                <th></th>
            </tr>
        </thead>
    );
}

export function Table(props: { name: string, handle: () => void, children: ReactNode, setIsEdit: (isEdit: boolean) => void }) {
    return (
        <div id="wrap-table-and-button">
            <div className="table-div">
                <table className="main-table">
                    <caption className="table-title">{props.name}</caption>
                    {props.children}
                </table>
            </div>
            <AddButton handle={props.handle} setIsEdit={props.setIsEdit} />
        </div>
    );
}

export function CrewTable(props: { data: Crew[] }) {
    const { isOpen: isModalOpen, openModal, closeModal, currentModal, setModalNumber, setEditModal, isEditModal } = useModal();

    const keys = Object.keys(props.data[0]);
    const data = isEditModal ? props.data[currentModal] : {};
    return (
        <>
            <Table handle={openModal} name={"Crew!"} setIsEdit={setEditModal}>
                <THead keys={keys} />
                <TBody type="crew" object={props.data} handle={openModal} setModalNumber={setModalNumber} setIsEdit={setEditModal} />
            </Table>
            {isModalOpen && <CrewModal closeModal={closeModal} keys={keys} object={data} isEditModal={isEditModal} />}
        </>
    );
}
export function RocketTable(props: { data: Rocket[] }) {
    const { isOpen: isModalOpen, openModal, closeModal, currentModal, setModalNumber, setEditModal, isEditModal } = useModal();

    const keys = Object.keys(props.data[0]);
    const data = isEditModal ? props.data[currentModal] : {};
    return (
        <>
            <Table handle={openModal} name={"Rocket!"} setIsEdit={setEditModal}>
                <THead keys={keys} />
                <TBody type="rocket" object={props.data} handle={openModal} setModalNumber={setModalNumber} setIsEdit={setEditModal} />
            </Table>
            {isModalOpen && <RocketModal closeModal={closeModal} keys={keys} object={data} isEditModal={isEditModal} />}
        </>
    );
}
export function CrewmanTable(props: { data: Crewman[] }) {
    const { isOpen: isModalOpen, openModal, closeModal, currentModal, setModalNumber, setEditModal, isEditModal } = useModal();

    const keys = Object.keys(props.data[0]);
    const data = isEditModal ? props.data[currentModal] : {};
    return (
        <>
            <Table handle={openModal} name={"Crewman!"} setIsEdit={setEditModal}>
                <THead keys={keys} />
                <TBody type="crewman" object={props.data} handle={openModal} setModalNumber={setModalNumber} setIsEdit={setEditModal} />
            </Table>
            {isModalOpen && <CrewmanModal closeModal={closeModal} keys={keys} object={data} isEditModal={isEditModal} />}
        </>
    );
}

export function LaunchTable(props: { data: Launch[] }) {
    const { isOpen: isModalOpen, openModal, closeModal, currentModal, setModalNumber, setEditModal, isEditModal } = useModal();

    const keys = Object.keys(props.data[0]);
    const data = isEditModal ? props.data[currentModal] : {};
    return (
        <>
            <Table handle={openModal} name={"Launch!"} setIsEdit={setEditModal}>
                <THead keys={keys} />
                <TBody type="launch" object={props.data} handle={openModal} setModalNumber={setModalNumber} setIsEdit={setEditModal} />
            </Table>
            {isModalOpen && <LaunchModal closeModal={closeModal} keys={keys} object={data} isEditModal={isEditModal} />}
        </>
    );
}