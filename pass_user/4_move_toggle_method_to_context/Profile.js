import WelcomeBanner from './WelcomeBanner';
import Workplace from './Workplace';

// Intermediary component for user
export default function Profile() {
  // no need to use UserContext here
  return (
    <>
      <WelcomeBanner /> // no need to pass user as prop
      <Workplace /> // no need to pass user as prop
    </>
  );
}


