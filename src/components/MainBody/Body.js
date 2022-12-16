import React from "react";
import {
  AdvancedData,
  BasicData,
  TeamData,
} from "../PriceAndPlansComponent/PriceAndPlans";
import "./Body.css";

export const Body = () => {
  return (
    <div class="Body-container">
      <div class="body-top-container d-flex flex-column justify-content-center">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6">
              <h5>Software Company</h5>
              <h1>Mobile App</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Accumsan porttitor egestas fermentum nulla.
              </p>
              <div>
                <button class="body-top-container-button btn btn-lg display-4">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-12 md-pb col-lg-3">
              <img
                src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/features1.jpg"
                alt="Assets Feature img"
                class="rounded-3 body-features-image"
              />
            </div>
            <div class="free-consulation-container col-12 col-md-12 col-lg-9 pt-5 pb-5">
              <div class="card pt-5 pb-5">
                <div class="wrapper pt-5 pb-5 d-flex flex-column justify-content-center align-self-center">
                  <h5 class="body-card-header-caption">
                    HTML, CSS, JS, Python
                  </h5>
                  <h1 class="body-card-header">What We Do</h1>
                  <p class="body-card-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Accumsan porttitor egestas fermentum nulla.
                  </p>
                  <div>
                    <ul>
                      <li className="body-card-list">
                        App Design & Development
                      </li>
                      <li className="body-card-list">
                        App Design & Development
                      </li>
                      <li className="body-card-list">
                        Sass & Pos Software Design
                      </li>
                    </ul>
                  </div>
                  <div class='align-left mbr-section-btn mt-4"'>
                    <button class="btn btn-lg  body-card-button rounded-3 pt-3 pb-3 ps-5 pe-5">
                      Free Consulation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-price-plan-container p-5">
        <div class="container d-flex flex-row justify-content-center">
          <div class="row Body-price-caption-container w-100">
            <div class="col-12 pb-5 col-lg-9 w-100 text-center">
              <h5> Price & Plans</h5>
              <h1>Price and Plans</h1>
            </div>
            <div class="row d-flex justify-content-center">
              <div class="card body-price-plan-card col-12 col-md-6 col-lg-3 m-lg-3 p-5 rounded-4 border-0">
                <div class="card-wrapper body-card-warapper-container">
                  {BasicData.map((each) => (
                    <div class="card-box">
                      <h4>{each.title}</h4>
                      <h1>
                        <strong>{each.price}</strong>
                      </h1>
                      <div>
                        {each.list.map((item) => (
                          <ul>
                            <li class="body-price-plan-card-list">{item}</li>
                          </ul>
                        ))}
                      </div>
                      <div class="text-center col-auto pt-3">
                        <button class="btn btn-lg body-price-plan-card-button rounded-3 pt-3 pb-3 ps-5 pe-5">
                          {each.button}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div class="card body-price-plan-card body-price-plan-card1 col-12 col-md-6 col-lg-3 m-lg-3 p-5 rounded-4 border-0">
                <div class="card-wrapper body-card-warapper-container">
                  {AdvancedData.map((each) => (
                    <div class="card-box">
                      <h4>{each.title}</h4>
                      <h1>
                        <strong>{each.price}</strong>
                      </h1>
                      <div>
                        {each.list.map((item) => (
                          <ul>
                            <li class="body-price-plan-card-list body-price-plan-card-list1">
                              {item}
                            </li>
                          </ul>
                        ))}
                      </div>
                      <div class="text-center col-auto pt-3">
                        <button class="btn btn-lg body-price-plan-card-button body-price-plan-card-button1 pt-3 pb-3 ps-5 pe-5">
                          {each.button}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div class="card body-price-plan-card col-12 col-md-6 col-lg-3 p-5 rounded-4 border-0 m-lg-3">
                <div class="card-wrapper body-card-warapper-container">
                  {TeamData.map((each) => (
                    <div class="card-box">
                      <h4>{each.title}</h4>
                      <h1>
                        <strong>{each.price}</strong>
                      </h1>
                      <div>
                        {each.list.map((item) => (
                          <ul>
                            <li class="body-price-plan-card-list">{item}</li>
                          </ul>
                        ))}
                      </div>
                      <div class="text-center col-auto pt-3">
                        <button class="btn btn-lg body-price-plan-card-button pt-3 pb-3 ps-5 pe-5">
                          {each.button}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="percentage-continer">
        <div class="container">
          <div class="row justify-content-center">
            <div class="card percentage-card col-12 col-md-6 col-lg-4 p-5">
              <div class="card-wrapper d-flex justify-content-center align-items-start">
                <div class="icon-wrapper arrow-up-icon-container mt-2">
                  <i class="bi bi-arrow-up arrow-up-icon"></i>
                </div>
                <div class="ps-4">
                  <h1 class="percentage-header">
                    <strong>5.37%</strong>
                  </h1>
                  <p class="review-description">Monthly income</p>
                </div>
              </div>
            </div>
            <div class="card percentage-card col-12 col-md-6 col-lg-4 p-5">
              <div class="card-wrapper d-flex justify-content-center align-items-start">
                <div class="icon-wrapper arrow-up-icon-container mt-2">
                  <i class="bi bi-arrow-up arrow-up-icon"></i>
                </div>
                <div class="ps-4">
                  <h1 class="percentage-header">
                    <strong>8.93%</strong>
                  </h1>
                  <p class="review-description">New clients</p>
                </div>
              </div>
            </div>
            <div class="card percentage-card col-12 col-md-6 col-lg-4 p-5">
              <div class="card-wrapper d-flex justify-content-center align-items-start">
                <div class="icon-wrapper arrow-up-icon-container mt-2">
                  <i class="bi bi-arrow-up arrow-up-icon"></i>
                </div>
                <div class="ps-4">
                  <h1 class="percentage-header">
                    <strong>4.25%</strong>
                  </h1>
                  <p class="review-description">Good reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-5">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-6">
              <div>
                <img
                  src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/features2.jpg"
                  alt="/"
                  class="feature-image2 rounded-4 w-100"
                />
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-6 m-auto p-5">
              <div class="content">
                <div class="mb-5">
                  <h5 class="review-description">FAQ</h5>
                  <h1>
                    <strong>Get every answers From here.</strong>
                  </h1>
                </div>
                <div>
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item mb-3">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button
                          class="accordion-button  collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Lorem ipsum dolor sit amet augue neque
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque nec purus ut massa hendrerit
                          fringilla luctus mattis diam. Integer mollis
                          sollicitudin tincidunt.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item mb-3">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Pellentesque nec purus ut massa finibus
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque nec purus ut massa hendrerit
                          fringilla luctus mattis diam. Integer mollis
                          sollicitudin tincidunt.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item mb-3">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Mauris porttitor tempor orci vitae molestie
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque nec purus ut massa hendrerit
                          fringilla luctus mattis diam. Integer mollis
                          sollicitudin tincidunt.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingFour">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          Ut ultricies impediet volutpat
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque nec purus ut massa hendrerit
                          fringilla luctus mattis diam. Integer mollis
                          sollicitudin tincidunt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-app-integration-container p-5">
        <div class="container">
          <div class="row w-100 justify-content-center">
            <div class="col-12 mb-5 col-lg-9 text-center ">
              <h5 class="review-description">Intregrations</h5>
              <h1>
                <strong>Mobile App Intregrations</strong>
              </h1>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="card col-12 col-md-6 md-pb col-lg-3 p-5 mobile-app-integration-card rounded-4 m-lg-3">
              <div class="card-wrapper pb-4">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon-container">
                    <i class="bi bi-palette palette-icon"></i>
                  </div>
                  <h2 class="ms-3">Design</h2>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id libero.
              </p>
              <h5 class="read-more-caption">Read More</h5>
            </div>
            <div class="card col-12 col-md-6 md-pb col-lg-3 p-5 mobile-app-integration-card rounded-4 m-lg--3">
              <div class="card-wrapper pb-4">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon-container">
                    <i class="bi bi-code-slash palette-icon"></i>
                  </div>
                  <h2 class="ms-3">Code</h2>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id libero.
              </p>
              <h5 class="read-more-caption">Read More</h5>
            </div>
            <div class="card col-12 col-md-6 md-pb col-lg-3 p-5 mobile-app-integration-card rounded-4 m-lg-3">
            <div class="card-wrapper pb-4">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon-container">
                    <i class="bi bi-hand-index palette-icon"></i>
                  </div>
                  <h2 class="ms-3">Design</h2>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id libero.
              </p>
              <h5 class="read-more-caption">Read More</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="p-5">
        <div class="container">
          <div class="row d-flx flex-row justify-content-center">
            <div class="col-12 mb-5 text-center">
              <p class="review-description">Experts</p>
              <h1 class="our-team-memebers-header">Our Team Members</h1>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card-wrap text-center our-team-members-card pt-5 rounded-3">
                <div class="image-wrap">
                  <img
                    src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team1.jpg"
                    alt="/"
                    class="w-75 rounded-circle mb-4"
                  />
                </div>
                <div class="content-wrap">
                  <h3>John Smith</h3>
                  <p class="mb-5">Programmer</p>
                  <div class="d-flex flex-row justify-content-center">
                    <div class="social-network-icon-container rounded-top m-lg-3">
                      <i class="bi bi-facebook social-network-icon"></i>
                    </div>
                    <div class="social-network-icon-container rounded-top m-lg-3">
                      <i class="bi bi-twitter social-network-icon"></i>
                    </div>
                    <div class="social-network-icon-container rounded-top m-lg-3">
                      <i class="bi bi-instagram social-network-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card-wrap text-center our-team-members-card pt-5 rounded-3">
                <div class="image-wrap">
                  <img
                    src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team2.jpg"
                    alt="/"
                    class="w-75 rounded-circle mb-4"
                  />
                </div>
                <div class="content-wrap">
                  <h3>Sarah Palmer</h3>
                  <p class="mb-5">Manager</p>
                  <div class="d-flex flex-row justify-content-center">
                    <div class="social-network-icon-container rounded-top m-lg-3">
                      <i class="bi bi-facebook social-network-icon"></i>
                    </div>
                    <div class="social-network-icon-container rounded-top m-lg-3">
                      <i class="bi bi-twitter social-network-icon"></i>
                    </div>
                    <div class="social-network-icon-container rounded-top m-lg-3">
                      <i class="bi bi-instagram social-network-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card-wrap text-center our-team-members-card pt-5 rounded-3">
                <div class="image-wrap">
                  <img
                    src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team3.jpg"
                    alt="/"
                    class="w-75 rounded-circle mb-4"
                  />
                </div>
                <div class="content-wrap">
                  <h3>Adam Swift</h3>
                  <p class="mb-5">Analyst</p>
                  <div class="d-flex flex-row justify-content-center">
                    <div class="social-network-icon-container rounded-top m-lg-3">
                      <i class="bi bi-facebook social-network-icon"></i>
                    </div>
                    <div class="social-network-icon-container rounded-top m-lg-3">
                      <i class="bi bi-twitter social-network-icon"></i>
                    </div>
                    <div class="social-network-icon-container rounded-top m-lg-3">
                      <i class="bi bi-instagram social-network-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card-wrap text-center our-team-members-card pt-5 rounded-3">
                <div class="image-wrap">
                  <img
                    src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team4.jpg"
                    alt="/"
                    class="w-75 rounded-circle mb-4"
                  />
                </div>
                <div class="content-wrap">
                  <h3>Helen Smith</h3>
                  <p class="mb-5">Designer</p>
                  <div class="d-flex flex-row justify-content-center">
                    <div class="social-network-icon-container rounded-top m-lg-3">
                      <i class="bi bi-facebook social-network-icon"></i>
                    </div>
                    <div class="social-network-icon-container rounded-top m-lg-3">
                      <i class="bi bi-twitter social-network-icon"></i>
                    </div>
                    <div class="social-network-icon-container rounded-top m-lg-3">
                      <i class="bi bi-instagram social-network-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-container p-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-6 pb-4 md-pb">
              <h5 class="review-description">About Us</h5>
              <h1 class="percentage-header">
                Choose What Matters To Your Software
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitdo
                eiusmod temporeum dicant partem scripserit.
              </p>
            </div>
            <div class="col-md-12 col-lg-6 pt-4">
              <div class="progress1 w-100 lh-s1">
                <div class="progress-title d-flex justify-content-between ">
                  <div>
                    <p>User Research</p>
                  </div>
                  <div>
                    <p>92%</p>
                  </div>
                </div>
                <progress min="0" max="100" value="92" class='w-100 mb-3'/>
              </div>
              <div class="progress1 w-100">
                <div class="progress-title d-flex justify-content-between">
                  <div>
                    <p>UX Focus</p>
                  </div>
                  <div>
                    <p>71%</p>
                  </div>
                </div>
                <progress min="0" max="100" value="92" class='w-100 mb-3'/>
              </div>
              <div class="progress1 w-100">
                <div class="progress-title d-flex justify-content-between">
                  <div>
                    <p>Clients Support</p>
                  </div>
                  <div>
                    <p>53%</p>
                  </div>
                </div>
                <progress min="0" max="100" value="92" class='w-100'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class = 'image-container pb-5'>
        <div class='container'>
          <div class='row'>
            <div class='col-12 col-md-12'>
              <div class='row'>
                <div class='col-12 col-lg-6'>
                  <div class='image-item'>
                    <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/features3.jpg" alt="/" class='image-feature rounded-4 mb-3 w-100'/>
                  </div>
                </div>
                <div class='col-12 col-lg-6'>
                  <div class='image-item'>
                    <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/features2.jpg" alt="" class=' image-feature rounded-4 mb-4 w-100'/>
                  </div>
                </div>
                <div class='col-12 col-lg-12'>
                  <div class='image-item'>
                    <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/background3.jpg" width='100' height='50' alt ='/' class='w-100 image-feature rounded-4 '/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='clients-container p-5'>
        <div class='container'>
          <div class='row'>
            <div class='col-12 text-center pb-5'>
              <h1 class='client-text'>Our Clients</h1>
            </div>
          </div>
          <div class='row client-images-container pb-5'>
            <div class='col-md-3 card border-0 rounded-0 rounded-start p-5 client-card'>
              <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/1.png" alt="/" class='w-75 align-self-center'/>
            </div>
            <div class='col-md-3 card border-0 rounded-0 p-5'>
              <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/2.png" alt="/" class='w-75 align-self-center'/>
            </div>
            <div class='col-md-3 card border-0 rounded-0 p-5'>
              <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/3.png" alt="/" class='w-75 align-self-center'/>
            </div>
            <div class='col-md-3 card border-0 rounded-0 rounded-end p-5'>
              <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/4.png" alt="/" class='w-75 align-self-center'/>
            </div>
          </div>
        </div>
      </div>
      <div class='update-section'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-12 col-lg-6'>
              <div class=''>
                <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/background4.jpg" alt="/" class='update-image w-100'/>
              </div>
            </div>
            <div class='col-lg-6 m-auto ps-5 pe-5 pt-5'>
              <div class='update-container'>
                <h5>Get Newsletter</h5>
                <h1><strong>Get every weekly update feeds</strong></h1>
                <form>
                  <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name"/>
                  </div>
                  <div class="mb-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter email address"/>
                  </div>
                  <div class='text-end'>
                  <button type="submit" class="btn btn-lg body-price-plan-card-button update-button pt-3 pb-3 ps-5 pe-5 ">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='p-5'>
        <div class='container'>
          <div class='row'>
            <div class='col-12 pt-4 pb-5'>
              <p class='review-description'>Testimonials</p>
              <h1 class='our-team-memebers-header'>Our Client Feedbacks</h1>
            </div>
            <div class='col-sm-6 col-lg-3 m-lg-3 feedback-container'>
              <div class='card client-feedback-card p-5 rounded-4 border-0'>
                <i class="bi bi-quote quote-icon align-self-start"></i>
                <p class='feedback-description'>Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. 
                  Vitae curabitur libero felis 
                  ullamcorper.</p>
                  <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team1.jpg" alt="/" class='w-50 rounded-circle feedback-images'/>
                  <div>
                    <h4>John Smith</h4>
                    <p class='review-description'>Programmer</p>
                  </div>
              </div>

            </div>
            <div class='col-sm-6 col-lg-3 m-lg-3 feedback-container'>
              <div class='card client-feedback-card p-5 rounded-4 border-0'>
                <i class="bi bi-quote quote-icon align-self-start"></i>
                <p class='feedback-description'>Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. 
                  Vitae curabitur libero felis 
                  ullamcorper.</p>
                  <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team2.jpg" alt="/" class='w-50 rounded-circle feedback-images'/>
                  <div>
                    <h4>Sarah Palmer</h4>
                    <p class='review-description'>Manager</p>
                  </div>
              </div>

            </div>
            <div class='col-sm-6 col-lg-3 m-lg-3 feedback-container'>
              <div class='card client-feedback-card p-5 rounded-4 border-0'>
                <i class="bi bi-quote quote-icon align-self-start"></i>
                <p class='feedback-description'>Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. 
                  Vitae curabitur libero felis 
                  ullamcorper.</p>
                  <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team3.jpg" alt="/" class='w-50 rounded-circle feedback-images'/>
                  <div>
                    <h4>Adam Swift</h4>
                    <p class='review-description'>Designer</p>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class='google-map w-100'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14313.005520789404!2d80.21950042488757!3d12.932729768572171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1666174127714!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" height='500' referrerpolicy="no-referrer-when-downgrade" title="/" class='w-100'></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
