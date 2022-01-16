import "assets/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "constants/routes";
import SignInPage from "pages/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.signIn()} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
