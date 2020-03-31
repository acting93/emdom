const cookie={
    setCookie:false
}

const cookieReducer =(state=cookie,action)=>{
    switch (action.type) {
        case 'SET_COOKIE':
            return {
                ...state,
                setCookie:true
            }          
        default:
            return state
    }
}

export default cookieReducer;