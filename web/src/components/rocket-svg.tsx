export const RocketSVG = (props: {fill: string, className: string}) => (
    <svg
        fill={props.fill}
        data-testid="rocket-svg"
        stroke="#747474"
        strokeWidth={1}
        viewBox="0 0 24 24"
        id="rocket"
        data-name="Flat Line"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
        // {...props}
    >
        <path
            id="secondary"
            d="M15.87,18C16.74,8,14,4.36,12.65,3.24a1,1,0,0,0-1.3,0C10,4.36,7.26,8,8.13,18Z"
            style={{
                fill: props.fill,
            }}
        />
        <path
            id="primary"
            d="M15.87,11A5.89,5.89,0,0,1,20,17H16"
            style={{
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            id="primary-2"
            data-name="primary"
            d="M8.13,11A5.89,5.89,0,0,0,4,17H8"
            style={{
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
        <path
            id="primary-3"
            data-name="primary"
            d="M15,20V18H9v2a1,1,0,0,0,1,1h4A1,1,0,0,0,15,20Zm.87-2C16.74,8,14,4.36,12.65,3.24a1,1,0,0,0-1.3,0C10,4.36,7.26,8,8.13,18Z"
            style={{
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        />
    </svg>
);
