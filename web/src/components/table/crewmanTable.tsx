import { useTranslation } from "react-i18next";
import { Crewman } from "../../interfaces/crewman";
import { useModal } from "../hooks/useModal";
import { CrewmanModal } from "../modal/crewmanModal";
import { THead, TBody, Table } from "./table";

export function CrewmanTable(props: { data: Crewman[] }) {
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
            <Table handle={openModal} name={t("crewmen") + '!'} setIsEdit={setEditModal}>
                <THead keys={keys} />
                <TBody type="crewman" object={props.data} handle={openModal} setModalNumber={setModalNumber} setIsEdit={setEditModal} />
            </Table>
            {isModalOpen && <CrewmanModal closeModal={closeModal} keys={keys} object={data} isEditModal={isEditModal} />}
        </>
    );
}