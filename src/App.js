import './App.css';
import { lazy,Suspense } from 'react';
import { Route,Routes } from 'react-router-dom';
const Login=lazy(()=> import('./Pages/Login'))
const Header=lazy(()=> import('./Components/Header'))
const Home=lazy(()=> import('./Pages/Home'))
function App() {
  return (
          <Suspense fallback='loading' >
            <Header/>
      <Routes>
        <Route element={<Login/>} path="/login"  />
        <Route element={<Home/>} path="/"  />
      </Routes>
    </Suspense>


  );
}

export default App;
