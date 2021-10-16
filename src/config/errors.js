class ApiError extends Error {
  constructor({ message, code }) {
    super(message)
    this.message = message
    this.code = code
  }
}

export class StaffNotFoundError extends ApiError {
  constructor() {
    super({ message: 'Staff not found', code: 'E001' })
  }
}
