import { useTranslation } from "react-i18next";
import { Crew } from "../../interfaces/crew";
import { useModal } from "../hooks/useModal";
import { CrewModal } from "../modal/crewModal";
import { TBody, THead, Table } from "./table";

export function CrewTable(props: { data: Crew[] }) {
    const { isOpen: isModalOpen, openModal, closeModal, currentModal, setModalNumber, setEditModal, isEditModal } = useModal();
    const { t } = useTranslation();

    const keys = Object.keys(props.data[0]);
    const data = isEditModal ? props.data[currentModal] : {};

    if (isModalOpen) {
        document.querySelector("html")?.style.setProperty("overflow", "hidden");
    } else {
        document.querySelector("html")?.style.setProperty("overflow", "auto");
    }
    return (
        <>
            <Table handle={openModal} name={t("crews") + '!'} setIsEdit={setEditModal}>
                <THead keys={keys} />
                <TBody type="crew" object={props.data} handle={openModal} setModalNumber={setModalNumber} setIsEdit={setEditModal} />
            </Table>
            {isModalOpen && <CrewModal closeModal={closeModal} keys={keys} object={data} isEditModal={isEditModal} />}
        </>
    );
}