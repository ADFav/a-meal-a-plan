const users = {
    'user-1': {
        userId: 'user-1',
        name: 'Andrew'
    }
}

let userData = null;
let loggedIn = false;

export function login() {
    userData = users['user-1'];
    loggedIn = true;
    return userData;
}

export function logout() {
    userData = null;
    loggedIn = false;
    return true;
}

export function getAuthState() {
    return { loggedIn, userData };
}

export function getUserData() {
    return userData;
}

const mockAuth = { login, logout, getAuthState, getUserData };
export default mockAuth;