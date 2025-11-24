
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
 

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <CustomerTickets callPromise = {callPromise}></CustomerTickets>
      <Foooter></Foooter>
    </>
  )
}

export default App
