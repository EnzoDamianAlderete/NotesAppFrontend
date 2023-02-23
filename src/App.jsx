import LoginContainer from "./containers/LoginContainer";
import { BrowserRouter , Routes ,Route} from "react-router-dom";
import RegisterContainer from "./containers/RegisterContainer";
import HomeContainer from "./containers/HomeContainer";
import NotesContainer from "./containers/NotesContainer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer/>}/>
        <Route path="/login" element={<LoginContainer/>}/>
        <Route path="/register" element={<RegisterContainer/>}/>
        <Route path="/myNotes" element={<NotesContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
