import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    name: schema.string({}, [rules.required(), rules.maxLength(50)]),
    password: schema.string({}, [
      rules.required(),
      rules.regex(/^(?=.*[0-9])(?=.*[a-zA-z])([a-zA-Z0-9]{8,})$/),
    ]),
  })

  public messages: CustomMessages = {
    'name.required': 'É necessário informar o nome de usuário!',
    'name.maxLength': 'Quantidade máxima de caracteres atingida!',
    'email.required': 'É necessário informar o email!',
    'email.email': 'Formato de email inválido!',
    'email.unique': 'Este email já está sendo usado!',
    'password.required': 'É necessário informar a senha!',
    'password.regex': 'A senha precisa ter no mínimo 8 caracteres, letras e números!',
  }
}
