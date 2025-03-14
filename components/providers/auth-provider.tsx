import { createContext, useContext } from 'react';
import { UseMutationResult } from '@tanstack/react-query';

import { AuthCredentials, useAuthHook } from '@/hooks/api/useAuth';

interface AuthContextType {
  isAuthenticated: boolean;
  login: UseMutationResult<any, Error, AuthCredentials, unknown>;
  googleCheck: UseMutationResult<any, Error, string, unknown>;
  register: UseMutationResult<any, Error, AuthCredentials, unknown>;
  googleLogin: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuthHook();

  const value = {
    isAuthenticated: auth.isAuthenticated,
    login: auth.login,
    register: auth.register,
    googleLogin: auth.googleLogin,
    logout: auth.logout,
    googleCheck: auth.googleCheck,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
