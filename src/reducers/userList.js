const initialUserState = {
    userList: []
}
const userList = (state = initialUserState, action) => {
    switch(action.type){
        case "ADD":
            return {
                ...state,
                userList: [...state.userList, action.payload]
            }
        case "DELETE":
            return {

            }
        default: 
            return state
    }
}

export default userList