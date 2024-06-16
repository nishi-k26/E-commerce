import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text white text-centre">CONTACT US</h1>
          <p className="text-justify mt-2">About Us</p>
          <p className="mt-3">This is About us page.</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
