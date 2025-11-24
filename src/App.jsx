
import { useState } from 'react';
import './App.css'
import CustomerTickets from './components/CustomerTickets'
import Foooter from './components/Foooter';
import Hero from './components/Hero'
import Nav from './components/Nav'
const jsonPromise = async () => {
const res = await fetch('../public/customer.json');
return res.json();
};
const callPromise = jsonPromise();
function App() {
  const [customerticket, setCustomerticket] = useState([]);
  const clickedTicket = (ticket) => {
   setCustomerticket([...customerticket, ticket ])
 }

  return (
    <>
      <Nav></Nav>
      <Hero customerticket = {customerticket}></Hero>
      <CustomerTickets 
      callPromise = {callPromise}
      clickedTicket = {clickedTicket}
      ></CustomerTickets>
      <Foooter></Foooter>
    </>
  )
}

export default App
