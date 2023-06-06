import { BrowserRouter as Router } from "react-router-dom";
import "../../assets/css/tailwind.css"

import { Meta, StoryFn } from "@storybook/react";
import { Navbar } from "../navbar";
import { JSX } from "react/jsx-runtime";

export default {
    title: "Components/Navbar",
    component: Navbar,
    decorators: [
        (Story: any) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
} as Meta;

const Template: StoryFn = (args: JSX.IntrinsicAttributes) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithCustomColor = Template.bind({});
WithCustomColor.args = {
    color: "myBlue",
};

export const Collapsed = Template.bind({});
Collapsed.args = {
    collapsed: true,
};

export const WithDifferentLinks = Template.bind({});
WithDifferentLinks.args = {
    links: [
        { link: "rockets", text: "Rockets", color: "myRed" },
        { link: "crewmen", text: "Crewmen", color: "myPink" },
        { link: "crews", text: "Crews", color: "myOrange" },
        { link: "launches", text: "Launches", color: "myBlue" },
    ],
};

export const WithTranslations = Template.bind({});
WithTranslations.args = {
    translations: {
        home: "Home",
        rockets: "Rockets",
        crewmen: "Crewmen",
        crews: "Crews",
        launches: "Launches",
    },
};
