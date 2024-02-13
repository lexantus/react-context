import { useState } from 'react';
import Profile from './Profile';
import { UserContext } from './UserContext';

const alex = {
  name: 'Alex',
  job: 'Software Developer'
};

const boris = {
  name: 'Boris',
  job: 'Doctor'
};

export default function App() {
  const [user, setUser] = useState(alex);

  const toggleUser = () => {
    if (user === alex) {
      setUser(boris);
    } else {
      setUser(alex);
    }
  }

  return (
    <main>
      <UserContext.Provider value={user}>
        <Profile /> // no longer need to pass user in Profile
      </UserContext.Provider>
      
      <button onClick={toggleUser}>Toggle user</button>
    </main>
  );
}
