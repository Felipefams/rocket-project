import { BrowserRouter as Router } from "react-router-dom";
import "../../assets/css/tailwind.css"
import { Meta, StoryFn } from "@storybook/react";
import { CrewmanTable } from "../table/crewmanTable";
import { JSX } from "react/jsx-runtime";
import { Crewman } from "../../interfaces/crewman";
import { CrewmanModal } from "../modal/crewmanModal";

const crewmanObj: Crewman = {
    id: 1,
    name: "John Cena",
    patent: "pilot",
};

export const Default: StoryFn = (args: JSX.IntrinsicAttributes) => <CrewmanTable data={[
    crewmanObj 
]} {...args} />;

export default {
    title: "Components/Crewman",
    component: CrewmanTable,
    decorators: [
        (Story: any) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
} as Meta;

export const AddModal: StoryFn = (args: JSX.IntrinsicAttributes) => <CrewmanModal
    keys={["id", "name", "patent"]} object={crewmanObj} closeModal={() => null}
    isEditModal={false}
    {...args}
/>;

export const EditModal: StoryFn = (args: JSX.IntrinsicAttributes) => <CrewmanModal

    keys={["id", "name", "patent"]} object={crewmanObj} closeModal={() => null}
    isEditModal={true}
    {...args}
/>;
