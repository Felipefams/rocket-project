import { BrowserRouter as Router } from "react-router-dom";
import "../../assets/css/tailwind.css"

import { Meta, StoryFn } from "@storybook/react";
import { CrewTable } from "../table/crewTable";
import { JSX } from "react/jsx-runtime";
import { Crew } from "../../interfaces/crew";
import { CrewModal } from "../modal/crewModal";

const crewObj: Crew = {
    id: 1,
    name: "the super crew",
    crewman: [1, 2, 3]
}

export const Default: StoryFn = (args: JSX.IntrinsicAttributes) => <CrewTable data={[
    crewObj 
]} {...args} />;

export default {
    title: "Components/Crew",
    component: CrewTable,
    decorators: [
        (Story: any) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
} as Meta;

export const AddModal: StoryFn = (args: JSX.IntrinsicAttributes) => <CrewModal
    keys={["id", "name", "crewman"]} object={crewObj} closeModal={() => null}
    isEditModal={false}
    {...args}
/>;

export const EditModal: StoryFn = (args: JSX.IntrinsicAttributes) => <CrewModal

    keys={["id", "name", "crewman"]} object={crewObj} closeModal={() => null}
    isEditModal={true}
    {...args}
/>;