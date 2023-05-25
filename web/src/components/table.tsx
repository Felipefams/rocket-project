import { ReactNode } from "react";
import { Crudable } from "../types";
import { AddButton, DeleteButton, EditButton } from "./tableButtons";
import { CrewModal, CrewmanModal, LaunchModal, RocketModal } from "./modal";
import { useModal } from "./hooks/useModal";
import { Rocket } from "../interfaces/rocket";
import { Crew } from "../interfaces/crew";
import { Crewman } from "../interfaces/crewman";
import { Launch } from "../interfaces/launch";

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

export function Table(props: { name: string, handle: () => void, children: ReactNode }) {
    return (
        <div id="wrap-table-and-button">
            <div className="table-div">
                <table className="main-table">
                    <caption className="table-title">{props.name}</caption>
                    {props.children}
                </table>
            </div>
            <AddButton handle={props.handle} />
        </div>
    );
}

export function RocketTable(props: { data: Rocket[] }) {
    const { isOpen: isAddModalOpen, openModal: openAddModal, closeModal: closeAddModal, currentModal } = useModal();
    const { isOpen: isEditModalOpen, openModal: openEditModal, closeModal: closeEditModal, setModalNumber } = useModal();

    const keys = Object.keys(props.data[0]);

    return (
        <>
            <Table handle={openAddModal} name={"Rocket!"}>
                <THead keys={keys} />
                <TBody object={props.data} handle={openEditModal} setModalNumber={setModalNumber} />
            </Table>
            {isAddModalOpen && <RocketModal closeModal={closeAddModal} keys={keys} object={{}} isEditModal={false} />}
            {isEditModalOpen && <RocketModal closeModal={closeEditModal} keys={keys} object={props.data[currentModal]} isEditModal={true} />}
        </>
    );
}
export function CrewTable(props: { data: Crew[] }) {
    const { isOpen: isAddModalOpen, openModal: openAddModal, closeModal: closeAddModal, currentModal } = useModal();
    const { isOpen: isEditModalOpen, openModal: openEditModal, closeModal: closeEditModal, setModalNumber } = useModal();

    const keys = Object.keys(props.data[0]);

    return (
        <>
            <Table handle={openAddModal} name={"Crew!"}>
                <THead keys={keys} />
                <TBody object={props.data} handle={openEditModal} setModalNumber={setModalNumber} />
            </Table>
            {isAddModalOpen && <CrewModal closeModal={closeAddModal} keys={keys} object={{}} isEditModal={false} />}
            {isEditModalOpen && <CrewModal closeModal={closeEditModal} keys={keys} object={props.data[currentModal]} isEditModal={true} />}
        </>
    );
}

export function CrewmanTable(props: { data: Crewman[] }) {
    const { isOpen: isAddModalOpen, openModal: openAddModal, closeModal: closeAddModal, currentModal } = useModal();
    const { isOpen: isEditModalOpen, openModal: openEditModal, closeModal: closeEditModal, setModalNumber } = useModal();

    const keys = Object.keys(props.data[0]);

    return (
        <>
            <Table handle={openAddModal} name={"Crewman!"}>
                <THead keys={keys} />
                <TBody object={props.data} handle={openEditModal} setModalNumber={setModalNumber} />
            </Table>
            {isAddModalOpen && <CrewmanModal closeModal={closeAddModal} keys={keys} object={{}} isEditModal={false} />}
            {isEditModalOpen && <CrewmanModal closeModal={closeEditModal} keys={keys} object={props.data[currentModal]} isEditModal={true} />}
        </>
    );

}
export function LaunchTable(props: { data: Launch[] }) {
    const { isOpen: isAddModalOpen, openModal: openAddModal, closeModal: closeAddModal, currentModal } = useModal();
    const { isOpen: isEditModalOpen, openModal: openEditModal, closeModal: closeEditModal, setModalNumber } = useModal();

    const keys = Object.keys(props.data[0]);

    return (
        <>
            <Table handle={openAddModal} name={"Launch!"}>
                <THead keys={keys} />
                <TBody object={props.data} handle={openEditModal} setModalNumber={setModalNumber} />
            </Table>
            {isAddModalOpen && <LaunchModal closeModal={closeAddModal} keys={keys} object={{}} isEditModal={false} />}
            {isEditModalOpen && <LaunchModal closeModal={closeEditModal} keys={keys} object={props.data[currentModal]} isEditModal={true} />}
        </>
    );
}