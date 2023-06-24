import React, { useContext, useState, useEffect } from 'react';
import { supabase } from '../supabase';

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    setUser(session?.user ?? null);
    setLoading(false);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
        setSession(session ?? null);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [session]);

  // Will be passed down to Signup, Login and Dashboard components
  const value = {
    signUp: async (data) => await supabase.auth.signUp(data),
    signInWithPassword: async (data) =>
      await supabase.auth.signInWithPassword(data),
    signOut: async () => await supabase.auth.signOut(),
    updateUser: async (data) => await supabase.auth.updateUser(data),
    user,
    session,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
