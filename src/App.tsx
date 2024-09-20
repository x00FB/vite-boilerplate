import { useState, useEffect } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)
  const [initData, setInitData] = useState<string | null>(null)

  useEffect(() => {
    setInitData(JSON.stringify(WebApp.initDataUnsafe, null, 2));
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
        <pre>Init Data: {initData}</pre>
      </div>
    </>
  )
}

export default App
