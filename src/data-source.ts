import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "rocket-plank.postgres.database.azure.com",
    port: 5432,
    database: "rocket-project",
    username: "felipe",
    password: "Teste123@",
    // ssl: true, //require_secure_transport OFF
    entities: ["./src/model/*.ts"],
    migrations: ['./src/database/migrations/*.ts'],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource;