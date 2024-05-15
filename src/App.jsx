import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DasiyNav from './components/DasiyNav/DasiyNav'

function App() {
   return (
    <>
      <NavBar></NavBar>
      {/* <DasiyNav></DasiyNav> */}
      <h1 className='text-3xl bg-rose-500'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
