export default class StaffController {
  async find(ctx) {
    ctx.body = await ctx.services.staff.findAndCountAll(ctx.query)
  }

  async create(ctx) {
    ctx.body = await ctx.services.staff.create(ctx.request.body)
  }

  async get(ctx) {
    ctx.body = await ctx.services.staff.get(ctx.params.id)
  }

  async update(ctx) {
    ctx.body = await ctx.services.staff.update(ctx.params.id, ctx.request.body)
  }

  async delete(ctx) {
    ctx.body = await ctx.services.staff.delete(ctx.params.id)
  }
}
