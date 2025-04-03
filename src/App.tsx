import './App.css'
import TitlePage from './components/title.tsx'
import Hobby1 from './components/hobby1.tsx'
import Hobby2 from './components/hobby2.tsx'
import Welcome from './components/intro.tsx'

function App() {

  return (
    <>
        <h2 className={"label"}>Title Component:</h2>
        <TitlePage></TitlePage>
        <h2 className={"label"}>Intro Component:</h2>
        <Welcome name1="Daniel" name2="Jackson" />
        <br />
        <h2 className={"label"}>Hobby1 Component:</h2>
        <Hobby1></Hobby1>
        <br />
        <h2 className={"label"}>Hobby2 Component:</h2>
        <Hobby2></Hobby2>
    </>
  )
}

export default App
