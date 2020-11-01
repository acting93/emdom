const cookie={
    setCookie:false,
    checkCookie:false,
    isAlert:false
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
        case 'CLOSE_ALERT':
            return{
                ...state,
                isAlert:action.isAlert
            }
        default:
            return state
    }
}

export default cookieReducer;