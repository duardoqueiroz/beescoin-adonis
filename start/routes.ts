import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => view.render('welcome'))
Route.post('/login', 'SessionsController.store')
Route.get('/logout', 'SessionsController.destroy')
Route.post('/users', 'UsersController.store')
