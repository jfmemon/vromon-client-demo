import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from './../../Firebase/config.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const authInfo = {user};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;