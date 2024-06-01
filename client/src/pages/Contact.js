import React from 'react'
import Layout from './../components/Layout/Layout'
import {BiMailSend, BiPhoneCall, BiSupport} from 'react-icons/bi';

const Contact = () => {
  return (
    <Layout title={'Contact Us'}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{width: "100%"}}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and information about the products, feel free to call us, we are available 24/7.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.manager@companyname.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91 99994-44322
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0001-1234
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact