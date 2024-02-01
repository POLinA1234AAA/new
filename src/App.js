import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route
          path=""
          element={(
            <PrivateRouting>
              <MainLayout />
            </PrivateRouting>
          )}
        >
          <Route index element={<Home />} />
          <Route index element={/*урок*/}/>
            // нужно додумать какие странцы мы хотим видеть отдельными
        </Route>
      </Routes>
    </div>
  );
}

export default App;
