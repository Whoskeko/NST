import nstLogo from './assets/images/iconNavbar.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-gray-800 text-white">
        <div><img className="m-2 img" src={ nstLogo } alt="Logo"/></div>
        <p>React está funcionando.</p>
      </div>
    </>
  )
}

export default App
