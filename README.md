# 🚀 Rocket System

<div align="left">
    <img src="https://img.shields.io/badge/lingo-typescript-blue">
    <img src="https://img.shields.io/badge/platform-react-brightgreen">
    <img src="https://img.shields.io/badge/check-jest+cypress-red">
    <img src="https://img.shields.io/badge/check-storybook-purple">
</div>

---

## Plank Fellowship Program's Initiation Quest

The Rocket Launch Control System is a brainchild crafted during the Plank Fellowship Program to mimic the supervision and administration of rocket liftoffs. Its purpose is to facilitate the handling of rockets, launches, crews, and crew members. This remarkable system endeavors to simulate the myriad aspects entailed in the preparation and execution of a rocket launch.

## Functions

The rocket launch control system boasts the following array of functions:

1. **Rocket Oversight:** The system empowers you to forge, modify, and obliterate rocket specifics. Keep tabs on vital intel, such as the rocket's designation.

2. **Creman Oversight:** This system equips you to construct and curate a compendium of crew members. Store noteworthy details, such as their names and patents. Crew members can be assigned to various crews for designated launches.

3. **Crew Oversight:** The system empowers you to conceive and govern crews designated for specific launches. Each crew can encompass multiple crew members, with their roles and responsibilities precisely defined.

4. **Launch Oversight:** With this system, you can record and administer rocket launches. Establish the launch date, rocket, crew, and launch status.

## Usage

To leverage the Rocket Launch Control System, kindly adhere to the subsequent steps:

1. Clone the repository:

	```shell
	$ git clone https://github.com/felipesilva-plank/rocket-project
	```

2. Navigate to the project directory:

	```shell
	$ cd rocket-project
	```

3. Install the backend project dependencies:

	```shell
	$ npm install
	```
4. Install the frontend project dependencies
    ```shell
	cd web
    npm install
	```   

5. Launch both the frontend and backend development server:

	```shell
	$ npm run dev && cd .. npm run dev
	```
    or 

    Launch the backend server
	```shell
	$ cd .. 
    $ npm run dev
	```
    then

    Launch the frontend server
	```shell
    $ cd web
	$ npm run dev
	```

6. Access the application in your browser at whatever port `vite` shows in your terminal (most likely it will be[`http://localhost:5173`](http://localhost:5173)).

7. Employ the provided interface to interact with the Rocket Launch Control System. Create rockets, schedule launches, manage crews, and assign crew members to rockets and launches.

## Available Scripts

### Frontend Scripts

The following scripts are available for frontend development:

- `build`: Compile the frontend project to a production-ready state by transpiling TypeScript files and building with Vite.

- `dev`: Initiate the frontend development server using Vite.

- `lint`: Enforce code quality standards by running ESLint on the frontend source code files with support for TypeScript files.

- `preview`: Preview the production build of the frontend application using Vite.

- `test`: Execute frontend tests using Jest in watch mode, without caching, running all tests in a single process, and generating coverage reports.

- `cy:open`: Open the Cypress test runner for interactive frontend test execution.

- `storybook`: Launch the Storybook development server on port 6006 for frontend component development and testing.

- `build-storybook`:

 Build the Storybook project for static deployment.

### Backend Scripts

The following scripts are available for backend development:

- `start`: Start the backend server using JSON Server and watch the `db.json` file.

- `dev`: Start the backend server in development mode using `ts-node-dev` for automatic restarts on file changes and transpiling TypeScript.

- `build`: Compile the backend TypeScript code to JavaScript using `tsc`.

- `typeorm`: Run TypeORM CLI commands using `ts-node-dev`.

- `test`: Execute backend tests using Jest in watch mode, without caching, running all tests in a single process, and generating coverage reports.

The Rocket Launch Control System serves as a fundamental framework for simulating the supervision and administration of rocket launches. It can be expanded upon and tailored to meet specific requirements, seamlessly integrating with other systems. Wishing you euphoric rocket liftoffs!