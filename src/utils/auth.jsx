export const getToken = () => {
    return localStorage.getItem('accessToken');
};

export const getRefreshToken=()=>{
    return localStorage.getItem('refreshToken')
}

export const getUserInfo=()=>{
    return localStorage.getItem('nickname')
}

export const getUserId=()=>{
    return localStorage.getItem('memberId')
}