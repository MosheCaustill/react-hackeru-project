import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import SignUpBusiness from "./components/signUpBusiness";
import SignOut from "./components/signOut";
import MyCards from "./components/myCards";
import ProtectedRoute from "./components/common/protectedRoute";
import CardCreate from "./components/cardCreate";
import CardsDelete from "./components/cardsDelete";
import CardEdit from "./components/cardsEdit";
import BackgroundImagePage from "./components/common/bgImage";

function App() {
  return (
    <div className="App d-flex flex-column"  style={{
      backgroundImage:
        `url(https://pixabay.com/photos/hands-world-map-global-earth-600497/)`
    }}>
      <ToastContainer />
      <header>
        <NavBar></NavBar>
      </header>

      <main
        className="flex-fill min-vh-100 container"
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route
            path="sign-up"
            element={<SignUp redirect="/sign-in" />}
          ></Route>
          <Route
            path="sign-up-business"
            element={<SignUpBusiness redirect="/my-cards" />}
          ></Route>
          <Route path="sign-in" element={<SignIn redirect="/" />}></Route>
          <Route path="sign-out" element={<SignOut redirect="/" />}></Route>
          <Route
            path="my-cards"
            element={
              <ProtectedRoute onlyBiz>
                <MyCards />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/create-card"
            element={
              <ProtectedRoute onlyBiz>
                <CardCreate />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/my-cards/delete/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardsDelete />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/my-cards/edit/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardEdit></CardEdit>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </main>
      <Footer className="container"></Footer>
    </div>
  );
}

export default App;
