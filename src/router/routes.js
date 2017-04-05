import Home from '../app/views/Home'
import Card from '../app/views/Card'
import Profile from '../app/views/Profile'
import CreateTheme from '../app/views/CreateTheme'
import ThemeDashboard from '../app/views/ThemeDashboard'
import Subscriber from '../app/views/Subscriber'
import ListThemes from '../app/views/ListThemes'
import Deck from '../app/views/Deck'
import MyArguments from '../app/views/MyArguments'

export default [
  {
    path: '/',
    redirect: '/home',
    meta: { requireAuth: false }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requireAuth: false }
  },
  {
    path: '/themes',
    name: 'ListThemes',
    component: ListThemes,
    meta: { requireAuth: true }
  },
  {
    path: '/themes/:theme',
    name: 'Themes',
    component: ThemeDashboard,
    meta: { requireAuth: true }
  },
  {
    path: '/card/:card',
    name: 'Card',
    component: Card,
    meta: { requireAuth: true }
  },
  {
    path: '/create-theme',
    name: 'CreateTheme',
    component: CreateTheme,
    meta: { requireAuth: true }
  },
  {
    path: '/user/:user',
    name: 'ShowProfile',
    component: Profile,
    meta: { requireAuth: true }
  },
  {
    path: '/subscriber',
    name: 'Subscriber',
    component: Subscriber,
    meta: { requireAuth: true }
  },
  {
    path: '/my-arguments',
    name: 'My Arguments',
    component: MyArguments,
    meta: { requireAuth: true }
  },
  {
    path: '/deck-arguments',
    name: 'Deck Arguments',
    component: Deck,
    meta: { requireAuth: true }
  }
]
