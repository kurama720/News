import {BrowserRouter, Route, Routes} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import NewsCatalog from "../../pages/newsCatalog/NewsCatalog";

import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path='/' element={<NewsCatalog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
