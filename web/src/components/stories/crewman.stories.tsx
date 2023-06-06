import { BrowserRouter as Router } from "react-router-dom";
import "../../assets/css/tailwind.css"
import { Meta, StoryFn } from "@storybook/react";
import { CrewmanTable } from "../table/crewmanTable";
import { JSX } from "react/jsx-runtime";

const Template: StoryFn = (args: JSX.IntrinsicAttributes) => <CrewmanTable data={[
    {
        id: 1,
        name: "John Cena",
        patent: "pilot",
    },
]} {...args} />;

export default {
    title: "Components/CrewmanTable",
    component: CrewmanTable,
    decorators: [
        (Story: any) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
} as Meta;

export const Default = Template.bind({});