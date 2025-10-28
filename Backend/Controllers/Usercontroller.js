import bcrypt from "bcryptjs";
import User from "../Models/User.js";
import { generatetoken } from "../Utils/generatetokens.js";
import cloudinary from "../Config/cloudinary.js";

// 🟢 Controller for user signup
export const userSignup = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, bio } = req.body;

    
    if (!firstName || !lastName || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await User.create({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      bio,
    });

    // Generate JWT token
    const token = generatetoken(newUser._id);

    // Exclude password from response
    const { password: _, ...userWithoutPassword } = newUser._doc;

    // Response
    res.status(201).json({
      success: true,
      UserData: userWithoutPassword,
      token,
      mssg: "Account created successfully",
    });
  } catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// 🟡 Controller for user login
export const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check fields
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = generatetoken(user._id);

    // Exclude password from response
    const { password: _, ...userWithoutPassword } = user._doc;

    // Response
    res.status(200).json({
      success: true,
      UserData: userWithoutPassword,
      token,
      mssg: "Login successful",
    });
  } catch (error) {
    console.error("Error during user login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


//controller to get user profile
export const getUserProfile=async(req,res)=>{
    try {
        const userId=req.params.id;
        const user=await User.findById(userId).select("-password");
        if(!user){
        return res.status(404).json({message:"User not found"});
        }
        res.json({success:true,user});
    }catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//controller to update user profile
export const updateUserProfile=async(req,res)=>{
    try {
        const { username, bio, profilePic, interests,firstName,lastName } = req.body;
        const userId=req.user._id;
        let updateuser;

        if(!profilePic){
            updateuser=await User.findByIdAndUpdate(userId,{
                username,
                firstName,
                lastName,
                bio,
                interests
            },{new:true})
        }else{
            const uploadedImage=cloudinary.uploader.upload(profilePic)
            updateuser= await User.findByIdAndUpdate(userId,{
                username,
                firstName,
                lastName,
                bio,
                profilePic:(await uploadedImage).secure_url,
                interests
            },{new:true})

        }

        res.json({success:true,updateuser});
    } catch (error) {
        console.error("Error updating user profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


//controller to delete user account
export const deleteUserAccount=async(req,res)=>{
    try {
        const userId=req.user._id;
        await User.findByIdAndDelete(userId);
        res.json({success:true,message:"User account deleted successfully"});

    } catch (error) {
        console.error("Error deleting user account:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//contoller to change password
export const changeUserPassword=async(req,res)=>{
    try {
        const {currentPassword,newPassword}=req.body;
        const userId=await User.findById(req.user._id);
        const isMatcha=await bcrypt.compare(currentPassword,userId.password);
        if(!isMatcha){
            return res.status(400).json({message:"Current password is incorrect"});
        }
        const salt=await bcrypt.genSalt(10);
        const hashedNewPassword=await bcrypt.hash(newPassword,salt);
        userId.password=hashedNewPassword;
        await userId.save();
        res.json({success:true,message:"Password changed successfully"});


    } catch (error) {
        console.log("Error changing user password:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


//contoler to follow user 
export const follow=async(req,res)=>{
    try {
        const userIdToFollow=req.params.id;
        const currentUserId=req.user._id;

        if(userIdToFollow===currentUserId){
            return res.status(400).json({message:"You cannot follow yourself"});
        }
        const userToFollow=await User.findById(userIdToFollow);
        const currentUser=await User.findById(currentUserId);
         if (!userToFollow || !currentUser) {
      return res.status(404).json({ message: "User not found" });
    }
        if(currentUser.following.includes(userIdToFollow)){
            res.json.status(400).json({message:"You already follow this user"});
        }
        userToFollow.followers.push(currentUserId);
        currentUser.following.push(userIdToFollow);
        await userToFollow.save();
        await currentUser.save();
        res.json({success:true,message:"User followed successfully"});

    } catch (error) {
        console.log("Error in follow/unfollow user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//unfollow user controller
export const unfollow=async(req,res)=>{
    try {
        const userIdToUnfollow=req.params.id;
        const currentUserId=req.user._id;

        if(userIdToUnfollow===currentUserId){
            return res.status(400).json({message:"You cannot unfollow yourself"});
        }
         if (!userIdToUnfollow || !currentUserId) {
      return res.status(404).json({ message: "User not found" });
    }
      if (!userIdToUnfollow.followers.includes(currentUserId)) {
      return res.status(400).json({ message: "You are not following this user" });
    }

       userIdToUnfollow.followers = userIdToUnfollow.followers.filter(
      (userId) => userId.toString() !== currentUserId
    );
    currentUserId.following = currentUserId.following.filter(
      (userId) => userId.toString() !== id
    );

    await userIdToUnfollow.save();
    await currentUserId.save();

    res.status(200).json({
      success: true,
      message: "User unfollowed successfully",
    });
    } catch (error) {
        console.log("Error in unfollow user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
//get followers and follwing of the user

//to search the user bu his username or name

//controller to forget password 