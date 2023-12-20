import Cardm3 from '../Cardm3';

const page = async () => {
    const FetchData = await fetch('http://localhost:3001/motorcars/', {
        method : 'GET', headers : {
          'Cache-Control' : 'no-cache',
          'Content-Type' : 'application/json'
        }
      });
      const ParsedAds = await FetchData.json();
      
      return (
        <>
        <div id="Root">
            <div className="w-full h-screen">
              <div className="w-[87%] m-auto border grid grid-cols-4 grid-flow-row gap-y-5">
                {ParsedAds.map((CI : {
                  _id : String,
                  name : String,
                  car : {
                    imgURLs : string[]
                  },
                  pNo : Number,
                  hrLink : String
                }) => (
                  <Cardm3
                    id={CI._id}
                    title={CI.name}
                    img={CI.car.imgURLs[0]}
                    description={CI.pNo}
                    refLink={CI.hrLink}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )
}

export default page
