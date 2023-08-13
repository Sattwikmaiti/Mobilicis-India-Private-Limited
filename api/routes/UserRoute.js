const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserSchema = require('../models/User'); // Import your UserSchema model

const router = express.Router();

// Register a new user
/* 
{
    "username":"Sattwik",
    "phonenumber":"7477514396",
    "description":"I am a good boy",
    "email":"maitisattwik@gmail.com",
    "location":"India",
    "password":"Sattwik@2002",
    "image":"https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg"

}
*/
router.post('/register', async (req, res) => {
  try {
    const { username, email, phonenumber, description, location, image } = req.body;
    const password = await bcrypt.hash(req.body.password, 10); // Hash the password
    const newUser = new UserSchema({
      username,
      email,
      phonenumber,
      description,
      location,
      image,
      password,
      
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
    console.log(error)
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials user' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials password' });
    }
    // const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' }); // Adjust your secret key and token expiration
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json( error.message );
  }
});

// Update user details (requires authentication)
router.put('/update/:user', async (req, res) => {
  try {
    // Extract user ID from authentication token
    const { userId } = req.params.user;

    const updatedFields = {
      username: req.body.username,
      description: req.body.description,
      location: req.body.location,
      image: req.body.image,
      categories:req.body.categories
    };

    await UserSchema.findByIdAndUpdate(userId, updatedFields);
    res.status(200).json({ message: 'User details updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete account (requires authentication)
router.delete('/delete', async (req, res) => {
  try {
    // Extract user ID from authentication token
    const { userId } = req.user;

    await UserSchema.findByIdAndDelete(userId);
    res.status(200).json({ message: 'User account deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


router.post('/follow', async (req, res) => {
  try {
    const { userId, connectionId } = req.body;

    // Update the 'following' array for the current user
    await UserSchema.findByIdAndUpdate(userId, { $push: { following: connectionId } });

    // Update the 'followers' array for the connection user
    await UserSchema.findByIdAndUpdate(connectionId, { $push: { followers: userId } });


    
    res.status(200).json({ message: 'User followed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Route to unfollow a user
router.post('/unfollow', async (req, res) => {
  try {
    const { userId, connectionId } = req.body;

    // Remove the 'connectionId' from the 'following' array for the current user
    await UserSchema.findByIdAndUpdate(userId, { $pull: { following: connectionId } });

    // Remove the 'userId' from the 'followers' array for the connection user
    await UserSchema.findByIdAndUpdate(connectionId, { $pull: { followers: userId } });

    res.status(200).json({ message: 'User unfollowed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


router.get('/all/', async (req, res) => {

   const username=req.query.id;
   if(username)
     {
        try{
          const user=await UserSchema.findOne({_id:username}).sort({createdAt:1});;
          res.status(200).json(user);
        }
        catch(err)
        {
          res.status(500).json({error:err.message});
        }
     }
     else {
      user = await UserSchema.find().sort({createdAt:-1});
      res.status(200).json(user);

     }

}
)

module.exports = router;
