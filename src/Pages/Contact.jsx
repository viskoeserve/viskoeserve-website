import React from "react";
import map from "../assets/img/map.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();

    const contactData = {
      li_subject: data.subject,
      li_name: data.name,
      li_email: data.email,
      li_message: data.message,
      li_company: "Visko Eserve Private Limted",
    };

    axios
      .post(
        "https://visko.group/api/inquiry/message/insert-message",
        contactData
      )
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${response.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    reset();
  };
  return (
    <div>
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>
        </div>

        <div class="container" data-aos="fade-up">
          <div class="row mt-5">
            <div class="col-lg-4">
              <div class="info">
                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@Viskoeserve.com</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 9685896876</p>
                </div>
              </div>
            </div>

            <div class="col-lg-8 mt-5 mt-lg-0">
              <form
                role="form"
                class="php-email-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                      {...register("name")}
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    {...register("subject", { required: true })}
                  />
                  {errors.subject && <span>This field is required</span>}
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="8"
                    placeholder="Message"
                    required
                    {...register("message", { required: true })}
                  ></textarea>
                  {errors.message && <span>This field is required</span>}
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
