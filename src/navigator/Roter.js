import HomeStackScreen from './stackScreens/HomeStack';
import AccountsStackScreen from './stackScreens/AccountsStack';
import GivingStackScreen from './stackScreens/GivingStack';
import PaymentsStackScreen from './stackScreens/PaymentsStack';
import CardsStackScreen from './stackScreens/CardsStack';

export default router = [
  {
    name: 'Home',
    component: HomeStackScreen,
    icon: require('../assets/icons/home.png'),
    labelName: 'Home'
  },
  {
    name: 'Accounts',
    component: AccountsStackScreen,
    icon: require('../assets/icons/accounts.png'),
    labelName: 'Accounts'
  },
  {
    name: 'Giving',
    component: GivingStackScreen,
    icon: require('../assets/icons/giving.png'),
    labelName: 'Giving'
  },
  {
    name: 'Payments',
    component: PaymentsStackScreen,
    icon: require('../assets/icons/payment.png'),
    labelName: 'Payments'
  },
  {
    name: 'Cards',
    component: CardsStackScreen,
    icon: require('../assets/icons/cards.png'),
    labelName: 'Cards'
  }
]