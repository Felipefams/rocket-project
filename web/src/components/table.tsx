import { Crudable } from "../types";
import { AddButton, DeleteButton, EditButton } from "./tableButtons";


// function THead(props: { fields: string[] }) {

//     function buildTableHead() {
//         const elements = props.fields.map((element, index) => <th key={index}>{element}</th>);
//         elements.push(<th key='unique'></th>);
//         return elements;
//     }

//     return (
//         <thead>
//             <tr>
//                 {buildTableHead()}
//             </tr>
//         </thead>
//     )
// }

function TBody(props: { object: Crudable }) {

    function buildTableData() {
        const elements = props.object.map((element, i) => {
            const values = Object.values(element).map((value, j) => <td key={j}>{value}</td>);
            return (
                <tr key={i}>
                    {values}
                    <td className="td-button">
                        <EditButton />
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

export function Table(props: any) {

    const keys = Object.keys(props.data[0]);
    return (

        <div id="wrap-table-and-button">
            <div className="table-div">
                <table className="main-table">
                    <caption className="table-title">{props.name}</caption>
                    <thead>
                        <tr>
                            {keys.map((item, index) => <th key={index}>{item}</th>)}
                            <th></th>
                        </tr>
                    </thead>
                    <TBody object={props.data} />
                </table>
            </div>
            <AddButton />
        </div>
    )
}