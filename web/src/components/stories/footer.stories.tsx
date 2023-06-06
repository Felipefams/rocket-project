import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "../footer";

const meta = {
    title: "Components/Footer",
    component: Footer,
    args: {
        pageTitle: "rocket-project",
        style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
    },
    decorators: [
        (Story: any) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
    argTypes: {
        pageTitle: {
            control: {
                type: "text",
            },
        },
    },
}


export default meta; 

export const Default = {};