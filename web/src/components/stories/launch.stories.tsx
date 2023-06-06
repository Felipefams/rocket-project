import { BrowserRouter as Router } from "react-router-dom";
import "../../assets/css/tailwind.css"

import { Meta, StoryFn } from "@storybook/react";
import { LaunchTable } from "../table/launchTable";
import { JSX } from "react/jsx-runtime";

const Template: StoryFn = (args: JSX.IntrinsicAttributes) => <LaunchTable data={[
    {
        id: 1,
        launchCode: 2993,
        date: "2021-01-01",
        crew: 1,
        rocket: 1,
        success: true
    },
]} {...args} />;

export default {
    title: "Components/LaunchTable",
    component: LaunchTable,
    decorators: [
        (Story: any) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
} as Meta;

export const Default = Template.bind({});