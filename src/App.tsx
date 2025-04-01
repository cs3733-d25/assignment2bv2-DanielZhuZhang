import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TitlePage from './components/title.tsx'
import Hobby1 from './components/hobby1.tsx'
import Welcome from './components/intro.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <h2>Title Component:</h2>
        <TitlePage></TitlePage>
        <h2>Intro Component:</h2>
        <Welcome name1="Daniel" name2="Jackson" />
        <h2>Hobby1 Component:</h2>
        <Hobby1></Hobby1>
    </>
  )
}

export default App
