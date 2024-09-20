import { useState, useEffect } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    console.log(WebApp.initData);
  }, []);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/*  */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Count is ${count}`)}>
            Show Alert
        </button>
      </div>
    </>
  )
}

export default App
