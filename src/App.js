import { useDispatch} from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import OurProfile from "./components/OurProfile/OurProfile";
import { testThunk } from "./redux/thunks/testThunk";

const fakeApi = {
  url: 'https://jsonplaceholder.typicode.com/todos'
}

const App = () => {
  const dispatch = useDispatch()

  const getUsers = () => {
    dispatch(testThunk(fakeApi))
  }


  return (
    <div className="container">
        <Header />
        <button onClick={getUsers}>fetch</button>
        {/* ogtagorcel useRoutes*/}
          <Routes>
            <Route path="messages" element={<Messages/>} />
            <Route path="auth" element={<AuthComponent/>}/>
            <Route path="ourProfile" element={<OurProfile/>}/>
            <Route path="*" element={<Navigate to="messages"/>}/>
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
