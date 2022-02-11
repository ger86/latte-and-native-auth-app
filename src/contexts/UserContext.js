import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext('light');
export default UserContext;

export function useUserContext() {
  return useContext(UserContext);
}

const ASYNC_STORAGE_KEY = '@latteandnative.user';

export function UserContextProvider({children}) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = useCallback(async function (loggedUser) {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(loggedUser));
      setUser(loggedUser);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const logout = useCallback(async function () {
    try {
      await AsyncStorage.removeItem(ASYNC_STORAGE_KEY);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(function () {
    async function getUserFromStorage() {
      const userFromStorage = await AsyncStorage.getItem(ASYNC_STORAGE_KEY);
      if (userFromStorage) {
        setUser(JSON.parse(userFromStorage));
      }
      setIsLoading(false);
    }
    getUserFromStorage();
  }, []);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isLoading,
    }),
    [user, login, logout, isLoading],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
