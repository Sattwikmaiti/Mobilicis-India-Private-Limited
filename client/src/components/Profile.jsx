import  { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Profile.css';

function Profile() {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    // Fetch user data from the backend using axios
    const id = "64d8a52b636a3dbd38ff9482"; // Replace with the actual user ID
    axios.get(`http://localhost:8000/api/users/all/?id=${id}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData(userData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Update user data in the backend using axios
    const id = "64d8a52b636a3dbd38ff9482"; // Replace with the actual user ID
    axios.put(`http://localhost:8000/api/users/update/${id}`, editedData)
      .then(response => {
        setUserData(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating user data:', error);
      });
  };

  return (

    <div className="Profile-container">
      <div className="user-info">
       
        {isEditing ? (
          <>
            <div>
              <div>Username:</div>{' '}
              <input
                type="text"
                name="username"
                value={editedData.username || ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div>Email:</div>{' '}
              <input
                type="email"
                name="email"
                value={editedData.email || ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div>Phone Number:</div>{' '}
              <input
                type="tel"
                name="phonenumber"
                value={editedData.phonenumber || ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div>Categories:</div>{' '}
              <input
                type="text"
                name="categories"
                value={editedData.categories || ''}
                onChange={handleInputChange}
              />
            </div>
            
            
            <div>
              <div>Description:</div>{' '}
              <input
                type="text"
                name="description"
                value={editedData.description || ''}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <div>Location:</div>{' '}
              <input
                type="text"
                name="location"
                value={editedData.location || ''}
                onChange={handleInputChange}
              />
            </div>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </>
        ) : (
          <>
            

          

          <div className="left">
          <div className="profimg">
            <div className="div">
            <img src={userData.image || ''} alt="profile"  className="profileimage"/>
            </div>
            <div className="div">
                      
              <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
            </div>
             

            </div>

            <div className="general">
           
            <div className="chipheading">
            
            <div className="chip">
              Username
              </div>
             <div> {userData.username}</div>
          </div>
          <div className="chipheading">
            
            <div className="chip">
              Email
              </div>
             <div> {userData.email}</div>
          </div>
          <div className="chipheading">
            
            <div className="chip">
              Phone Number
              </div>
             <div> {userData.phonenumber}</div>
          </div>
          
                </div>
           
           
           
           <div className="general">
           <div className="cat">
              <div className="chip">Categories</div> 
            {userData.categories?.map((e)=>{
                return   (<><div className="chip" key={2}>{e}</div></> )
              }) 
                
                }
            </div>

           </div>
           
           

            <div>

              <div className="general">

              <div className="chip">Description</div> 
               <p>
               {userData.description}
               </p>
               <div>
              <div className="chip">Location</div> <p>
              {userData.location}
              </p>
            </div>
              </div>
             
             
            </div>

          </div>
            

            <div className="right">

               <div className="education">
                     <div className="ed1">
                        <div className="upper">
                        <div>The Assesmbly of God Church School </div>
                        <div className="time">
                          2004-2021
                        </div>

                        </div>
                        <div className="desc">
                          Studied Till Class 12 . Became Board Topper with 96%.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero consequuntur, dolores laborum eligendi ab necessitatibus corrupti. Perspiciatis voluptas perferendis officiis sunt, provident, vero maiores eos magni deserunt consequatur libero!

                        </div>
                       
                     </div>
                     <div className="ed1">
                        <div className="upper">
                        <div>The Assesmbly of God Church School</div>
                        <div className="time">
                          2004-2021
                        </div>

                        </div>
                        <div className="desc">
                          Studied Till Class 12 . Became Board Topper with 96%.

                        </div>
                       
                     </div>
               </div>


               <div className="education">
                     <div className="ed1">
                        <div className="upper">
                        <div>The Assesmbly of God Church School</div>
                        <div className="time">
                          2004-2021
                        </div>

                        </div>
                        <div className="desc">
                          Studied Till Class 12 . Became Board Topper with 96%.

                        </div>
                       
                     </div>
                     <div className="ed1">
                        <div className="upper">
                        <div>The Assesmbly of God Church School</div>
                        <div className="time">
                          2004-2021
                        </div>

                        </div>
                        <div className="desc">
                          Studied Till Class 12 . Became Board Topper with 96%.

                        </div>
                       
                     </div>
               </div>


<div className="links">

  <div className="l1">
    LinkedIN
  </div>
  <div className="l1">
    LinkedIN
  </div>
  <div className="l1">
    LinkedIN
  </div>
  <div className="l1">
    LinkedIN
  </div>


</div>
    

            </div>

            
           
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
