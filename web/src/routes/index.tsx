import { CrewTable, CrewmanTable, LaunchTable, RocketTable} from "../components/table";
import { Crew } from "../interfaces/crew";
import { Launch } from "../interfaces/launch";
import { Crewman } from "../interfaces/crewman";
import { Rocket } from "../interfaces/rocket";


export function CrewComponent(props: { object: Crew[] }) {
  return (
    <>
      <CrewTable data={props.object}/>
    </>
  )
}

export function RocketComponent(props: { object: Rocket[] }) {
  return (
    <>
      <RocketTable data={props.object} />
    </>
  )
}

export function CrewmanComponent(props: { object: Crewman[] }) {
  return (
    <>
      <CrewmanTable data={props.object}/>
    </>
  )
}
export function LaunchComponent(props: { object: Launch[] }) {
  return (
    <>
      <LaunchTable data={props.object}/>
    </>
  )
}