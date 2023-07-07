import './App.css';
import { Route, Routes} from 'react-router-dom'
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import ViewEvent from './component/ViewEvent';
import AddEvent from './component/AddEvent';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<LogIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/viewevent' element={<ViewEvent/>}/>
      <Route path='/addevent' element={<AddEvent/>}/>

     </Routes>
    </div>
  );
}

export default App;
