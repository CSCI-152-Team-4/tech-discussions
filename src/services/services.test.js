import AuthService from './Authentication'
import PostService from './Posts'
import MessagesService from './Messages'

//auth
it('logs in users', async () => {
  const res = await AuthService.login("andrewadams3@mail.fresnostate.edu", "test")
  expect(res.status).toBe('success')
})

it('catches incorrect password', async () => {
  const res = await AuthService.login("andrewadams3@mail.fresnostate.edu", "123")
  expect(res.status).toBe('Incorrect Credentials')
})

it('catches account not found on login', async () => {
  const res = await AuthService.login("andrewadams3432@mail.fresnostate.edu", "123")
  expect(res.status).toBe('User Not Found')
})

//posts
it('gets posts', async () => {
  const res = await PostService.getPosts(1)
  expect(res instanceof Array).toBe(true)
  expect(res.length === 1).toBe(true)
  expect(typeof res[0].title === "string").toBe(true)
})

//messages
it('gets friends list', async () => {
  const res = await MessagesService.getFriends("5ea65de93722dad0227f9296")
  expect(res instanceof Array).toBe(true)
})