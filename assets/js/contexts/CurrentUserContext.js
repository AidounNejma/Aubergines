import React from "react"

export const CurrentUserContext = React.createContext()

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null)

    return (
            <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
                {children}
            </CurrentUserContext.Provider>
    )
}

export const useCurrentUser = () => React.useContext(CurrentUserContext)
