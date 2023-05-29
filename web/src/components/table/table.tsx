import { ReactNode } from "react";
import { Crudable } from "../../types";
import { AddButton, DeleteButton, EditButton } from "../tableButtons";

export function TBody(props: {
    object: Crudable,
    type: string,
    handle: () => void,
    setModalNumber: (id: number) => void,
    setIsEdit: (isEdit: boolean) => void
}) {
    function buildTableData() {
        const elements = props.object.map((element, i) => {
            const values = Object.values(element).map((value, j) => {
                if (value === true) value = "yes";
                else if (value === false) value = "no";

                return (
                    <td key={j}>{value as ReactNode}
                    </td>
                );
            });
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

export function THead(props: { keys: string[] }) {
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
