import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgres://qjmzkgws:ek47uHQvWuzHxoKk_R85_cS1Ha80Q5yr@isilo.db.elephantsql.com/qjmzkgws",
    migrations: ['./**/database/migrations/*.{ts,js}'],
    entities: ["./**/model/*.{ts,js}"],
})
    // type: "postgres",
    // host: "rocket-plank.postgres.database.azure.com",
    // port: 5432,
    // database: "rocket-project",
    // username: "felipe",
    // password: "Teste123@",
    // // ssl: true, //require_secure_transport OFF

export default AppDataSource;