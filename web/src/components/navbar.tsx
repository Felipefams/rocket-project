import React from "react";
import { colors, darkHover, mdDarkHover, mdHover } from "../assets/colors";
import { RocketSVG } from "./rocket-svg";
import { Link, useLocation } from "react-router-dom";

//todo change a tag to Link
function NavItem(props: { text: string, color: string }) {
    return (
        <li>
            <Link to={props.text.toLowerCase()} className={`block py-2 pl-3 pr-4 text-gray-900 
                            rounded hover:bg-myBlack md:hover:bg-myBlack md:border-0 
                            ${mdHover[props.color]} md:p-0 dark:text-myIvory 
                            ${mdDarkHover[props.color]} dark:hover:bg-myLightGray
                            ${darkHover[props.color]} md:dark:hover:bg-transparent`}>
                {props.text}
            </Link>
        </li>
    )
}

function getPathColor(path: string): string {
    if (path === "/rockets") return colors["myRed"];
    else if (path == "/crewman") return colors["myPink"];
    else if (path === "/crews") return colors["myOrange"];
    else if (path === "/launchs") return colors["myBlue"];

    return colors["myIvory"];
}

export function Navbar() {
    const [on, setOn] = React.useState(true);
    const router = useLocation();
    const color = getPathColor(router.pathname.toString()); 

    function handle() {
        setOn(!on);
    }
    const hidden = on ? "hidden" : "";
    return (
        <nav className="border-gray-200 dark:bg-myBlack">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <RocketSVG fill={color} className="icon flat-line h-10 mr-3}" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Home</span>
                </Link>
                <button onClick={handle} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={`${hidden} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-myBlack md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-myBlack md:dark:bg-inherit dark:border-myIvory">
                        <NavItem text="Rockets" color="myRed" />
                        <NavItem text="Crewman" color="myPink" />
                        <NavItem text="Crews" color="myOrange" />
                        <NavItem text="Launchs" color="myBlue" />
                    </ul>
                </div>
            </div>
        </nav>

    )
}