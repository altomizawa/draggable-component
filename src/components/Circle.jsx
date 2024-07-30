import useDragger from '../hooks/useDragger'

const Circle = () => {
  useDragger('blue-circle')
  return (
    <div id='blue-circle' className='circle'></div>
  )
}

export default Circle
