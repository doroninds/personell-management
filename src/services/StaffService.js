import Sequelize from 'sequelize'
import { DEFAULT_DB_LIMIT } from '../config/constants.js'
import { StaffNotFoundError } from '../config/errors.js'
import './../models/Staff.js'

const Op = Sequelize.Op

export default class StaffService {
  constructor({ db }) {
    this.model = db.model('Staff')
  }

  async findAndCountAll(query) {
    const { search, limit: _limit, offset: _offset, ...params } = query

    let where = { ...params }

    if (search) {
      const searchWhere = this._searchFilter(search)
      where = searchWhere
    }

    const limit = _limit || DEFAULT_DB_LIMIT
    const offset = _offset || 0

    return this.model.findAndCountAll({ where, limit, offset })
  }

  async create(data) {
    return this.model.create(data)
  }

  async get(id) {
    const staff = await this.model.findByPk(id)
    console.log('staff', staff)
    if (!staff) {
      console.log('here')
      throw new StaffNotFoundError()
    }
    return staff
  }

  async update(id, data) {
    const staff = await this.get(id)
    return staff.update(data)
  }

  async delete(id) {
    const staff = await this.get(id)
    await staff.destroy()
    return staff
  }

  _searchFilter(search) {
    const where = {
      [Op.or]: {
        firstName: { [Op.like]: '%' + search + '%' },
        lastName: { [Op.like]: '%' + search + '%' },
        middleName: { [Op.like]: '%' + search + '%' },
        email: { [Op.like]: '%' + search + '%' },
        phone: { [Op.like]: '%' + search + '%' },
        address: { [Op.like]: '%' + search + '%' },
      },
    }

    return where
  }
}
