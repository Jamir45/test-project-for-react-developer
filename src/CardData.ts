import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { RiHandCoinLine } from 'react-icons/ri';
import { IoTimerOutline } from 'react-icons/io5';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

const CardData = [
   {
      Icon: PersonOutlineIcon,
      Title: 'New Leds',
      count: 205,
      color: '#663399',
      bgColor: '#f1f3f4',
   },
   {
      Icon: RiHandCoinLine,
      Title: 'Sales',
      count: '$4021',
      color: '#6aa0f9',
      bgColor: '#c5dbff',
   },
   {
      Icon: IoTimerOutline,
      Title: 'Order',
      count: 80,
      color: '#5dae49',
      bgColor: '#bcddb3',
   },
   {
      Icon: FaRegMoneyBillAlt,
      Title: 'Expense',
      count: '$1200',
      color: '#ffc620',
      bgColor: '#fff6e0',
   }
]

export default CardData