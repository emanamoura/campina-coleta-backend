import CollectPoint from '#models/collect_point'
import type { HttpContext } from '@adonisjs/core/http'

export default class CollectPointsController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    const name = request.qs().name

    // Base query
    const collectPointsQuery = CollectPoint.query()

    // Apply search filter if name is provided
    if (name) {
      collectPointsQuery.where('name', 'like', `%${name}%`)
    }

    // Execute query and return results
    const collectPoints = await collectPointsQuery
    return collectPoints
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const body = request.body()
    return await CollectPoint.create(body)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await CollectPoint.findOrFail(params.id)
  }

  async searchByName({ request }: HttpContext) {
    const name = request.input('name')
    const collectPoints = await CollectPoint.query()
      .where('name', 'like', `%${name}%`)
    return collectPoints
  }
  

  async destroy({ params }: HttpContext) {
    const collectPoint = await CollectPoint.findOrFail(params.id)
    await collectPoint.delete()
    return {
      message: 'Record deleted'
    }
  }
}