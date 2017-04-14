import Home from '../view/Home'
import Dashboard from '../view/Dashboard'
import Profile from '../view/Profile'
import Chats from '../view/Chats'
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
    name: 'Dashboard',
    component: Dashboard,
    redirect: '/dashboard/chats',
    children: [
      {
        path: '/dashboard/chats',
        component: Chats
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
