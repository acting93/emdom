const cookie={
    setCookie:false,
    checkCookie:false
}

const cookieReducer =(state=cookie,action)=>{
    switch (action.type) {
        case 'SET_COOKIE':
            return {
                ...state,
                setCookie:true
            }
        case 'CHECK_COOKIE':
            return{
                ...state,
                checkCookie:true
            }
        default:
            return state
    }
}

export default cookieReducer;