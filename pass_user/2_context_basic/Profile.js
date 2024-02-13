import { useContext } from 'react';
import WelcomeBanner from './WelcomeBanner';
import Workplace from './Workplace';
import { UserContext } from './UserContext';

export default function Profile() {
  const user = useContext(UserContext);

  return (
    <>
      <WelcomeBanner user={user}/>
      <Workplace user={user}/>
    </>
  );
}


