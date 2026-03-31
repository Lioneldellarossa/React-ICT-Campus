export async function usernameAction(state, formData) {
    const username = formData.get("username")

    console.log(username)

    let error = ""
    
    if(username.length < 4){
        error = "Überlege einen löngeren usernamen"
        
    } else if(username === "admin" || username == "1234"){
        error = "Bitte einen schlauen usernamen du dulli"
    }
    console.log(error)
    return {
        username: username,
        error: error
    }
}