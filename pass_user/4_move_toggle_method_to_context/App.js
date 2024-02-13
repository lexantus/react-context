import { useContext } from 'react';
import Profile from './Profile';
import { UserContext, UserContextProvider } from './UserContext';

export default function App() {
  return (
    <main>
      <UserContextProvider>
        <AppInternal />
      </UserContextProvider>
    </main>
  );
}

function AppInternal() {
  const { toggleUser } = useContext(UserContext);

  return (
    <>
      <Profile />
      <button onClick={toggleUser}>Toggle user</button>
    </>
  );
}
