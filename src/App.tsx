import { useState, useEffect } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)
  const [initData, setInitData] = useState<string | null>(null)

  useEffect(() => {
    setInitData(WebApp.initData);
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
      {/* Display initData */}
      <div className="card">
        <p>Init Data: {initData}</p>
      </div>
    </>
  )
}

export default App
