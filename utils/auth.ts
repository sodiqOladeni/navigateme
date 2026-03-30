import auth from "@react-native-firebase/auth"

export async function login(email: string, password: string) {
    return auth().signInWithEmailAndPassword(email.trim(), password)
}

export async function signup(name: string, email: string, password: string) {
    return auth().createUserWithEmailAndPassword(email.trim(), password)
}

export async function logout() {
    return auth().signOut()
}

// let loggedIn = false;
// export const auth = {
//     isLoggedIn: () => loggedIn,
//     login: () => {loggedIn = true},
//     logout: () => {loggedIn = false}
// }