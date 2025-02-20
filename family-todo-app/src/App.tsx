import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"; // 他のページもルートに追加
import Header from "./pages/Header";
import Login from "./pages/Login";


// import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">ログイン画面</Link>
          <Link to="/header">ヘッダー</Link>
          <Link to="/home">ホーム</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/header" element={<Header />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
