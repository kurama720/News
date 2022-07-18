import {BrowserRouter, Route, Routes} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import RecentNews from "../recentNews/RecentNews";

import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path='/' element={<RecentNews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
