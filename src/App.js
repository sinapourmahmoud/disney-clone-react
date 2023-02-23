import './App.css';
import { lazy,Suspense } from 'react';
import { Route,Routes } from 'react-router-dom';
const Login=lazy(()=> import('./Pages/Login'))
const Header=lazy(()=> import('./Components/Header'))
function App() {
  return (
          <Suspense fallback='loading' >
            <Header/>
      <Routes>
        <Route element={<Login/>} path="/login"  />
      </Routes>
    </Suspense>


  );
}

export default App;
