import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ExchangePage from '../views/ExchangePage.vue'
import MarketTrendPage from '../views/MarketTrendPage.vue'

export const routes: RouteRecordRaw[] = [
  { path: '', component: HomePage, name: 'home' },
  { path: '/exchange', component: ExchangePage, name: 'exchange' },
  { path: '/marketTrend', component: MarketTrendPage, name: 'marketTrend' },
]
