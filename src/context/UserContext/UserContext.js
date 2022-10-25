import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/Firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  // ceate a new user
  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sing in with user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // sign out with user
  const signOutUser = () => {
    return signOut(auth);
  };

  // on auth state changed
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userCurrent) => {
      setUser(userCurrent);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const userInfo = {
    user,
    userCreate,
    signInUser,
    signOutUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
