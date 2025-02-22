import Nav from "./pages/Nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
         <Nav />   


      {/* Hero Section */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to MyWebsite
        </h1>
        <p className="text-gray-600 mt-2">
          Explore our culture, support, and more
        </p>
      </header>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900">About Us</h2>
          <p className="text-gray-600 mt-2">
            Learn more about our journey and values.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900">Support</h2>
          <p className="text-gray-600 mt-2">
            Need help? Our support team is here for you.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900">Our Culture</h2>
          <p className="text-gray-600 mt-2">
            Discover what makes our culture unique.
          </p>
        </div>
      </div>
    </div>
  );
}
