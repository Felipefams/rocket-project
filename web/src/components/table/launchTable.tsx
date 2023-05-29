import { Launch } from "../../interfaces/launch";
import { useModal } from "../hooks/useModal";
import { LaunchModal } from "../modal/launchModal";
import { TBody, THead, Table } from "./table";

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