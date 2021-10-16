import Sequelize from 'sequelize'
import db from './../config/db.js'

class Staff extends Sequelize.Model {}

Staff.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    uuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
    },
    firstName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: Sequelize.DataTypes.STRING,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
    },
    phone: {
      type: Sequelize.DataTypes.STRING,
    },
    address: {
      type: Sequelize.DataTypes.STRING,
    },
    data: {
      type: Sequelize.DataTypes.JSON,
    },
  },
  {
    sequelize: db,
    modelName: 'Staff',
    paranoid: true,
  }
)

export default Staff
