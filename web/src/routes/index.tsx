import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Table } from "../components/table";
import { Crew } from "../interfaces/crew";
import { Launch } from "../interfaces/launch";
import { Crewman } from "../interfaces/crewman";
import { Rocket } from "../interfaces/rocket";
import { Crudable } from "../types";


export function CrewComponent(props: { object: Crew[] }) {
  const keys: string[] = Object.keys(props.object[0]);

  return (
    <>
      <Table data={props.object} name={"Crew!"} keys={keys} instance="crew"/>
    </>
  )
}

export function RocketComponent(props: { object: Rocket[] }) {
  const keys: string[] = Object.keys(props.object[0]);

  return (
    <>
      <Table data={props.object} name={"Rocket!"} keys={keys} instance="rocket"/>
    </>
  )
}

export function CrewmanComponent(props: { object: Crewman[] }) {
  const keys: string[] = Object.keys(props.object[0]);

  return (
    <>
      <Table data={props.object} name={"Crewman!"} keys={keys} instance="crewman"/>
    </>
  )
}
export function LaunchComponent(props: { object: Launch[] }) {
  const keys: string[] = Object.keys(props.object[0]);

  return (
    <>
      <Table data={props.object} name={"Launch!"} keys={keys} instance="launch"/>
    </>
  )
}

// export function GenericComponent<T extends Crudable>(props: {object: T}){//Crewman[]}){
//   const keys: string[] = Object.keys(props.object[0]);

// }