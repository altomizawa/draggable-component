import { useEffect, useRef} from 'react';

function useDragger(id) {

  const isClicked = useRef(false)
  
  const coords = useRef({
    startX: 0, 
    startY: 0,
    lastX: 0,
    lastY: 0,
  })

  useEffect(() => {

    const target = document.getElementById(id)
    if (!target) throw new Error('Element with given Id does not exist')
    
    const container = target.parentElement;
    if (!container) throw new Error('Element must have a parent')

    const onMouseDown = (e) => {
      isClicked.current = true;
      coords.current.startY = e.clientY;
      coords.current.startX = e.clientX;
    }

    const onMouseUp = (e) => {
      isClicked.current = false;
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
    }

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;


      target.style.top = `${nextY}px`
      target.style.left = `${nextX}px`
    }

    target.addEventListener('mousedown', onMouseDown)
    target.addEventListener('mouseup', onMouseUp)
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseleave', onMouseUp)
    
    const cleanUp = () =>{ 
      target.removeEventListener('mousedown', onMouseDown)
      target.removeEventListener('mouseup', onMouseUp)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mouseleave', onMouseUp)

    }
    return cleanUp
  },[id])
}

export default useDragger