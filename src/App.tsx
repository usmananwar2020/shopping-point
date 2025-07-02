import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import AppRouting from './appRouting'

function App() {
  return (
       <>
      <AppRouting />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
