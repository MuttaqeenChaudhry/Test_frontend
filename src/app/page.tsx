import Cardm3 from "./Cardm3";
import "./globals.css";

export default async function Home() {
  const FetchAds = await fetch('http://localhost:3001/motorcars/' , {
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json'
    }
  });
  const AdsParsed = await FetchAds.json();
  console.log(AdsParsed) 
  const CarsInfo = [
    {
      id: 0,
      title: "Suzuki Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?w=1060&t=st=1702908330~exp=1702908930~hmac=753e531cc19a2e028ab9781550e45e88a717e7c1c747a6713314da108ae29301",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/motorcars/0",
    },
    {
      id: 1,
      title: "Morris Garages",
      imgURL:
        "https://img.freepik.com/free-photo/closeup-shot-grey-car-front-building_181624-27502.jpg?w=1380&t=st=1702908388~exp=1702908988~hmac=8d73422b882270d5f7cd6e3a0ac9a223990ae408da21b5128fb7dc342f4a945f",
      description: "Almost New, Scratchlesss and more on this .....",
      details: "http://localhost:3000/motorcars/1",
    },
    {
      id: 2,
      title: "BMW Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg?w=1060&t=st=1702908451~exp=1702909051~hmac=e8988a1d27d0e54e6b1a3aeb302e1cc4d9a232101e4ef8dfd4d1e165d85065f2",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/motorcars/2",
    },
    {
      id: 3,
      title: "Suzuki Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/low-angle-white-modern-car-outdoors_23-2149385730.jpg?w=1060&t=st=1702910645~exp=1702911245~hmac=6e1ad9d926e029d30fdc1ac66540ac97399dbe99fd3ca3ed5aef03f0faaa01cc",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/motorcars/3",
    },
    {
      id: 4,
      title: "Mercedez Benz",
      imgURL:
        "https://img.freepik.com/premium-photo/mercedes-benz-is-brand-luxury-car-brand_853177-19439.jpg?w=740",
      description: "Almost New, Scratchlesss and more on this .....",
      details: "http://localhost:3000/motorcars/4",
    },
    {
      id: 5,
      title: "BMW Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/blue-car-driving-road_114579-4056.jpg?w=1060&t=st=1702910862~exp=1702911462~hmac=bf3c8649fd90ef910b995a884832dbe712f40fbf132355b61d020b095ceb6c4e",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/motorcars/5",
    },
    {
      id: 6,
      title: "Suzuki Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?w=1060&t=st=1702908330~exp=1702908930~hmac=753e531cc19a2e028ab9781550e45e88a717e7c1c747a6713314da108ae29301",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/motorcars/6",
    },
    {
      id: 7,
      title: "Morris Garages",
      imgURL:
        "https://img.freepik.com/free-photo/closeup-shot-grey-car-front-building_181624-27502.jpg?w=1380&t=st=1702908388~exp=1702908988~hmac=8d73422b882270d5f7cd6e3a0ac9a223990ae408da21b5128fb7dc342f4a945f",
      description: "Almost New, Scratchlesss and more on this .....",
      details: "http://localhost:3000/motorcars/7",
    },
    {
      id: 8,
      title: "BMW Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg?w=1060&t=st=1702908451~exp=1702909051~hmac=e8988a1d27d0e54e6b1a3aeb302e1cc4d9a232101e4ef8dfd4d1e165d85065f2",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/motorcars/8",
    },
    {
      id: 9,
      title: "Suzuki Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/low-angle-white-modern-car-outdoors_23-2149385730.jpg?w=1060&t=st=1702910645~exp=1702911245~hmac=6e1ad9d926e029d30fdc1ac66540ac97399dbe99fd3ca3ed5aef03f0faaa01cc",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/motorcars/9",
    },
    {
      id: 10,
      title: "Mercedez Benz",
      imgURL:
        "https://img.freepik.com/premium-photo/mercedes-benz-is-brand-luxury-car-brand_853177-19439.jpg?w=740",
      description: "Almost New, Scratchlesss and more on this .....",
      details: "http://localhost:3000/motorcars/10",
    },
    {
      id: 11,
      title: "BMW Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/blue-car-driving-road_114579-4056.jpg?w=1060&t=st=1702910862~exp=1702911462~hmac=bf3c8649fd90ef910b995a884832dbe712f40fbf132355b61d020b095ceb6c4e",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/motorcars/11",
    },
  ];
  return (
    <>
      <div id="Root">
        <div className="w-full h-screen">
          <div className="w-[87%] m-auto border grid grid-cols-4 grid-flow-row gap-y-5">
            {CarsInfo.map((CI) => (
              <Cardm3
                id={CI.id}
                title={CI.title}
                img={CI.imgURL}
                description={CI.description}
                details={CI.details}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
