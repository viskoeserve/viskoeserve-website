import React from 'react'
import product from "../assets/img/humming bird.jpg"

const OurProduct = () => {
  return (
    <div>
          <section id="about" class="about mt-0">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2  content">
            <div class="section-title">
          <h2 className=' text-dark fw-semibold'>Our Product</h2>
          <p>Hummingbird</p>
        </div>
             
            
              <ul>
                <li>
                  <i class="bi bi-check-circle"></i>
                  Visko E-Serve Pvt, also known for its specialization in creating innovative messaging apps, has created Hummingbird. A state-of-the-art messaging platform that is redefining communication.
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> Hummingbird is a seamless and intuitive messaging app that lets users communicate without being time-bound through scheduling. This means that users can schedule their messages for a particular time other than birthdays and anniversaries. Not only this, but users can schedule routine messages like setting alarms.
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> Therefore, Hummingbird is here to simplify communication, enhance connectivity, and foster meaningful connections. In a world, where everything seems noisy and blurry, Hummingbird is making communication efficient and enjoyable. 
                </li>
              </ul>
              {/* <p>
                Incorporation of AI features: Innovation is ingrained in our
                DNA. Utilizing Artificial Intelligence, our application suggests
                messaging options on the basis of the picture clicked by the
                user. It also suggests optimal scheduling times based on
                historical user engagement patterns, increasing the likelihood
                of messages being noticed. Our application also generates a
                detailed analysis report highlighting the engagement patterns of
                the customers.
              </p> */}
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0  order-lg-1 "
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="about-img">
                <img
                  src={product}
                  style={{width:"900px",height:"480px"}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default OurProduct
