import { Sequelize } from 'sequelize'

const db = new Sequelize('sqlite::memory:') // Example for sqlite

db.sync({ force: false })

export default db
