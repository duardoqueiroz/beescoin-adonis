import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const rememberMeToken = true

    await auth.use('web').attempt(email, password, rememberMeToken)
    return response.redirect('/')
  }

  public async destroy({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.redirect('/login')
  }
}
