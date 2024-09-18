import React from "react";
import img from "../assets/img/sec.JPG"

const Ourpage = () => {
  return (
    <div>
      <section id="about" class="about mb-0">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>OUR SOLUTIONS TO THE ABOVE-MENTIONED PROBLEMS</h3>
              <p class="poopins" style={{ color: "black" }}>
                Connecting with customers at the right time is crucial for
                profitable customer engagement. Wishing someone a happy birthday
                and offering them a discount code or reminding a person the item
                in their cart is running out of stock can be the difference
                between someone converting or walking away. Our software
                applications tend to resolve the problems in the following
                manner:
              </p>
              <ul>
                <li>
                  <i class="bi bi-check-circle"></i>Instant Editing and
                  Rescheduling: Users have the flexibility to edit or reschedule
                  messages even after they are scheduled, allowing for
                  last-minute changes or updates.
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> Security and Reliability:
                  Our application prioritizes data security, employing robust
                  encryption measures to safeguard user information and
                  messages. The platform is built for reliability, ensuring
                  scheduled messages are delivered promptly and accurately.
                </li>
              
              </ul>
              <p>
                Incorporation of AI features: Innovation is ingrained in our
                DNA. Utilizing Artificial Intelligence, our application suggests
                messaging options on the basis of the picture clicked by the
                user. It also suggests optimal scheduling times based on
                historical user engagement patterns, increasing the likelihood
                of messages being noticed. Our application also generates a
                detailed analysis report highlighting the engagement patterns of
                the customers.
              </p>
            </div>
            <div
              class="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="about-img">
                <img
                  src={img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourpage;
