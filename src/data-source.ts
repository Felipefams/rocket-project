import { DataSource, DriverOptionNotSetError } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "rocket-plank.postgres.database.azure.com",
    port: 5432,
    username: "felipe",
    password: "Teste123@",
    database: "rocket-project",
    ssl:true,
    entities: [__dirname + "/model/*.ts"],
    migrations: [__dirname + '/database/migrations/*.ts'],
})

/*
const getDatasource = async () =>
    await AppDataSource.initialize()
    .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
*/

export default AppDataSource;