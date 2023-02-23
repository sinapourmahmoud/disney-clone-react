import './App.css';
import { lazy,Suspense } from 'react';
import { Route,Routes } from 'react-router-dom';
const Login=lazy(()=> import('./Pages/Login'))
function App() {
  return (
          <Suspense fallback='loading' >
      <Routes>
        <Route element={<Login/>} path="/login"  />
      </Routes>
    </Suspense>


  );
}

export default App;
