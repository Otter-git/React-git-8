export const GET_USERS = 'GET_USERS';
export const GET_USERS_LOADING = 'GET_USERS_LOADING';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';


export const getUsersLoading = () => ({
    type: GET_USERS_LOADING,
});

export const getUsersError = (err) => ({
    type: GET_USERS_ERROR,
    payload: err,
    loading: false
});