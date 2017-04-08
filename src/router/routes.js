import Home from '../view/Home'
import Chats from '../view/Chats'
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
    path: '/chats',
    name: 'Chats',
    component: Chats,
    redirect: '/chats/conversas',
    children: [
      {
        path: '/chats/conversas',
        component: Conversas
      },
      {
        path: '/chats/contacts',
        component: Contatos
      },
      {
        path: '/chats/search',
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
