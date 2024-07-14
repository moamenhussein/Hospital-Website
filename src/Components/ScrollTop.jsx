import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  const {pathName} = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }, [pathName])
  return (
    <div>
      
    </div>
  )
}

export default ScrollTop
