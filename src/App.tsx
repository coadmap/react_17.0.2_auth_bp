import "assets/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "constants/routes";
import SignInPage from "pages/SignInPage";
import GlobalContextProvider from "GlobalContextProvider";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route path={routes.signIn()} element={<SignInPage />} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
