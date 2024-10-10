import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function useWindowSize(props) {
    const [windowSize,setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(()=>{
       const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
       }
       window.addEventListener("resize", handleResize)
       return ()=>{
        window.removeEventListener("resize", handleResize)
       }
    },[])
  return windowSize;
}

useWindowSize.propTypes = {}

export default useWindowSize
