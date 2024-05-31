
import Login from "./Page/Login/Login";
import Main from "./Page/Main/Main";
import Profile from "./Components/Profile/Profile";
import Transaction from "./Components/Transaction/Transaction";
import Payment from "./Components/Payment/Payment";
import Message from "./Components/Message/Message";
import ChangePass from "./Components/ChangePass/ChangePass";
import Food from "./Components/Food/Food";

const routes = [
  {path: '/' , element:<Login/>} ,
  {path: '/main/*' , element:<Main/> , children : [
    { path : 'profile' , element: <Profile/> } ,
    { path : 'transaction' , element: <Transaction/> } ,
    { path : 'payment' , element: <Payment/> } ,
    { path : 'message' , element: <Message/> } ,
    { path : 'changePass' , element: <ChangePass/> } ,
    { path : 'food' , element: <Food/> } ,
  ] } ,
]

export default routes