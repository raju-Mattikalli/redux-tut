import React from 'react';

function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">Home Component</h1>
        <img
          className="w-10 h-10"
          src="https://previews.123rf.com/images/jongjet303/jongjet3031703/jongjet303170300036/73540635-outline-cart-icon-icon-for-website-design-logo.jpg"
          alt="carts"
        />
      </div>

      {/* Card Section */}
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg max-w-sm overflow-hidden">
          <div className="flex">
            <div className="w-1/3 p-4">
              <img
                className="w-full h-auto object-cover"
                src="https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H.jpeg"
                alt="iphone"
              />
            </div>
            <div className="w-2/3 p-4">
              <div className="text-wrapper mb-4">
                <span className="block text-lg font-bold">IPhone</span>
                <span className="block text-gray-600">Price: ₹100000</span>
              </div>
              <div className="flex justify-end">
                <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
