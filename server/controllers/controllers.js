//CRUD

exports.login = (req, res) =>{
    console.log("login request recieved")

    //send to database or something
}
exports.getUser = (req,res) =>{
    console.log("user data requested")
    //Check if logged in

    //request user info from db
}

exports.getUsers = (req,res) =>{
    console.log("Users list requested")
    //Check if logged in

    //request users list from db
    
}

exports.createUser = (req,res) =>{
    console.log("User creation requested")
    //Check data, if good send to db
}

exports.deleteUser = (req, res) =>{
    console.log("User deleted")
}

exports.userAuthenticated = (req,res,next) =>{
    //Check if user is logged in
    next()
}