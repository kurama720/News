import {BrowserRouter, Route, Routes} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import NewsCatalog from "../../pages/newsCatalog/NewsCatalog";
import NewsDetail from "../newsDetail/NewsDetail"

import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path='/' element={<NewsCatalog />} />
          <Route path="/:newsId" element={<NewsDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
