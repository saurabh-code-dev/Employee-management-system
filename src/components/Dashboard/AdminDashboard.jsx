const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Admin Dashboard
      </h1>

      <div className="max-w-2xl mx-auto bg-black-300 shadow-lg rounded-2xl p-8">
        <form className="space-y-6">
          {/* Task Title */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Task Title
            </h3>
            <input
              type="text"
              placeholder="Make a UI Design"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">
              Description
            </h3>
            <textarea
              cols="30"
              rows="5"
              placeholder="Enter task details..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Date */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Date</h3>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Assign To */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Assign To
            </h3>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Category
            </h3>
            <input
              type="text"
              placeholder="Design, Dev, etc."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
