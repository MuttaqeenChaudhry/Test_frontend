'use client'
import React from "react";

export default function page() {
  const CaptureData =(e : any)=>{
    e.preventDefault();
    const name = document.getElementById('name') as HTMLInputElement;
    const pNo = document.getElementById('pNo') as HTMLInputElement;
    const location = document.getElementById('location') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const img0 = document.getElementById('img0') as HTMLInputElement;
    const img1 = document.getElementById('img1') as HTMLInputElement;
    const img2 = document.getElementById('img2') as HTMLInputElement;
    const img3 = document.getElementById('img3') as HTMLInputElement;
    const img4 = document.getElementById('img4') as HTMLInputElement;
    const make = document.getElementById('make') as HTMLInputElement;
    const model = document.getElementById('model') as HTMLInputElement;
    const year = document.getElementById('year') as HTMLInputElement;
    const color = document.getElementById('color') as HTMLInputElement;
    const mileage = document.getElementById('mileage') as HTMLInputElement;
    const vin = document.getElementById('vin') as HTMLInputElement;
    const condition = document.getElementById('condition') as HTMLInputElement;
    const serviceHistory1 = document.getElementById('serviceHistory1') as HTMLInputElement;
    const serviceHistory2 = document.getElementById('serviceHistory2') as HTMLInputElement;
    const askingPrice = document.getElementById('askingPrice') as HTMLInputElement;
    let negotiable;
    const radioButtons = document.getElementsByName('negotiable') as NodeListOf<HTMLElement>;
    for(const neg of radioButtons){
      if(neg instanceof HTMLInputElement && neg.checked){
        negotiable = neg.value;
        break;
      }
    };
    const reasonForSelling = document.getElementById('reasonForSelling') as HTMLInputElement;
    const paymentMethod = document.getElementById('paymentMethod') as HTMLInputElement;
    let testDriveAvl;
    const radioButtons2 = document.getElementsByName('testDriveAvailable') as NodeListOf<HTMLElement>;
    for(const tda of radioButtons2){
      if(tda instanceof HTMLInputElement && tda.checked){
        testDriveAvl = tda.value;
        break;
      }
    };
    const title = document.getElementById('title') as HTMLInputElement;
    const registration = document.getElementById('registration') as HTMLInputElement;
    let inspection;
    const radioButtons3 = document.getElementsByName('inspectionAllowed') as NodeListOf<HTMLElement>;
    for(const insA of radioButtons3){
      if(insA instanceof HTMLInputElement && insA.checked){
        inspection = insA.value;
        break;
      }
    };
    const saleTerms = document.getElementById('saleTerms') as HTMLInputElement;
    if(name && pNo && location && email && img0 && img1 && img2
      && img3 && img4 && make && model && year && color && mileage
      && vin && condition && serviceHistory1 && serviceHistory2
      && askingPrice && negotiable && reasonForSelling && paymentMethod
      && testDriveAvl && title && registration && inspection && saleTerms) {
        const PostAd = fetch('http://localhost:3001/motorcars/newad', {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            name : name.value,
            pNo : pNo.value,
            location : location.value,
            email : email.value,
            make : make.value,
            model : model.value,
            year : year.value,
            color : color.value,
            mileage : mileage.value,
            vin : vin.value,
            condition : condition.value,
            serviceHistory1 : serviceHistory1.value,
            serviceHistory2 : serviceHistory2.value,
            img0 : img0.value,
            img1 : img1.value,
            img2 : img2.value,
            img3 : img3.value,
            img4 : img4.value,
            askingPrice : askingPrice.value,
            negotiable : negotiable,
            reasonForSelling : reasonForSelling.value,
            paymentMethod : paymentMethod.value,
            testDriveAvl : testDriveAvl,
            title : title.value,
            registration : registration.value,
            inspection : inspection,
            saleTerms : saleTerms.value
          })
        })
        alert('Submission Successful');
      }
      else {
        alert('There Seems to be an issue with your browser')
      }



  }
  return (
    <>
      <div>
        <div>
          <div className="w-[98%] m-auto mt-9">
            <fieldset className="border border-black">
              <legend className="w-fit m-auto">Ad For New Car</legend>
              <form onSubmit={CaptureData}>
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
                        id='name'
                      />
                      <label htmlFor="pNo">Phone Number</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        placeholder="Phone No"
                        name="pNo"
                        id='pNo'
                      />
                      <label htmlFor="location">Location</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        placeholder="Location"
                        name="location"
                        id='location'
                      />
                      <label htmlFor="email">Email</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="email"
                        placeholder="Email"
                        name="email"
                        id='email'
                      />
                      <fieldset className="border border-black  p-2">
                        <legend className="text-red-500 ml-1">Max 5 Images</legend>
                      <label htmlFor="email">Put 5 URLs below</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        placeholder="imgURL1"
                        name="img0"
                        id='img0'
                      />
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        placeholder="imgURL2"
                        name="img1"
                        id='img1'
                      />
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        placeholder="imgURL3"
                        name="img2"
                        id='img2'
                      />
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        placeholder="imgURL4"
                        name="img3"
                        id="img3"
                      />
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        placeholder="imgURL5"
                        name="img4"
                        id="img4"
                      />
                      </fieldset>
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
                        id="make"
                      />
                      <label htmlFor="model">Model</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="model"
                        id="model"
                      />
                      <label htmlFor="year">Year</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="number"
                        name="year"
                        id="year"
                      />
                      <label htmlFor="color">Color</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="color"
                        id="color"
                      />
                      <label htmlFor="mileage">Mileage</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="number"
                        name="mileage"
                        id="mileage"
                      />
                      <label htmlFor="vin">VIN</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="vin"
                        id="vin"
                      />
                      <label htmlFor="condition">Condition</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="condition"
                        id="condition"
                      />
                      <label htmlFor="serviceHistory1">Service History</label>
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="serviceHistory1"
                        placeholder="Service1"
                        id="serviceHistory1"
                      />
                      <input
                        className="block border pt-1 pb-1"
                        type="text"
                        name="serviceHistory2"
                        placeholder="Service2"
                        id="serviceHistory2"
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
                        id="askingPrice"
                      />
                      <label htmlFor="true">Negotiable</label>
                      <br />
                      Yes
                      <input
                        className="inline-block pt-1 pb-1 ml-1 mr-2 mb-1"
                        type="radio"
                        name="negotiable"
                        value="true"
                        id="negotiable"
                      />
                      No
                      <input
                        className="inline-block pt-1 pb-1 ml-1 mb-1"
                        type="radio"
                        name="negotiable"
                        value="false"
                        id="negotiable"
                      />
                      <br />
                      <label htmlFor="reasonForSelling">
                        Reason of Selling
                      </label>
                      <input
                        className="block border pt-1 pb-1 mt-1 mb-1"
                        type="text"
                        name="reasonForSelling"
                        id="reasonForSelling"
                      />
                      <label htmlFor="paymentMethod">Method of Payment</label>
                      <input
                        className="block border pt-1 pb-1 mt-1 mb-1"
                        type="text"
                        name="paymentMethod"
                        id="paymentMethod"
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
                          id="title"
                        />
                        <label htmlFor="registration">Registration</label>
                        <input
                          className="block border pt-1 pb-1 mt-1 mb-1"
                          type="text"
                          name="registration"
                          id="registration"
                        />
                      </fieldset>
                      <label htmlFor="inspectionAllowed">
                        Inspection Allowed
                      </label>
                      <br />
                      Yes
                      <input
                        className="inline-block border pt-1 pb-1 mt-1 ml-1 mr-2 mb-1"
                        type="radio"
                        name="inspectionAllowed"
                        value="true"
                        id=""
                      />
                      No
                      <input
                        className="inline-block border pt-1 pb-1 mt-1 ml-1 mb-1"
                        type="radio"
                        name="inspectionAllowed"
                        value="false"
                        id=""
                      />
                      <br />
                      <label htmlFor="saleTerms">Sale Terms</label>
                      <input
                        className="block border pt-1 pb-1 mt-1 mb-1"
                        type="text"
                        name="saleTerms"
                        id="saleTerms"
                      />
                    </fieldset>
                  </div>
                </div>
                <div className="w-full mt-2 mb-2 ">
                <input className='block p-2 w-fit m-auto cursor-pointer bg-slate-900 text-white rounded-md hover:bg-slate-500' type="submit" value="Submit New Ad" />
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
}
