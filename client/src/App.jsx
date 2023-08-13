import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import Login from './components/Login';
const App = () => {
  return (
    <div>
       <Router>
        <Routes>
          <Route name="home" path="/home" element={<Home/>}/>
          <Route name="chat" path="/chat" element={<Chat/>}/>
          <Route name="login" path="/" element={<Login />}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App
