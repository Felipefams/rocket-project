
export function FormInput(props: {
    type: string,
    value?: string | undefined,
    name: string,
    checked?: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {

    const title = props.name.charAt(0).toUpperCase() + props.name.slice(1);
    const checkedExists = (props.checked == undefined) ? false : true;
    const inputOrCheckbox = checkedExists ? "checkbox" : "form-input-field";
    return (
        <div className="form-group">
            <label htmlFor="name-input">{title}</label>
            <input
                type={props.type}
                className={inputOrCheckbox}
                placeholder={props.name}
                name={props.name}
                {...checkedExists && { checked: props.checked }}
                {...!checkedExists && { value: props.value }}
                onChange={props.onChange}
            />
        </div>
    );
}