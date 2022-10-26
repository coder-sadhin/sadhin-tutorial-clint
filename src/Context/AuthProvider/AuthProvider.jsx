import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateCurrentUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const githubLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user state', currentUser)
            if (currentUser == null || currentUser.verifiedEmail) {
                setUser(currentUser);
            }

        });
        return () => unsubscribe()
    }, [])


    const userInfo = {
        user,
        createUser,
        updateCurrentUserProfile,
        userLogin,
        googleLogin,
        githubLogin
    };
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;