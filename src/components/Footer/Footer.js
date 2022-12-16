import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div class='footer'>
      <div class='container'>
        <div class='row justify-content-center'>
          <div class='col-12 col-md-6 col-lg-4 border-col pt-5 pb-5 footer-card border-end'>
            <h1 class='pb-4'>Main Links</h1>
            <div class='row'>
              <div class='col-lg-6'>
                <ul class='list'>
                  <li class='list list1 item-wrap'>About Us</li>
                  <li class='list list1 item-wrap'>Services</li>
                  <li class='list list1 item-wrap'>Pricing</li>
                  <li class='list list1 item-wrap'>Portfolio</li>
                  <li class='list list1 item-wrap'>Contacts</li>
                  <li class='list list1 item-wrap'>Help</li>
                </ul>
              </div>
              <div class='col-lg-6'>
                <ul class='list'>
                  <li class='list list1 item-wrap'>Reviews</li>
                  <li class='list list1 item-wrap'>Best Products</li>
                  <li class='list list1 item-wrap'>categories</li>
                  <li class='list list1 item-wrap'>Brands</li>
                </ul>
              </div>
            </div>
          </div>
          <div class='col-12 col-md-6 col-lg-4 border-col pt-5 pb-5 footer-card border-end ps-5'>
            <h1 class='pb-4'>Get In Touch</h1>
            <div class='row'>
              <div class='col-lg-12 pb-5'>
                <ul class='list w-100'>
                  <li class='list list1 item-wrap w-100'>New Address</li>
                  <li class='list item-wrap w-100'>14/A, New Home Town, Nyc</li>
                  <li class='list list1 item-wrap'>Head Quatar</li>
                  <li class='list item-wrap'>71, Qlex Tower, Onthon, UK</li>
                </ul>
              </div>
              <div>
              <button class="body-top-container-button contact-us-btn btn btn-lg display-4">
                  Contact Us <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div class='col-12 col-md-6 col-lg-4 border-col pt-5 pb-5 footer-card  ps-5'>
            <h1 class='pb-4'>About</h1>
            <p>Mobirise is a free offline app for 
              Windows and Mac to easily create 
              small/medium websites, landing 
              pages, online resumes and 
              portfolios.</p>
              <h5>Social Contact</h5>
              <div class="d-flex flex-row">
                    <div class="border rounded mt-3 social-icons-containers d-flex flex-column justify-content-center align-items-center me-3">
                      <i class="bi bi-facebook"></i>
                    </div>
                    <div class="border rounded mt-3 social-icons-containers d-flex flex-column justify-content-center align-items-center me-3">
                      <i class="bi bi-twitter"></i>
                    </div>
                    <div class="border rounded mt-3 social-icons-containers d-flex flex-column justify-content-center align-items-center me-3">
                      <i class="bi bi-instagram"></i>
                    </div>
                    <div class='border rounded mt-3 social-icons-containers d-flex flex-column justify-content-center align-items-center'>
                    <i class="bi bi-behance"></i>
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </div>
  )
}
