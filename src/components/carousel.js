import React, { useEffect } from "react";

const carousel = (props) => {
    useEffect(()=>{
        const prevBtn = document.getElementById('prevBtn');
        const nxtBtn = document.getElementById('nxtBtn');
        const CarouselContainer = document.getElementById('CarouselContainer');
        const Imgs = CarouselContainer.querySelectorAll('.caroImg');
        console.log(Imgs)
        let initIndex = 0;
        const showImg = (index) =>{
            Imgs.forEach((img, counter)=>{
                if(counter === index)
                img.style.display = 'block';
                else
                img.style.display = 'none';
            })
        }   
        prevBtn.addEventListener('click', ()=>{
            initIndex = (initIndex - 1 + Imgs.length) % Imgs.length;
            showImg(initIndex);
        });       
        nxtBtn.addEventListener('click', ()=>{
            initIndex = (initIndex + 1) % Imgs.length;
            showImg(initIndex);
        });   
        showImg(initIndex);    
    },[])
  return (
    <>
      <div className="w-full h-fit mt-9">
        <div className="h-fit w-[97%] m-auto flex gap-x-2">
          <div className="relative border w-[50%] shadow-2xl h-fit">
            <span id='prevBtn' className="absolute top-48 left-2 text-3xl text-white border rounded-lg cursor-pointer hover:bg-white hover:text-black">
              <b>&#8592;</b>
            </span>
            <span id='nxtBtn' className="absolute top-48 right-2 text-3xl text-white border rounded-lg cursor-pointer hover:bg-white hover:text-black">
              <b>&#8594;</b>
            </span>
            <div>
              <div className="p-2">
                <h3>
                  <b>{props.name}</b>
                </h3>
              </div>
            </div>
            <div id="CarouselContainer" className="overflow-hidden">
              <img src={props.img0} alt="" className="w-[800px] h-[500px] caroImg" />
              <img src={props.img1} alt="" className="w-[800px] h-[500px] caroImg" />
              <img src={props.img2} alt="" className="w-[800px] h-[500px] caroImg" />
              <img src={props.img3} alt="" className="w-[800px] h-[500px] caroImg" />
              <img src={props.img4} alt="" className="w-[800px] h-[500px] caroImg" />

            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex flex-col">
              <div>
                <b>Seller Info</b>
                <div>Name : {props.name}</div>
                <div>Contact No : {props.pNo}</div>
                <div>Location : {props.location}</div>
                <div>Email : {props.email}</div>
              </div>
              <div>
                <b>Additional Description</b>
                <div className="flex flex-col">
                  <ul>
                    <li>{props.carMake}</li>
                    <li>{props.carModel}</li>
                    <li>{props.carYear}</li>
                    <li>{props.carColor}</li>
                    <li>{props.carMileage}</li>
                    <li>{props.carVin}</li>
                    <li>{props.carCondition}</li>
                    <li>{props.carSh1}</li>
                    <li>{props.carSh2}</li>
                  </ul>
                </div>
              </div>
              <div>
                <b>Price & Other Info</b>
                <div className="flex flex-col">
                  <ul>
                    <li>Price : {props.askPrice}</li>
                    <li>Negotiable : {props.negotiable ? "Yes" : "No"}</li>
                    <li>Selling Reason : {props.reasonFs}</li>
                    <li>Payment Method : {props.payMeth}</li>
                    <li>Test Drive : {props.tdAv ? "Yes" : "No"}</li>
                    <li>
                      Inpection : {props.insAl ? "Allowed" : "Not Allowed"}
                    </li>
                    <li>Sales Terms : {props.saletrm}</li>
                  </ul>
                </div>
              </div>
              <div>
                <b>Documentaion</b>
                <div className="flex flex-col">
                  <ul>
                    <li>Title : {props.title}</li>
                    <li>Registration : {props.regist}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default carousel;
