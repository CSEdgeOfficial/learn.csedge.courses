import React from 'react';

const Testimonial = () => {
  return (
    <>
      <h1 className="mb-8 text-center text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-black">
        Our <span className="text-blue-600 dark:text-blue-500">Testimonials</span>
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 w-full mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg"
                />
                <p className="leading-relaxed">
                  "Working with this team has been a fantastic experience. Their dedication and professionalism exceeded my expectations. Highly recommend!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Jane Doe</h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 w-full mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://t3.ftcdn.net/jpg/03/53/59/46/360_F_353594684_Ca3p9RIc3xgQ1Y6ff7Jk6nVe54v9NbpQ.jpg"
                />
                <p className="leading-relaxed">
                  "An incredible team that truly cares about their clients. The quality of their work is outstanding, and they consistently deliver on time."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">John Smith</h2>
                <p className="text-gray-500">UI Developer</p>
              </div>
            </div>
            <div className="lg:w-1/3 w-full p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://st2.depositphotos.com/1037987/42002/i/450/depositphotos_420021494-stock-photo-portrait-female-owner-gift-store.jpg"
                />
                <p className="leading-relaxed">
                  "Their expertise and commitment to excellence are second to none. They went above and beyond to ensure our project's success."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Emily Johnson</h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
