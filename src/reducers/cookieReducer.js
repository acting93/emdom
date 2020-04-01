const cookie={
    setCookie:false,
    checkCookie:false
}

const cookieReducer =(state=cookie,action)=>{
    switch (action.type) {
        case 'SET_COOKIE':
            console.log("stats reducera " +state.setCookie)
            return {
                ...state,
                setCookie:true
            }
        case 'CHECK_COOKIE':
            console.log(`checkcookie akcja działa`)
            return{
                ...state,
                checkCookie:true
            }
        default:
            return state
    }
}

export default cookieReducer;