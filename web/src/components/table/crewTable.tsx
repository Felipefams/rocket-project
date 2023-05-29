import { Crew } from "../../interfaces/crew";
import { useModal } from "../hooks/useModal";
import { CrewModal } from "../modal/crewModal";
import { TBody, THead, Table } from "./table";

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