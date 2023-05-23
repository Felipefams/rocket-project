import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Table } from "../components/table";
import { Crew } from "../interfaces/crew";
import { Launch } from "../interfaces/launch";
import { Crewman } from "../interfaces/crewman";
import { Rocket } from "../interfaces/rocket";
import { Crudable } from "../types";


export function CrewComponent(props: {object: Crew[]}){
  return(
    <>
    <Table data={props.object} name={"Crew!"}/>
    </>
  )
}

export function RocketComponent(props: {object: Rocket[]}){
  return(
    <>
    <Table data={props.object} name={"Rocket!"}/>
    </>
  )
}

export function CrewmanComponent(props: {object: Crewman[]}){
  return(
    <>
    <Table data={props.object} name={"Crewman!"}/>
    </>
  )
}
export function LaunchComponent(props: {object: Launch[]}){
  return(
    <>
    <Table data={props.object} name={"Launch!"}/>
    </>
  )
}