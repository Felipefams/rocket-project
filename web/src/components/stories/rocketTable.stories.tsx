import { BrowserRouter as Router } from "react-router-dom";
import "../../assets/css/tailwind.css"

import { Meta, StoryFn } from "@storybook/react";
import { RocketTable } from "../table/rocketTable";
import { JSX } from "react/jsx-runtime";
import { RocketModal } from "../modal/rocketModal";
import { object } from "prop-types";
import { Rocket } from "../../interfaces/rocket";

const rocketObj = {
    id: 1,
    name: "Falcon 1",
};

export const Default: StoryFn = (args) => {

    return <RocketTable data={[
        rocketObj
    ]} {...args} />;
}

export default {
    title: "Components/RocketTable",
    component: RocketTable,
    decorators: [
        (Story: any) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
} as Meta;

// export const Default = Template.bind({});

export const AddModal: StoryFn = (args: JSX.IntrinsicAttributes) => <RocketModal
    keys={["id", "name"]} object={rocketObj} closeModal={() => null}
    isEditModal={false}
    {...args}
/>;

export const EditModal: StoryFn = (args: JSX.IntrinsicAttributes) => <RocketModal

    keys={["id", "name"]} object={rocketObj} closeModal={() => null}
    isEditModal={true}
    {...args}
/>;
