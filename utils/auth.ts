let loggedIn = false;

export const auth = {
    isLoggedIn: () => loggedIn,
    login: () => {loggedIn = true},
    logout: () => {loggedIn = false}
}