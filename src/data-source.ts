import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgres://qjmzkgws:ek47uHQvWuzHxoKk_R85_cS1Ha80Q5yr@isilo.db.elephantsql.com/qjmzkgws",
    migrations: ['./**/database/migrations/*.{ts,js}'],
    entities: ["./**/model/*.{ts,js}"],
})

export default AppDataSource;