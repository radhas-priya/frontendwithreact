import React from "react";
import { Link } from "react-router-dom";
import './index.css';
const About = () => {
    return (
        <>
            <h1 id="about-h1">Want to know more About Us?</h1>
            <div className="about-start">
                {/* <h1 id="about-h1">Want to know more About Us?</h1> */}

            </div>
            <div id="about-div1">

                <h3 id="about-h3">OUR NETWORK</h3>
                <p id="about-para1">
                    <h5>we are not personal holder of Fresh Farms, We are just a part!!</h5>
                    Actually, Fresh Farms is made by farmers who works either on small scale land or large scale lands.
                    We have just provided them a platform where, they all can interact woth each other via their work and progress.

                </p>
                <div className="clearfix">
                    <img id="about-clearfix-img" src=" https://images.unsplash.com/photo-1623211265502-412854043d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGluZGlhbiUyMHZpbGxhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />

                    <p id="about-para2">Its a benefit for every farmer who has been working inside the environment of fresh farms .
                    <br></br> Especially , the main goals are to provide<br></br> every farmer with a satisfied selling of their vegetables or fruits or whatever they grow
                    So that There business can get a peak they wanted. <hr></hr>
                    <h2 >Bring your kids too</h2>
                    <p>It would be like picnic for them.<br></br>Also, It will be good for them as they will learn about different varieties of flowrs ,fruits 
                    and many more . <b>It would be awesome</b>
                    
                    </p>
                    <img id="about-clearfix-img2" src="https://images.unsplash.com/photo-1598690419800-8100e015ff2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkcyUyMGZhcm1zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 " alt=""></img>
                     
                    <img id="about-clearfix-img3" src="https://images.unsplash.com/photo-1508214406285-c765025445df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNoaWxkcyUyMGFuZCUyMG1vbSUyMGRhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 " alt=""></img>
                </p>


                </div>

                <p id="about-para3"><h3>Farmers are the future</h3>
                    <ul>
                        <li>More they interact they will learn from each other and  take the growth at its peak</li>
                        <li>Farmers who grow same type of vegetable or they got a match in somewhat even according to their land scales or their
                            vegetables ot fruits or flowers,They can cooperate with each other<br></br></li><hr></hr>
                        <li><h4>SO.This was our main goal to make them more powerful by uniting them</h4></li>
                        <li> Farmers from many villages who want to start farming or they are well experienced they all are connected in different ways and can serve</li>
                    </ul>
                </p>
            </div>

            <div id="about-div2">
                <p id= "about-div2-para ">
                    {/* <b>Online mode is only for the indoor planting</b> */}
                    {/* <br></br> <h2>THE main role is of the farmers! YES, you read it right!</h2> */}
                    {/* <h3><b>Expereienced farmers are teachers here!</b></h3> */}
                    <center><h1>Is n't it A Good thing!</h1></center>
                    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img id="aboutcar1" src="images\about1.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img  id="aboutcar2"src="images\about2new.png " className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img  id="aboutcar3"src="images\freshflowersfruitcar2ready.png  " className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</p>
</div>
 <div id="about-div4">
    
        <p id="about-para4">
               <h1 id="aboutpara4-h1">Register Fast</h1>
                <h3 id="aboutpara4-h3">Any Doubts?</h3>
                <h2 id="aboutpara4-h2">WE are here to help you!</h2>
                 <ul><li>The details of every farmer is presented here .</li></ul>
               <p id="aboutpara4-2">You need to just register here so that we can fetch your details and
                show you the results of nearest farming fields and those farmers
                details who are connected with us .so you can enjoy the fresh farms at home!
                either you can order online or visit the farms or nurseries connected
                with us which are nearest to you.</p> 
                <img   id="image-about" src="images\car3joiningready.png " alt=""></img>
                <div className="button-div">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" id="veg-link-id">
                      <Link className="btn btn-success " id="vegclickbtn" aria-current="page" to="/Login">Go to Login Page</Link>
                    </li>
                  </ul>
                  </div>

              
        </p>
      
</div>
<div id="footer">
      <footer>
        ALL rights are reserved to the owner<br></br>
         &copy;copyright reserved.
      </footer>
    </div>






           
        </>
    )
}
export default About;