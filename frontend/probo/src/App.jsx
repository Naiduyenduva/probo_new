import './App.css'
import Betbuy from './components/Betbuy'
import Card from './components/Card'

function App() {

  return (
    <>
    <div>
        <h1 className='text-3xl'>Hello world</h1>
      <div className='grid grid-cols-3 gap-10 p-5'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Betbuy />
      </div>
    </div>
    </>
  )
}

export default App
