import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useUserStorage from '../state/useUserStorage';

export default function ProtectedRoute({ children }) {
  const isLoggedIn = useUserStorage((state) => state.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/signin');
    } else {
      return children;
    }
  }, [isLoggedIn]);
}
