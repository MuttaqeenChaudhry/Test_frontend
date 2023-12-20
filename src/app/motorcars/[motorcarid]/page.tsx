'use client'
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const CarouselComponent = dynamic(()=> import('/Code PlayGround/ReactApps/Test_App/frontend/src/components/carousel'), {ssr : false})

export default function page({ params }: { params: { motorcarid : number } }) {
  const[IndivAd, setIndivAd] = useState<any>(null);
  
  useEffect(()=>{
    const fetchData = async ()=> {
    const FetchAd = await fetch(`http://localhost:3001/motorcars/ad?Ad_id=${params.motorcarid }`,{
    method : 'GET', headers : {
      'Content-Type' : 'application/json',
      'Cache-Control' : 'no-cache'
    }
  });
  const ParseAd = await FetchAd.json();
  setIndivAd(ParseAd);
  }
  fetchData();
  },[params.motorcarid]);
  

  return (
    <>
 {IndivAd && (<CarouselComponent name={IndivAd.name} img0={IndivAd.car.imgURLs[0]}
 img1={IndivAd.car.imgURLs[1]} img2={IndivAd.car.imgURLs[2]} img3={IndivAd.car.imgURLs[3]}
 img4={IndivAd.car.imgURLs[4]} pNo={IndivAd.pNo} location={IndivAd.location} email={IndivAd.email}
  carMake={IndivAd.car.make} carModel={IndivAd.car.model} carYear={IndivAd.car.year} carColor={IndivAd.car.color}
    carMileage={IndivAd.car.mileage} carVin={IndivAd.car.vin} carCondition={IndivAd.car.condition}
     carSh1={IndivAd.car.serviceHistory[0]} carSh2={IndivAd.car.serviceHistory[1]} askPrice={IndivAd.askingPrice}
     negotiable={IndivAd.negotiable} reasonFs={IndivAd.reasonForSelling} payMeth={IndivAd.paymentMethod}
     tdAv={IndivAd.testDriveAvailable} insAl={IndivAd.inspectionAllowed} saletrm={IndivAd.saleTerms}
     title={IndivAd.documentation.title} regist={IndivAd.documentation.registration}/>)}
          
    </>
  );
}
