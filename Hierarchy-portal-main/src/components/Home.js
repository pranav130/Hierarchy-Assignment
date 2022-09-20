import React, {useEffect, useState} from 'react'
import "../App.css";


const Home = () => {


    const [userData, setData] = useState({});
    const [show, setShow] = useState(false);
    

  const callAboutPage = async () =>{

     try {
        const res = await fetch('/getData', {
           method: "GET",
           headers: {
              "Content-Type":"application.json"
           }
        });

        const data = await res.json();
        console.log(data);
        setData(data);
        setShow(true);
        
         
      } catch (err) {
        console.log(err);
     }
  }

useEffect(() => {
    callAboutPage();
 }, []);


  return (
    <>
      <div className="home-page">
      <div className="home-div">
         <p>Welcome</p>
         <h1><b>{userData.name}</b></h1>
         <h2>{show ? 'Happy To See You...!!!' : 'Plz...Login/Register'}</h2>
      </div>
      </div>
      
    </>
  )
}

export default Home
