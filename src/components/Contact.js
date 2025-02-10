const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
          Contact Us Page
        </h1>
        <div className="text-xl font-medium text-center text-gray-600 mb-8">
          <div className="font-bold">
            <input
              type="text"
              placeholder="Name"
              className="w-6/12 p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
          </div>
          <div className="font-bold">
            <input
              type="text"
              placeholder="Mobile"
              className="w-6/12 p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
          </div>{' '}
          <div className="font-bold">
            <input
              type="text"
              placeholder="Address"
              className="w-6/12 p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
          </div>
          <div className="font-bold">
            <button
              type="submit"
              className="w-sm p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white text-center py-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Ready to Order?</h3>
        <p className="text-lg mb-6">
          Browse through our diverse menu and get your favorite meal delivered
          to your doorstep today!
        </p>
        <button className="bg-gray-500 hover:bg-orange-400 text-white px-6 py-3 rounded-lg text-lg">
          Start Ordering
        </button>
      </div>
    </div>
  )
}

export default Contact
