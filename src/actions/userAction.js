const addUser = (userObj) => {
    return {
        type: "ADD",
        payload: userObj
    }
}

export default addUser;