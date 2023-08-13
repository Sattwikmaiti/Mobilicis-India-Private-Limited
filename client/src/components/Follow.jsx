import  { useState, useEffect } from 'react';
import axios from "axios"
import "../style/Profile.css"
import imgs from "../assets/chatback.jpeg"
const Follow = () => {
  const [userData, setUserData] = useState({});
 
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

  return (
    <div className="followinfo">
      <div className="lefttotal">
       <center>
       <h3>Following</h3></center> 
        {
          userData?.followers?.map((e)=>
          {
            return(
              <>
               <div className="id">
                <div className="name">
                  <h4>Sattwik Maiti</h4>
                   <button>remove</button>

                </div>

                     <div className="iddesc">
                      <div className="image">
                        <img src={imgs} />
                      </div>
                    
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi enim rem omnis dolore reiciendis porro, at id minus fugit maxime magni doloribus! Esse dolorem dolorum consequatur aut voluptate suscipit possimus?
                     </div>

                  

               </div>
              </>
            )

          })
        }
        </div>

        <div className="righttotal">
          <center>
          <h1>Total Users</h1>
          </center>
          
        {  
          userData?.followers?.map((e)=>
          {
            return(
              <>
               <div className="id">
                <div className="name">
                  <h4>Sattwik Maiti</h4>
                   <button>remove</button>

                </div>

                     <div className="iddesc">
                      <div className="image">
                        <img src={imgs} />
                      </div>
                    
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi enim rem omnis dolore reiciendis porro, at id minus fugit maxime magni doloribus! Esse dolorem dolorum consequatur aut voluptate suscipit possimus?
                     </div>

                  

               </div>
               <div className="id">
                <div className="name">
                  <h4>Sattwik Maiti</h4>
                   <button>remove</button>

                </div>

                     <div className="iddesc">
                      <div className="image">
                        <img src={imgs} />
                      </div>
                    
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi enim rem omnis dolore reiciendis porro, at id minus fugit maxime magni doloribus! Esse dolorem dolorum consequatur aut voluptate suscipit possimus?
                     </div>

                  

               </div>
              </>
            )

          })
        }

        </div>
        <div>
         
        </div>
    </div>
  )
}

export default Follow
