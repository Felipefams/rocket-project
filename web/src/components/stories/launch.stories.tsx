import { BrowserRouter as Router } from "react-router-dom";
import "../../assets/css/tailwind.css"

import { Meta, StoryFn } from "@storybook/react";
import { LaunchTable } from "../table/launchTable";
import { JSX } from "react/jsx-runtime";
import { LaunchModal } from "../modal/launchModal";

const launchObj = {
    id: 1,
    launchCode: 2993,
    date: "2021-01-01",
    crew: 1,
    rocket: 1,
    success: true
}
export const Default: StoryFn = (args: JSX.IntrinsicAttributes) => <LaunchTable data={[
    launchObj
]} {...args} />;

export default {
    title: "Components/Launch",
    component: LaunchTable,
    decorators: [
        (Story: any) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
} as Meta;


export const AddModal: StoryFn = (args: JSX.IntrinsicAttributes) => <LaunchModal
    keys={["id", "name", "crewman"]} object={launchObj} closeModal={() => null}
    isEditModal={false}
    {...args}
/>;

export const EditModal: StoryFn = (args: JSX.IntrinsicAttributes) => <LaunchModal

    keys={["id", "launchCode", "date",
        "crew", "rocket", "success"]} object={launchObj} closeModal={() => null}
    isEditModal={true}
    {...args}
/>;