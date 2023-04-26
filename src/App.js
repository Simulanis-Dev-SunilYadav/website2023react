import React, {useEffect } from 'react'
import Routers from './routers'
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
        <Routers/>
    </>
  )
}

export default App