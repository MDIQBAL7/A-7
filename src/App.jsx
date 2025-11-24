
import './App.css'
import CustomerTickets from './components/CustomerTickets'
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
    </>
  )
}

export default App
