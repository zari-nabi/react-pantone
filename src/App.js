import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import { BaseContextProvider } from './context';
import Router from './Router';
import { getFromLocalStorage } from './services/manageLocalStorage';

//=======================================
/**
 * The App component displays the view of the application.
 * @returns {JSX.Element} The App component.
 */
//=========================================
function App() {

  const [customColor, setCustomColor] = useState(null);
  const [token, setToken] = useState(getFromLocalStorage("token"));
  const [newUser, setNewUser] = useState({});

  const memoizedValue = useMemo(() => ({
    customColor, setCustomColor,
    token, setToken,
    newUser, setNewUser
  }), [customColor, token, newUser]);

  return (
    <BaseContextProvider value={memoizedValue}>
      {token ? <Navbar /> : null}
      <Router />
    </BaseContextProvider>
  );
}

export default App;
