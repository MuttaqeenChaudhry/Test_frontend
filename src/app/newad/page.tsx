import React from "react";

export default function page() {
  return (
    <>
      <div>
        <div>
          <div className="w-[98%] m-auto mt-9">
            <fieldset className="border border-black">
              <legend className="w-fit m-auto">Ad For New Car</legend>
              <form action="">
                <div className="flex w-fit m-auto">
                  <div>
                    <fieldset className="w-fit ml-2 p-2 border border-black">
                      <legend className="w-fit ml-6">Basic Info</legend>
                      <label htmlFor="name">Name</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        placeholder="Name"
                        name="name"
                      />
                      <label htmlFor="pNo">Phone Number</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        placeholder="Phone No"
                        name="pNo"
                      />
                      <label htmlFor="location">Location</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        placeholder="Location"
                        name="location"
                      />
                      <label htmlFor="email">Email</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="email"
                        placeholder="Email"
                        name="email"
                      />
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="w-fit ml-2 p-2 border border-black">
                      <legend className="ml-6">Car Related Info</legend>
                      <label htmlFor="make">Company</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="make"
                        id=""
                      />
                      <label htmlFor="model">Model</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="model"
                        id=""
                      />
                      <label htmlFor="year">Year</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="number"
                        name="year"
                        id=""
                      />
                      <label htmlFor="color">Color</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="color"
                        id=""
                      />
                      <label htmlFor="mileage">Mileage</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="number"
                        name="mileage"
                        id=""
                      />
                      <label htmlFor="vin">VIN</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="vin"
                        id=""
                      />
                      <label htmlFor="condition">Condition</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="condition"
                        id=""
                      />
                      <label htmlFor="condition">Service History</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="serviceHistory[]"
                        placeholder="Service1"
                        id=""
                      />
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="serviceHistory[]"
                        placeholder="Service2"
                        id=""
                      />
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="w-fit ml-2 border border-black p-2">
                      <legend className="ml-2">Rest Info</legend>
                      <label htmlFor="askingPrice">Price Asked</label>
                      <input
                        className="block border pt-1 pb-1 mt-1 mb-1"
                        type="number"
                        name="askingPrice"
                        id=""
                      />
                      <label htmlFor="true">Negotiable</label>
                      <br />
                      Yes
                      <input
                        className="inline-block pt-1 pb-1 ml-1 mr-2 mb-1"
                        type="radio"
                        name="negotiable"
                        value="true"
                        id=""
                      />
                      No
                      <input
                        className="inline-block pt-1 pb-1 ml-1 mb-1"
                        type="radio"
                        name="negotiable"
                        value="false"
                        id=""
                      />
                      <br />
                      <label htmlFor="reasonForSelling">
                        Reason of Selling
                      </label>
                      <input
                        className="block border pt-1 pb-1 mt-1 mb-1"
                        type="text"
                        name="reasonForSelling"
                        id=""
                      />
                      <label htmlFor="paymentMethod">Method of Payment</label>
                      <input
                        className="block border pt-1 pb-1 mt-1 mb-1"
                        type="text"
                        name="paymentMethod"
                        id=""
                      />
                      <label htmlFor="testDriveAvailable1">Test Drive</label>
                      <br />
                      Yes
                      <input
                        className="inline-block border pt-1 pb-1 mt-1 ml-1 mr-2 mb-1"
                        type="radio"
                        name="testDriveAvailable"
                        value="true"
                        id=""
                      />
                      No
                      <input
                        className="inline-block border pt-1 pb-1 mt-1 ml-1 mb-1"
                        type="radio"
                        name="testDriveAvailable"
                        value="false"
                        id=""
                      />
                      <fieldset className="ml-2 border p-2 border-black w-fit">
                        <legend className="ml-2">Documentaion</legend>
                        <label htmlFor="title">Title</label>
                        <input
                          className="block border pt-1 pb-1 mt-1 mb-1"
                          type="text"
                          name="title"
                          id=""
                        />
                        <label htmlFor="registration">Registration</label>
                        <input
                          className="block border pt-1 pb-1 mt-1 mb-1"
                          type="text"
                          name="registration"
                          id=""
                        />
                      </fieldset>
                      <label htmlFor="inspectionAllowed1">
                        Inspection Allowed
                      </label>
                      <br />
                      Yes
                      <input
                        className="inline-block border pt-1 pb-1 mt-1 ml-1 mr-2 mb-1"
                        type="radio"
                        name="inspectionAllowed1"
                        value="true"
                        id=""
                      />
                      No
                      <input
                        className="inline-block border pt-1 pb-1 mt-1 ml-1 mb-1"
                        type="radio"
                        name="inspectionAllowed2"
                        value="false"
                        id=""
                      />
                      <br />
                      <label htmlFor="saleTerms">Sale Terms</label>
                      <input
                        className="block border pt-1 pb-1 mt-1 mb-1"
                        type="text"
                        name="saleTerms"
                        id=""
                      />
                    </fieldset>
                  </div>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
}
