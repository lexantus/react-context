import WelcomeBanner from './WelcomeBanner';
import Workplace from './Workplace';

export default function Profile({ user }) {
  return (
    <>
      <WelcomeBanner user={user}/>
      <Workplace user={user}/>
    </>
  );
}


