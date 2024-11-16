
import { Carousel } from 'react-responsive-carousel';

const ShoeCarousel = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img className="h-[50vh] object-cover" src="https://unsplash.com/photos/a-woman-sitting-on-a-step-holding-a-purse-LEe_ayENroY" />
          {/* <p className="legend">Mobiles</p> */}

          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-0 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">   
                {/* <div> */}
                 {/* <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl"> */}
                    {/* Mobiles */}
                  {/* </h2> */}
                {/* </div> */}
                {/* <div className="mt-6"> */}
                  {/* <p> */}
                    {/* <span className="text-5xl font-semibold tracking-tight text-purple-600"> */}
                      {/* 40% */}
                    {/* </span> */}
                    {/* <span className="text-base font-medium text-gray-500"> offer </span> */}
                  {/* </p> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[50vh] object-cover" src="https://www.istockphoto.com/photo/almost-ready-to-start-lifting-gm959210702-261926459" />
          {/* <p className="legend">Laptops</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                {/* <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Laptops
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-purple-600">
                      30%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[50vh] object-cover" src="https://www.istockphoto.com/photo/boutique-shoes-in-a-store-gm1152527286-312713656" />
          {/* <p className="legend">TV</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                {/* <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Smart Watches
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-purple-600">
                      50%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Carousel>

    </>
  )
}

export default ShoeCarousel