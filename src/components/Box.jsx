import useDragger from '../hooks/useDragger'

const Box = () => {
  useDragger('pink-box')
  return (
    <div id='pink-box' className='box'></div>
  )
}

export default Box
