import Home from '../view/Home'
import Chats from '../view/Dashboard'
import Profile from '../view/Profile'
import Conversas from '../view/Conversas'
import Contatos from '../view/Contacts'
import Search from '../view/Search'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Chats',
    component: Chats,
    redirect: '/dashboard/chats',
    children: [
      {
        path: '/dashboard/chats',
        component: Conversas
      },
      {
        path: '/dashboard/contacts',
        component: Contatos
      },
      {
        path: '/dashboard/search',
        component: Search
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]
