// import { CrewTable, CrewmanTable, LaunchTable, RocketTable } from "../components/table/table";
import { Crew } from "../interfaces/crew";
import { Launch } from "../interfaces/launch";
import { Crewman } from "../interfaces/crewman";
import { Rocket } from "../interfaces/rocket";
import { useContext, useEffect, useState } from "react";
import { getAllCrew } from "../api/crewApi";
import { getAllCrewman } from "../api/crewmanApi";
import { getAllRockets } from "../api/rocketApi";
import { getAllLaunch } from "../api/launchApi";
import { CrewTable } from "../components/table/crewTable";
import { CrewmanTable } from "../components/table/crewmanTable";
import { LaunchTable } from "../components/table/launchTable";
import { RocketTable } from "../components/table/rocketTable";
import { DataContext } from "../components/contexts/dataContext";

export function HomeComponent() {
  return (
    <div id="home-div">
      <h1 id="home-text">Your Best Rocket Launching Platform!</h1>
      {/* <img src="../assets/images/loading200px.gif" alt="" /> */}
    </div>
  );
}

export function CrewComponent() {

  const [data, setData] = useState<Crew[]>([]);
  const { dataChanged } = useContext(DataContext);

  useEffect(() => {
    getAllCrew()
      .then(data => setData(data ?? []));
  }, [dataChanged]); // Empty dependency array to ensure the effect runs only once

  if (!data || data.length === 0) {
    return <div>Loading...</div>; // Render a loading state if data is not available yet
  }

  return (
    <>
      <CrewTable data={data} />
    </>
  )
}

export function RocketComponent() {
  const [data, setData] = useState<Rocket[]>([]);
  const { dataChanged } = useContext(DataContext);

  useEffect(() => {
    getAllRockets()
      .then(data => setData(data ?? []));
  }, [dataChanged]); // Empty dependency array to ensure the effect runs only once

  if (!data || data.length === 0) {
    return <div>Loading...</div>; // Render a loading state if data is not available yet
  }

  return (
    <>
      <RocketTable data={data} />
    </>
  )
}

export function CrewmanComponent() {
  const [data, setData] = useState<Crewman[]>([]);
  const { dataChanged } = useContext(DataContext);

  useEffect(() => {
    getAllCrewman()
      .then(data => setData(data ?? []));
  }, [dataChanged]); // Empty dependency array to ensure the effect runs only once

  if (!data || data.length === 0) {
    return <div>Loading...</div>; // Render a loading state if data is not available yet
  }
  return (
    <>
      <CrewmanTable data={data} />
    </>
  )
}

export function LaunchComponent() {
  const [data, setData] = useState<Launch[]>([]);
  const { dataChanged } = useContext(DataContext);

  useEffect(() => {
    getAllLaunch()
      .then(data => setData(data ?? []));
  }, [dataChanged]); // Empty dependency array to ensure the effect runs only once

  if (!data || data.length === 0) {
    return <div>Loading...</div>; // Render a loading state if data is not available yet
  }

  return (
    <>
      <LaunchTable data={data} />
    </>
  )
}