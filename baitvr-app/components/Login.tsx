import React, { useState } from 'react';
import { auth, googleProvider } from '../data/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

const Login: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      alert('فشل تسجيل الدخول');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div style={{textAlign:'center',margin:'24px 0'}}>
      {user ? (
        <>
          <p>مرحباً {user.displayName}</p>
          <button onClick={handleLogout}>تسجيل الخروج</button>
        </>
      ) : (
        <button onClick={handleLogin}>تسجيل الدخول باستخدام Google</button>
      )}
    </div>
  );
};

export default Login;
