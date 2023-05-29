import { Rocket } from "../../interfaces/rocket";
import { useModal } from "../hooks/useModal";
import { RocketModal } from "../modal/rocketModal";
import { TBody, THead, Table } from "./table";

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