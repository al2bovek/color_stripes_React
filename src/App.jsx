import './App.css'
import { colors } from './assets/color_stripes/colors.js'

function App() {

  return (
    <>
    <div>
     <ul className='w-[30%] border border-solid border-amber-800 mx-auto'>
  {colors.map(color => <li className='py-6 text-white text-4xl' key={color} style={{ backgroundColor: color }}>{color}</li>)}
     </ul>
    </div>
    </>
  )
}

export default App
