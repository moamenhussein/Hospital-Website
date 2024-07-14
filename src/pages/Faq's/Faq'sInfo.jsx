import "./faqs.css";
import React from "react";

const FaqInfo = () => {
  return (
    <>
      <div className="faqConatiner mt-5 text-start">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fw-bold pt-5 pb-5 head"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How Doctor Can Ease Your Pain?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold pt-5 pb-5 head"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How do I withdraw from a subject?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold  pt-5 pb-5 head"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Understand Doctor Before You Regret?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="accordion accordion-flush mt-3" id="accordionFlushExample">
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold  pt-5 pb-5 head"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      What types of systems do you support?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> className.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold  pt-5 pb-5 head"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      We Teach You How To Feel Better?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> className.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold  pt-5 pb-5 head"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      How Can I Contact You?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> className.
                      This is the third item's accordion body. Nothing more
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqInfo;
