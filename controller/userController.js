const userModel = require("../model/userModel");

exports.createUser = async function (req, res) {
    const createUser = new userModel(req.body);
    try {
        const user = await createUser.save();

        console.log(user);

        if (!user) {
            res.send('User Creating Error');
        } else {
            res.status(200).json(user);
        }
    } catch (error) { // Add the 'error' parameter here
        console.error("Error creating user:", error); // Log the error for debugging
        res.status(400).json({ msg: error.message }); // Return an appropriate error response
    }
};

exports.getAll = async function (req, res) {
    try {
        const userGetAll = await userModel.find();
            if(!userGetAll) throw Error('No Users');
                res.status(200).json(userGetAll);
    }catch(err) {
        res.status(400).json({mesg: err})
    }
}

exports.search = async function (req, res){
    try {
         const userSearch = await userModel.findById(req.params._id);
        if(userSearch === null){
            res.status(400).json("User Not Found!")
        }else{
            res.status(200).json(userSearch)
        }
        
    }catch(err) {
            res.status(400).json({message: err})
    }
}

exports.update = async function (req, res){
    try {
        const userUpdate = await userModel.findByIdAndUpdate(req.params._id, req.body);
            if(userUpdate === null){
                res.status(400).json("user Not Update!");
            }else{
                res.status(200).json({success: true, userUpdate});
            }
    }catch(err) {
        res.status(400).json({msg:err});
    }
}


exports.delete = async function (req, res){
        try {
            const userDelete = await userModel.findByIdAndDelete(req.params._id);
                if(userDelete === null){
                    res.status(400).json("User Not Delete!")
                }else{
                    res.status(200).json({success: true, userDelete})
                }
        }catch(err) {
            res.status(400).json("User Delete Error!")
        }
}