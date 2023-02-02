import React, { useState } from "react";
import PageTitle from "../components/pagetitle";
import Loader from "../NewComponents/loader/loader";
import { useForm } from "react-hook-form";

function Contact(props) {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm();
  const [data, setData] = useState({});

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendEmail = (data, e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_l029rhu",
    //     "template_4q0p40m",
    //     form.current,
    //     "Sz5nHTgdr-rAs6Oht"
    //   )
    //   .then(
    //     (result) => {
    //       Swal.fire(
    //         "Good job!",
    //         "Message Send Successfully :)",
    //         "success",
    //         "Close"
    //       );
    //     },
    //     (error) => {
    //       Swal.fire({
    //         title: "Error!",
    //         text: "Something went wrong message could not be sent :) ",
    //         icon: "error",
    //         button: "ok!",
    //       });
    //     }
    //   );

    console.log(data);
    reset();
  };

  return (
    <div>
      <Loader />
      <PageTitle title="Contact Us" />
      <section className="tf-section tf-contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-12">
              <div
                className="content-about m-b50 mobie-40"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="tf-title st2 m-b17">
                  <h4 className="title">Have a question </h4>
                </div>
                <p className="me-2">
                  Fill up the Form and our team will get back to within 24 hrs
                </p>
              </div>
              <form
                action="contact/contact-process.php"
                className="form-contact"
                id="contactform"
                data-aos="fade-right"
                data-aos-duration="800"
                // ref={form}
                onSubmit={handleSubmit(sendEmail)}
              >
                <fieldset>
                  <input
                    type="text"
                    name="fullName"
                    id="name"
                    placeholder="Name"
                    maxLength="50"
                    onChange={(e) => onInputChange(e)}
                    {...register("fullName", {
                      required: "Name is required",
                      maxLength: 50,
                      minLength: 1,
                      pattern: {
                        value: /^[A-Z a-z]+$/,
                        message: "Value is Invalid",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("fullName");
                    }}
                  />
                  {errors.fullName && (
                    <small className="text-danger error-text">
                      {errors.fullName.message}{" "}
                    </small>
                  )}
                </fieldset>
                <fieldset>
                  <input
                    type="email"
                    name="email"
                    maxLength={35}
                    id="mail"
                    placeholder="Email Address"
                    onChange={(e) => onInputChange(e)}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                        message: "Value is Invalid",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("email");
                    }}
                  />
                  {errors.email && (
                    <small className="text-danger error-text">
                      {errors.email.message}{" "}
                    </small>
                  )}
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    maxLength={13}
                    onChange={(e) => onInputChange(e)}
                    {...register("phone", {
                      required: "phone number is required",
                      // maxLength: 13,
                      pattern: {
                        value: /^[6-9]{1}[0-9]{9}$/,
                        message: "Value is Invalid",
                      },
                    })}
                    onKeyUp={(e) => {
                      trigger("phone");
                    }}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                  {errors.phone && (
                    <small className="text-danger error-text">
                      {errors.phone.message}{" "}
                    </small>
                  )}
                </fieldset>
                <fieldset>
                  <textarea
                    rows={7}
                    name="message"
                    placeholder="Your Message Here"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    onKeyUp={() => {
                      trigger("message");
                    }}
                  ></textarea>
                  {errors.message && (
                    <small className="text-danger textarea-input error-text">
                      {errors.message.message}
                    </small>
                  )}
                </fieldset>
                <button className="tf-button btn-effect" type="submit">
                  <span className="boder-fade"></span>
                  <span className="effect">Send Message</span>
                </button>
              </form>
            </div>
            <div className="col-xl-7  col-md-12">
              <div
                className="contact-details"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="adress wrap-fx d-flex flex-sm-row flex-column">
                  <div className="location">
                    <h6>Location</h6>
                    <ul>
                      <li>2163 Phillips Gap Rd West Jefferson,NC, 28694</li>
                    </ul>
                  </div>
                  <div className="ms-sm-4 ms-0 mt-sm-0 mt-4">
                    <h6>Contact Us</h6>
                    <ul>
                      <li>+1 666 8888</li>
                      <li>Info.avitex@gmail.com</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="flat-map wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <iframe
                    title="map"
                    className="map-content"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2684101382683!2d76.96236931416306!3d11.01847709215756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8578257bc41fb%3A0x85aa2e87361a5150!2sCloudin!5e0!3m2!1sen!2sin!4v1672996694021!5m2!1sen!2sin"
                    width="1720"
                    height="655"
                    allowFullScreen=""
                    loading="lazy"
                  />

                  {/* <iframe title='map' className="map-content" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4457.30210514409!2d144.9550716623184!3d-37.818421643591336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20%C3%9Ac!5e0!3m2!1svi!2s!4v1631871760998!5m2!1svi!2s" width="1720" height="655" allowFullScreen="" loading="lazy" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
