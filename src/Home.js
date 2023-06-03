import React from "react";
import { Link } from "react-router-dom";
// import Datas from './Datas';
// import Veggies from "./Veggies";
import "./index.css";
const Home = () => {
  return (<>
    <div className="home-class">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-5 col-md-6">
            <h1 id="hometop-h1">NAMASTE</h1>
            <h3 id="hometop-h3"> Life needs essence.</h3>
            <h2 id="hometop-h2">We cares the quality and life!</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-6">
            <img id="img1" src=" https://media.istockphoto.com/id/832988308/photo/living-with-nature-right-on-my-doorstep.jpg?b=1&s=170667a&w=0&k=20&c=gDifvm1nukxhk3RIgBkOS62Ik0mdzUNa6fs8_aPr-94= " alt=" "></img>
          </div>
          <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
            <h1 className="row-div">FEED BETTER LIVE BETTER.</h1>
            <hr></hr>
            <p className="lead">
              <ul>
                <li>Buy Flowers and Fruits</li>
                <li>Buy Fresh Vegtables</li>
                <li>Online classes for learning to grow outdoors <br></br>and indoors</li>

              </ul>
              <hr></hr>
              <h3>Everything is<br></br>100% ORGANIC</h3>
            </p>

            {/* <img id="img2" src="https://images.unsplash.com/photo-1646801696575-488269802fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhcm1pbmclMjBmYXJtZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 " alt= " "></img> */}
          </div>
          <form id="form-1" className="d-flex" role="search" >
            <input className="form-control me-2" type="search" placeholder="Shop-now" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
    <div className="container" id="containerinfo">
    </div>
    <div id="intro-div">
      <div id="card-container">
        <div id="card-section" className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card cardshome" id="card-color-id1">
              <img src="https://images.unsplash.com/photo-1601171762590-72f42972b01c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXRzJTIwZmFybXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 id="card1-h5" className="card-title">Are you A farmer?</h5>
                <hr />
                <p id="p1-veg" className="card-text">We assure you about the quality of our vegetables.Just give it a try once .Hope you love
                  <hr />
                  <div className="button2">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item" id="veg-link-id">
                        <Link className="btn btn-dark " id="vegclickbtn" aria-current="page" to="/Farmerform">Click here</Link>
                      </li>
                    </ul>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div id="card2-image" className="card cardshome"  >
              <img src=" https://images.unsplash.com/photo-1502673205480-995bb5933cf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMGZhcm1zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 id="card2-h5" className="card-title">Do you want to do Volunteering at Farms?</h5>
                <hr />
                <div className="button2">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item " id="flower-link-id">
                      <p id="p3-flowers" className="card-text">We will help you in finding </p>
                      <hr></hr>
                      <Link className="btn btn-dark " id="flowerclickbtn" aria-current="page" to="/Volunteerform">Click here</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardshome" id="card-color-id3">
              <img src="https://media.istockphoto.com/id/1451689564/photo/farmer-using-tablet-to-contact-customer-in-orchard.jpg?b=1&s=170667a&w=0&k=20&c=Xi6i3PEPetF2gav6K8mYqBPqnlDDkGWoXGpvskSUhtw= " className="card-img-top" alt="..." />
              <div className="card-body">

                <h5 id="card3-h5" className="card-title">Are you a Learner?</h5>
                <hr />
                <p id="p3-fruits" className="card-text">Learn from the experienced Farmers here at their fields</p>
                <hr />
                <div className="button2">

                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" id="fruit-link-id">
                      <Link className="btn btn-dark " id="fruitsclickbtn" aria-current="page" to="/Contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="service">Services</div>
    <div id="mid-para" className="clearfix">
      <div className="container text-center">
        <div className="row">
          <div id="ul-id1" className="col align-self-start">
           
            <img id="mid-para-img1" src="https://images.unsplash.com/photo-1545830790-68595959c491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhcm1lcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 " alt=" "></img>
            <ul>   
              <li><b>Get Physical classes from farmers on the fields.</b></li>
              <li><b>Experienced farmers are teacher here</b></li>
              <li><b>Also,Online classes for indoor planting</b></li>

            </ul>

          </div>
          <div id="ul-id2" className="col align-self-center">
            <img id="mid-para-img2" src="https://images.unsplash.com/photo-1586973831237-7d8dd03a996f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGZhcm1lcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 " alt=""></img>
            <ul>
              <li><b>Learn by working yourself</b></li>
              <li><b>Even weekend classes are available too</b></li>
              <li><b>Inspecting committee will always be there with you</b></li>
            </ul>
          </div>
          <div id="ul-id3" className="col align-self-end">
            <img id="mid-para-img3" src=" https://images.unsplash.com/photo-1606209035090-6bd9a57a97fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxmYXJtZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=" "></img>
            <ul>
              <li><b>Make someone smile everyday</b></li>
              <li><b>Help in selling too </b></li>
              <li><b>Utilize your time here </b></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   <div className="outer">
    <div id="lasthomehead" className="container text-center">
      <div className="row">
        <div id="lasthomedivid" className="col-md">
          <p id="lasthomepara">
          Come with your friends ,families and childrens.<br>
          </br> Best Stress-buster<br></br><hr></hr>
          Want to know more?
          <br></br>Go to About page.
          Want to join us ?
          <h3 id="lasthomeh3">Great! </h3>
          
          Go to Our Contact page.
        </p></div>
      </div>
    </div>
    </div>

    
    <div id="footer">
      <footer>
        ALL rights are reserved to the owner<br></br>
        &copy;copyright reserved.
      </footer>
    </div>
  </>)
}
export default Home;