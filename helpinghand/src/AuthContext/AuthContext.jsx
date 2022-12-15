import { useState } from "React";
export const AuthContext = React.createContext();


function AuthContextProvider({ children }) {
    const [state, setState] = useState({
        isAuth: false,
        token: null
    })
    const login = (token) => {
        setState({
            ...state,
            isAuth: true,
            token
        })
    }
    const logout = () => {
        setState({
            ...state,
            isAuth: false,
            token: null

        })
    }
    return (
        <AuthContext.Provider value={{ authState: state, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;