import CollectPoint from '#models/collect_point'
import type { HttpContext } from '@adonisjs/core/http'

export default class CollectPointsController {
  /**
   * Display a list of resource
   */
  async index({ }: HttpContext) {
    const collectPoints = CollectPoint.query()
    console.log(collectPoints);
    return await collectPoints
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
  

  async destroy({ params }: HttpContext) {
    const collectPoint = await CollectPoint.findOrFail(params.id)
    await collectPoint.delete()
    return {
      message: 'Record deleted'
    }
  }
}