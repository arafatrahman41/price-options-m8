import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DasiyNav from './components/DasiyNav/DasiyNav'

function App() {
   return (
    <>
      <NavBar></NavBar>
      {/* <DasiyNav></DasiyNav> */}
      <h1 className='text-3xl bg-rose-500'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
