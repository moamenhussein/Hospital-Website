import React from "react";
import ContactCard from "./ContactCard";
import Image1 from "../../Assets/contactImage1.png";
import Image2 from "../../Assets/contactImage2.png";
import Image3 from "../../Assets/contactImage3.png";
const ContactParent = () => {
  return (
    <div className="content-contact">
      <div className="container text-center">
        <div className="row">
          <div className="col column">
            <ContactCard
              img={Image1}
              header="Contact Number"
              info="01024327924"
            />
          </div>
          <div className="col">
            <ContactCard
              img={Image2}
              header="Email Address"
              info="moamen.hussein3887@gmail.com"
            />
          </div>
          <div className="col">
            <ContactCard img={Image3} header="Address" info="Tanta, Egypt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactParent;
