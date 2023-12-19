
export default function page({ params }: { params: { motorcarid: number } }) {
  const FromDataBase1 = [
    {
      id: 0,
      title: "Suzuki Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?w=1060&t=st=1702908330~exp=1702908930~hmac=753e531cc19a2e028ab9781550e45e88a717e7c1c747a6713314da108ae29301",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/motorcars",
    },
    {
      id: 1,
      title: "Morris Garages",
      imgURL:
        "https://img.freepik.com/free-photo/closeup-shot-grey-car-front-building_181624-27502.jpg?w=1380&t=st=1702908388~exp=1702908988~hmac=8d73422b882270d5f7cd6e3a0ac9a223990ae408da21b5128fb7dc342f4a945f",
      description: "Almost New, Scratchlesss and more on this .....",
      details: "http://localhost:3000/",
    },
    {
      id: 2,
      title: "BMW Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg?w=1060&t=st=1702908451~exp=1702909051~hmac=e8988a1d27d0e54e6b1a3aeb302e1cc4d9a232101e4ef8dfd4d1e165d85065f2",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/",
    },
    {
      id: 3,
      title: "Suzuki Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/low-angle-white-modern-car-outdoors_23-2149385730.jpg?w=1060&t=st=1702910645~exp=1702911245~hmac=6e1ad9d926e029d30fdc1ac66540ac97399dbe99fd3ca3ed5aef03f0faaa01cc",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/",
    },
    {
      id: 4,
      title: "Mercedez Benz",
      imgURL:
        "https://img.freepik.com/premium-photo/mercedes-benz-is-brand-luxury-car-brand_853177-19439.jpg?w=740",
      description: "Almost New, Scratchlesss and more on this .....",
      details: "http://localhost:3000/",
    },
    {
      id: 5,
      title: "BMW Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/blue-car-driving-road_114579-4056.jpg?w=1060&t=st=1702910862~exp=1702911462~hmac=bf3c8649fd90ef910b995a884832dbe712f40fbf132355b61d020b095ceb6c4e",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/",
    },
    {
      id: 6,
      title: "Suzuki Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?w=1060&t=st=1702908330~exp=1702908930~hmac=753e531cc19a2e028ab9781550e45e88a717e7c1c747a6713314da108ae29301",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/",
    },
    {
      id: 7,
      title: "Morris Garages",
      imgURL:
        "https://img.freepik.com/free-photo/closeup-shot-grey-car-front-building_181624-27502.jpg?w=1380&t=st=1702908388~exp=1702908988~hmac=8d73422b882270d5f7cd6e3a0ac9a223990ae408da21b5128fb7dc342f4a945f",
      description: "Almost New, Scratchlesss and more on this .....",
      details: "http://localhost:3000/",
    },
    {
      id: 8,
      title: "BMW Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg?w=1060&t=st=1702908451~exp=1702909051~hmac=e8988a1d27d0e54e6b1a3aeb302e1cc4d9a232101e4ef8dfd4d1e165d85065f2",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/",
    },
    {
      id: 9,
      title: "Suzuki Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/low-angle-white-modern-car-outdoors_23-2149385730.jpg?w=1060&t=st=1702910645~exp=1702911245~hmac=6e1ad9d926e029d30fdc1ac66540ac97399dbe99fd3ca3ed5aef03f0faaa01cc",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/",
    },
    {
      id: 10,
      title: "Mercedez Benz",
      imgURL:
        "https://img.freepik.com/premium-photo/mercedes-benz-is-brand-luxury-car-brand_853177-19439.jpg?w=740",
      description: "Almost New, Scratchlesss and more on this .....",
      details: "http://localhost:3000/",
    },
    {
      id: 11,
      title: "BMW Somethin",
      imgURL:
        "https://img.freepik.com/free-photo/blue-car-driving-road_114579-4056.jpg?w=1060&t=st=1702910862~exp=1702911462~hmac=bf3c8649fd90ef910b995a884832dbe712f40fbf132355b61d020b095ceb6c4e",
      description: "Sligtly used, No scratches and so on.",
      details: "http://localhost:3000/",
    },
  ];
  const FromDataBase2 = [
    {
      id: 0,
      name: "Suzuki Seller",
      pNo: "+SUZ-991122KI",
      location: "City XYZ",
      email: "suzuki.seller@example.com",
      car: {
        make: "Suzuki",
        model: "XYZ",
        year: 2020,
        color: "Blue",
        mileage: 30000,
        vin: "ABC123DEF456GHI789",
        condition: "Excellent",
        serviceHistory: [
          "Oil change at 25,000 miles",
          "Brake replacement at 20,000 miles",
        ],
      },
      askingPrice: 15000,
      negotiable: true,
      reasonForSelling: "Upgrading to a larger vehicle",
      paymentMethod: "Cash or bank transfer",
      testDriveAvailable: true,
      documentation: {
        title: "Clean",
        registration: "Valid until MM/YYYY",
      },
      inspectionAllowed: true,
      saleTerms: "Sold as-is. No refunds.",
    },
    {
      id: 1,
      name: "MG Seller",
      pNo: "+MG-221122T",
      location: "City ABC",
      email: "mg.seller@example.com",
      car: {
        make: "MG",
        model: "ABC",
        year: 2019,
        color: "Red",
        mileage: 25000,
        vin: "XYZ789GHI456JKL123",
        condition: "Good",
        serviceHistory: ["Regular maintenance every 5,000 miles"],
      },
      askingPrice: 18000,
      negotiable: false,
      reasonForSelling: "Moving to a different city",
      paymentMethod: "Bank transfer only",
      testDriveAvailable: false,
      documentation: {
        title: "Clear",
        registration: "Valid until DD/YYYY",
      },
      inspectionAllowed: false,
      saleTerms: "No negotiation on price.",
    },
    {
      id: 2,
      name: "BMW Seller",
      pNo: "+BM-221122W",
      location: "City PQR",
      email: "bmw.seller@example.com",
      car: {
        make: "BMW",
        model: "XYZ123",
        year: 2021,
        color: "Silver",
        mileage: 20000,
        vin: "456JKL789MNO123PQ",
        condition: "Like new",
        serviceHistory: ["Annual maintenance performed"],
      },
      askingPrice: 25000,
      negotiable: true,
      reasonForSelling: "Downsizing to a smaller vehicle",
      paymentMethod: "Cash preferred",
      testDriveAvailable: true,
      documentation: {
        title: "Clean",
        registration: "Valid until YYYY/MM",
      },
      inspectionAllowed: true,
      saleTerms: "Negotiation allowed within reasonable limits.",
    },
    {
      id: 3,
      name: "Suzuki Seller",
      pNo: "+SUZ-991122KI",
      location: "City XYZ",
      email: "suzuki.seller@example.com",
      car: {
        make: "Suzuki",
        model: "XYZ",
        year: 2020,
        color: "Blue",
        mileage: 30000,
        vin: "ABC123DEF456GHI789",
        condition: "Excellent",
        serviceHistory: [
          "Oil change at 25,000 miles",
          "Brake replacement at 20,000 miles",
        ],
      },
      askingPrice: 15000,
      negotiable: true,
      reasonForSelling: "Upgrading to a larger vehicle",
      paymentMethod: "Cash or bank transfer",
      testDriveAvailable: true,
      documentation: {
        title: "Clean",
        registration: "Valid until MM/YYYY",
      },
      inspectionAllowed: true,
      saleTerms: "Sold as-is. No refunds.",
    },
    {
      id: 4,
      name: "Mercedez Seller",
      pNo: "+Mer-991122KI",
      location: "City XYZ",
      email: "mercedez.seller@example.com",
      car: {
        make: "Mercedez",
        model: "XYZ",
        year: 2020,
        color: "Green",
        mileage: 30000,
        vin: "ABC123DEF456GHI789",
        condition: "Excellent",
        serviceHistory: [
          "Oil change at 25,000 miles",
          "Brake replacement at 20,000 miles",
        ],
      },
      askingPrice: 15000,
      negotiable: true,
      reasonForSelling: "Upgrading to a larger vehicle",
      paymentMethod: "Cash or bank transfer",
      testDriveAvailable: true,
      documentation: {
        title: "Clean",
        registration: "Valid until MM/YYYY",
      },
      inspectionAllowed: true,
      saleTerms: "Sold as-is. No refunds.",
    },
    {
      id: 5,
      name: "BMW Seller",
      pNo: "+BM-221122W",
      location: "City PQR",
      email: "bmw.seller@example.com",
      car: {
        make: "BMW",
        model: "XYZ123",
        year: 2021,
        color: "Silver",
        mileage: 20000,
        vin: "456JKL789MNO123PQ",
        condition: "Like new",
        serviceHistory: ["Annual maintenance performed"],
      },
      askingPrice: 25000,
      negotiable: true,
      reasonForSelling: "Downsizing to a smaller vehicle",
      paymentMethod: "Cash preferred",
      testDriveAvailable: true,
      documentation: {
        title: "Clean",
        registration: "Valid until YYYY/MM",
      },
      inspectionAllowed: true,
      saleTerms: "Negotiation allowed within reasonable limits.",
    },
    {
      id: 6,
      name: "Suzuki Seller",
      pNo: "+SUZ-991122KI",
      location: "City XYZ",
      email: "suzuki.seller@example.com",
      car: {
        make: "Suzuki",
        model: "XYZ",
        year: 2020,
        color: "Blue",
        mileage: 30000,
        vin: "ABC123DEF456GHI789",
        condition: "Excellent",
        serviceHistory: [
          "Oil change at 25,000 miles",
          "Brake replacement at 20,000 miles",
        ],
      },
      askingPrice: 15000,
      negotiable: true,
      reasonForSelling: "Upgrading to a larger vehicle",
      paymentMethod: "Cash or bank transfer",
      testDriveAvailable: true,
      documentation: {
        title: "Clean",
        registration: "Valid until MM/YYYY",
      },
      inspectionAllowed: true,
      saleTerms: "Sold as-is. No refunds.",
    },
    {
      id: 7,
      name: "MG Seller",
      pNo: "+MG-221122T",
      location: "City ABC",
      email: "mg.seller@example.com",
      car: {
        make: "MG",
        model: "ABC",
        year: 2019,
        color: "Red",
        mileage: 25000,
        vin: "XYZ789GHI456JKL123",
        condition: "Good",
        serviceHistory: ["Regular maintenance every 5,000 miles"],
      },
      askingPrice: 18000,
      negotiable: false,
      reasonForSelling: "Moving to a different city",
      paymentMethod: "Bank transfer only",
      testDriveAvailable: false,
      documentation: {
        title: "Clear",
        registration: "Valid until DD/YYYY",
      },
      inspectionAllowed: false,
      saleTerms: "No negotiation on price.",
    },
    {
      id: 8,
      name: "BMW Seller",
      pNo: "+BM-221122W",
      location: "City PQR",
      email: "bmw.seller@example.com",
      car: {
        make: "BMW",
        model: "XYZ123",
        year: 2021,
        color: "Silver",
        mileage: 20000,
        vin: "456JKL789MNO123PQ",
        condition: "Like new",
        serviceHistory: ["Annual maintenance performed"],
      },
      askingPrice: 25000,
      negotiable: true,
      reasonForSelling: "Downsizing to a smaller vehicle",
      paymentMethod: "Cash preferred",
      testDriveAvailable: true,
      documentation: {
        title: "Clean",
        registration: "Valid until YYYY/MM",
      },
      inspectionAllowed: true,
      saleTerms: "Negotiation allowed within reasonable limits.",
    },
    {
      id: 9,
      name: "Suzuki Seller",
      pNo: "+SUZ-991122KI",
      location: "City XYZ",
      email: "suzuki.seller@example.com",
      car: {
        make: "Suzuki",
        model: "XYZ",
        year: 2020,
        color: "Blue",
        mileage: 30000,
        vin: "ABC123DEF456GHI789",
        condition: "Excellent",
        serviceHistory: [
          "Oil change at 25,000 miles",
          "Brake replacement at 20,000 miles",
        ],
      },
      askingPrice: 15000,
      negotiable: true,
      reasonForSelling: "Upgrading to a larger vehicle",
      paymentMethod: "Cash or bank transfer",
      testDriveAvailable: true,
      documentation: {
        title: "Clean",
        registration: "Valid until MM/YYYY",
      },
      inspectionAllowed: true,
      saleTerms: "Sold as-is. No refunds.",
    },
    {
      id: 10,
      name: "Mercedez Seller",
      pNo: "+SUZ-991122KI",
      location: "City XYZ",
      email: "mercedez.seller@example.com",
      car: {
        make: "Mercedez",
        model: "XYZ",
        year: 2020,
        color: "Green",
        mileage: 30000,
        vin: "ABC123DEF456GHI789",
        condition: "Excellent",
        serviceHistory: [
          "Oil change at 25,000 miles",
          "Brake replacement at 20,000 miles",
        ],
      },
      askingPrice: 15000,
      negotiable: true,
      reasonForSelling: "Upgrading to a larger vehicle",
      paymentMethod: "Cash or bank transfer",
      testDriveAvailable: true,
      documentation: {
        title: "Clean",
        registration: "Valid until MM/YYYY",
      },
      inspectionAllowed: true,
      saleTerms: "Sold as-is. No refunds.",
    },
    {
      id: 11,
      name: "BMW Seller",
      pNo: "+BM-221122W",
      location: "City PQR",
      email: "bmw.seller@example.com",
      car: {
        make: "BMW",
        model: "XYZ123",
        year: 2021,
        color: "Silver",
        mileage: 20000,
        vin: "456JKL789MNO123PQ",
        condition: "Like new",
        serviceHistory: ["Annual maintenance performed"],
      },
      askingPrice: 25000,
      negotiable: true,
      reasonForSelling: "Downsizing to a smaller vehicle",
      paymentMethod: "Cash preferred",
      testDriveAvailable: true,
      documentation: {
        title: "Clean",
        registration: "Valid until YYYY/MM",
      },
      inspectionAllowed: true,
      saleTerms: "Negotiation allowed within reasonable limits.",
    },
  ];
  const FilterdResult = FromDataBase1.filter((CI) => CI.id == params.motorcarid);
  const FilterdResult2 = FromDataBase2.filter((CO) => CO.id == params.motorcarid);
  if (FilterdResult.length === 0 || FilterdResult2.length === 0) {
    return <p>No Info found with ID {params.motorcarid}</p>;
  }
  const car = FilterdResult[0];
  const ExtraDetails = FilterdResult2[0];
  return (
    <>
      <div className="w-full h-fit mt-9">
        <div className="h-fit w-[97%] m-auto flex gap-x-2">
          <div className="relative border w-[50%] shadow-2xl h-fit">
            <span className="absolute top-48 left-2 text-3xl text-white border rounded-lg cursor-pointer hover:bg-white hover:text-black">
              <b>&#8592;</b>
            </span>
            <span className="absolute top-48 right-2 text-3xl text-white border rounded-lg cursor-pointer hover:bg-white hover:text-black">
              <b>&#8594;</b>
            </span>
            <div>
              <div className="p-2">
                <h3>
                  <b>{car.title}</b>
                </h3>
              </div>
            </div>
            <div className="">
              <img src={car.imgURL} alt="" className="w-[800px] h-[500px]" />
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex flex-col">
              <div>
                <b>Seller Info</b>
              </div>
              <div>Name : {ExtraDetails.name}</div>
              <div>Contact No : {ExtraDetails.pNo}</div>
              <div>Location : {ExtraDetails.location}</div>
              <div>Email : {ExtraDetails.email}</div>
              <div>
                <b>Car Description</b>
                <div className="flex flex-col">
                  <ul>
                    <li>{ExtraDetails.car.make}</li>
                    <li>{ExtraDetails.car.model}</li>
                    <li>{ExtraDetails.car.year}</li>
                    <li>{ExtraDetails.car.color}</li>
                    <li>{ExtraDetails.car.mileage}</li>
                    <li>{ExtraDetails.car.vin}</li>
                    <li>{ExtraDetails.car.condition}</li>
                    <li>{ExtraDetails.car.serviceHistory}</li>
                  </ul>
                </div>
              </div>
              <div>
                <b>Price & Other Info</b>
                <div className="flex flex-col">
                  <ul>
                    <li>Price : {ExtraDetails.askingPrice}</li>
                    <li>Negotiable : {ExtraDetails.negotiable ? "Yes" : "No"}</li>
                    <li>Selling Reason : {ExtraDetails.reasonForSelling}</li>
                    <li>Payment Method : {ExtraDetails.paymentMethod}</li>
                    <li>
                      Test Drive :{" "}
                      {ExtraDetails.testDriveAvailable ? "Yes" : "No"}
                    </li>
                    <li>
                      Inpection :{" "}
                      {ExtraDetails.inspectionAllowed ? "Allowed" : "Not Allowed"}
                    </li>
                    <li>Sales Terms : {ExtraDetails.saleTerms}</li>
                  </ul>
                </div>
              </div>
              <div>
                <b>Documentaion</b>
                <div className="flex flex-col">
                  <ul>
                    <li>Title : {ExtraDetails.documentation.title}</li>
                    <li>
                      Registration : {ExtraDetails.documentation.registration}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
