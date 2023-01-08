import React, { useEffect, useState } from "react";
import { BrowserRouter} from "react-router-dom";
import { createContext } from "react";

import AllPages from "./pages/AllPages";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
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

interface IAuth {
  isAuth: boolean
  setIsAuth: (isAuth: boolean) => void
}

export const Auth = createContext<IAuth>({} as IAuth);
export default App;