import Home from '../view/Home'
import Chats from '../view/Chats'
import Profile from '../view/Profile'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chats',
    name: 'Chats',
    component: Chats
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]
