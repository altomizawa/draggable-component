import './App.css'
import Circle from './components/Circle'
import Box from './components/Box'
import useDragger from './hooks/useDragger'

function App() {

  useDragger('pink-box')
  useDragger('blue-circle')

  return (
    <main>
      <div className='container'>
        <Box />
        <Circle />
      </div>
    </main>
  )
}

export default App
