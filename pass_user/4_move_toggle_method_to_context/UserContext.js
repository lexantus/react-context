import { createContext, useState } from 'react';

const alex = {
  name: 'Alex',
  job: 'Software Developer'
};

const boris = {
  name: 'Boris',
  job: 'Doctor'
};

export const UserContext = createContext({
  toggleUser: null,
  user: {
    name: null,
    job: null
  }
});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(alex);

  const toggleUser = () => {
    if (user === alex) {
      setUser(boris);
    } else {
      setUser(alex);
    }
  }

 return (
    // Pass toggleUser to let it be invoked
    <UserContext.Provider value={{ user, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
}
