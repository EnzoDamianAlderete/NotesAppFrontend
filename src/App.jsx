import LoginContainer from "./containers/LoginContainer";
import { BrowserRouter , Routes ,Route} from "react-router-dom";
import RegisterContainer from "./containers/RegisterContainer";
import HomeContainer from "./containers/HomeContainer";
import NotesContainer from "./containers/NotesContainer";
import EditNoteContainer from "./containers/EditNoteContainer";
import Page404 from "./components/Page404";
import AppContextProvider from "./context/AppContext";


function App() {
  return (
    <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer/>}/>
        <Route path="/login" element={<LoginContainer/>}/>
        <Route path="/register" element={<RegisterContainer/>}/>
        <Route path="/myNotes" element={<NotesContainer/>}/>
        <Route path="/editNote" element={<EditNoteContainer/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
