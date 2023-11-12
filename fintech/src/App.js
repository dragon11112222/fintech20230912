import logo from './logo.svg';
import './App.css';

// import Welcome from './components/Welcome.js';
// import StateComponent from './components/StateComponent.js';
// import EventComponent from './components/EventComponent.js';
// import ListComponent from './components/ListComponent.js';
// import StyledComponent from './components/StyledComponent.js';
//
//
// function App() {
//   return (
//     <div className="App">
//       <Welcome username = '정세용' age = {30}></Welcome>
//       <StateComponent></StateComponent>
//       <EventComponent></EventComponent>
//       <ListComponent></ListComponent>
//       <StyledComponent></StyledComponent>
//     </div>
//   );
// }
//
// export default App;



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ListComponent from './components/ListComponent';
// import HeaderComponent from './components/HeaderComponent';
// import AxiosComponent from './components/AxiosComponent';
// import NewsSearch from './pages/NewsSearch';
//
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<ListComponent></ListComponent>}></Route>
//         <Route path='/header' element = {<HeaderComponent></HeaderComponent>}></Route>
//         <Route path="/axios" element={<AxiosComponent></AxiosComponent>}></Route>
//         <Route path="/news" element={<NewsSearch></NewsSearch>}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
//
// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import AuthResult from './pages/AuthResult';
import AccountList from './pages/AccountList';
import Balance from "./pages/Balance";
import QrCode from "./pages/QrCode";
import QrReader from "./pages/QrReader";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/authResult" element={<AuthResult></AuthResult>}></Route>
        <Route path="/list" element={<AccountList></AccountList>}></Route>
        <Route path="/balance" element={<Balance />}></Route>
        <Route path="/qrcode" element={<QrCode />}></Route>
        <Route path="/qrreader" element={<QrReader />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
