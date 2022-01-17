import "assets/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "constants/routes";
import SignInPage from "pages/SignInPage";
import GlobalContextProvider from "GlobalContextProvider";
import SignUpPage from "pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route path={routes.signIn()} element={<SignInPage />} />
          <Route path={routes.signUp()} element={<SignUpPage />} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
