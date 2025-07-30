// app/our-people/page.tsx
import React from 'react';
import Header from '@/components/Header'; // Adjust path if needed
import Footer from '@/components/Footer'; // Adjust path if needed

const OurPeoplePage = () => {
  return (
    <>
      <Header />  {/* Add the Header component */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Our People</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*  You can format the below content in cards or lists */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-cyan-500">Experts in Security</h2>
            <p className="text-gray-700">
              Experts with extensive practical domain experience and international credentials on information security.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-cyan-500">Global Team</h2>
            <p className="text-gray-700">
              Team with multi-cultural and international experience.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-cyan-500">Customer Focused</h2>
            <p className="text-gray-700">
              Strong customer commitment.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-cyan-500">Business Acumen</h2>
            <p className="text-gray-700">
              In-depth Business Knowledge.
            </p>
          </div>

          {/* Add more sections/cards here if you want to elaborate more on each point.  For instance, you might want to add a photo and brief bio for individual team members. */}

        </div>
      </div>
      <Footer /> {/* Add the Footer component */}
    </>
  );
};

export default OurPeoplePage;