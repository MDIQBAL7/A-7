import React from "react";

const Foooter = () => {
  return (
    <div className="bg-neutral mt-6 py-9">
      <footer className="footer sm:footer-horizontal text-neutral-content max-w-[1150px] mx-auto">
        <nav>
          <h6 className="text-white text-lg">CS — Ticket System</h6>
          <p className="max-w-[350px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </nav>
        <nav>
          <h6 className="text-white text-lg">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Contact saled</a>
        </nav>
        <nav>
          <h6 className="text-white text-lg">Services</h6>
          <a className="link link-hover">Products and services</a>
          <a className="link link-hover">Customer stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="text-white text-lg">Information</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="text-white text-lg">Social Links</h6>
          <a className="link link-hover">
            <i class="fa-brands fa-x-twitter mr-2"></i>
            @CS — Ticket System
          </a>
          <a className="link link-hover">
            <i class="fa-brands fa-linkedin-in mr-2"></i>
            @CS — Ticket System
          </a>
          <a className="link link-hover">
            <i class="fa-brands fa-facebook mr-2"></i>
            @CS — Ticket System
          </a>
          <a className="link link-hover">
            <i class="fa-solid fa-envelope mr-2"></i>
            support@cst.com
          </a>
        </nav>
      </footer>
         <p className="text-white text-center text-sm mt-9">© 2025 CS — Ticket System. All rights reserved.</p>
     
    </div>
  );
};

export default Foooter;
