import React, { useEffect, useState } from "react";
import { BrowserRouter} from "react-router-dom";
import { createContext } from "react";

import AllPages from "./pages/AllPages";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      console.log(localStorage.getItem("auth") == true)
      setIsAuth(true)
    }
}, [])

  return (
    <Auth.Provider value={{
      isAuth,
      setIsAuth,
    }}>
      <BrowserRouter >
        <AllPages isAuth={isAuth}/>
      </BrowserRouter>
    </Auth.Provider>
  )
}

export const Auth = createContext({});
export default App;