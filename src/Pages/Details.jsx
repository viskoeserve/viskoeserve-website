import React from 'react'
import details from '../assets/img/deteail.avif'
import details2 from '../assets/img/deteail2.avif'
import details3 from '../assets/img/deteail3.avif'
import details4 from '../assets/img/deteail4.avif'
import detail from "../assets/img/AIM1.jpg"
import detail1 from "../assets/img/AIM2.jpg"
import detail2 from "../assets/img/heros.jpg"
const Details = () => {
  return (
    <div>
       <section id="specials" class="specials " >
      <div class="container" data-aos="fade-up" id='services'>

        <div class="section-title">
          <h2 style={{fontFamily:"poopins"}}>Services</h2>
          <p style={{fontFamily:"poopins"}}>PROBLEMS THAT WE AIM TO SOLVE</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-3">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1" style={{fontFamily:"poopins"}} >No option to schedule bulk messages</a>
              </li>
             
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-3" style={{fontFamily:"poopins"}}>Limited scope</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-4" style={{fontFamily:"poopins"}}>Non-incorporation of Artificial Intelligence</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-5" style={{fontFamily:"poopins"}}>Difficult-to-understand user interface:</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 mt-4 mt-lg-0">
            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    
                  <p></p>
                  <p>   </p>
<p style={{fontFamily:"poopins"}} className='fs-5'> A lot of such existing applications do not
provide the option to schedule bulk messages. Schedule bulk messages can be really
important when an organization specifically wants to target a huge range of
customers on a specific time;</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={detail2} alt="" class="img-fluid" style={{height:"250px"}}/>
                  </div>
                </div>
              </div>
             
              <div class="tab-pane" id="tab-3">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3></h3>
                    <p class="fst-italic"></p>
                  <p style={{fontFamily:"poopins"}} className='fs-5'>A lot of existing applications and softwares allow users to schedule
messages only in cases of birthdays or anniversaries, thereby leaving no option for
the user to schedule important or marketing communications</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img style={{height:"250px",width:"90%"}} src={detail} alt="" class="img-fluid"/>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-4">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3></h3>
                    <p class="fst-italic"></p>
                    <p style={{fontFamily:"poopins"}} className='fs-5'>AI-powered text messaging refers to the
integration of Artificial Intelligence (AI), specifically Natural Language Processing
(NLP) and Machine Learning (ML), into text-based communication in businesses. It
enables machines to understand, process, and generate text-based interactions
effectively. None of the existing mobile applications incorporate the use of artificial
intelligence for the purposes of messaging. With AI, it becomes easy for a customer,
especially a corporate to personalize their messages, segment their audience and
thereby reach the target audience in a more efficient manner.</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={details3} alt="" class="img-fluid" style={{height:"250px",width:"90%"}}/>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-5">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3></h3>
                    <p class=""></p>
                 <p style={{fontFamily:"poopins"}} className='fs-5'>The most important aspect for a user to use
an application is to understand the interface that it is built on. Existing mobile
applications come with unnecessary complex user interfaces which result in a lot of</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src={detail1} alt="" class="img-fluid" style={{height:"250px",width:"90%"}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Details
