import StaffService from './StaffService.js'

const services = di => ({
  staff: new StaffService(di),
})

export default services
