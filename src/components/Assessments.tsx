import React from 'react';

const Assessments = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Exclusive Assessments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Mechanical Engineering Assessment */}
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-semibold mb-2">Mechanical Engineering</h3>
          <p className="mb-4">Practice regularly to achieve perfection.</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">Start Now</button>
        </div>
        
        {/* Financial Analysis Assessment */}
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-semibold mb-2">Financial Analysis</h3>
          <p className="mb-4">Deep dive into financial case studies.</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">Start Now</button>
        </div>
        
        {/* Product Teardown Assessment */}
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-semibold mb-2">Product Teardown</h3>
          <p className="mb-4">Analyze and understand product components.</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default Assessments;
