import { useState } from 'react';
import Profile from './Profile';

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
      <Profile user={user} />
      <button onClick={toggleUser}>Toggle user</button>
    </main>
  );
}
