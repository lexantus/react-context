import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Workplace() {
  const { user } = useContext(UserContext);

  return <p>You are working as {user.job}</p>;
}
