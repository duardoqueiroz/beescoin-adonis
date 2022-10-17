import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import StoreValidator from 'App/Validators/User/StoreValidator'

export default class UsersController {
  public async store({ request, auth, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const user = await User.create(data)
    await auth.login(user)

    return response.redirect('/')
  }
}
