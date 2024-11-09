// import React, { useState, useEffect } from 'react';

// export default function AdminPanel() {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Fetch submissions when the component mounts
//   useEffect(() => {
//     async function fetchApplications() {
//       try {
//         const response = await fetch('http://localhost:5000/admin/submissions');
//         const data = await response.json();
//         setApplications(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//         setLoading(false);
//       }
//     }
    
//     fetchApplications();
//   }, []);
  
//   // Handle delete (or any other management feature)
//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/admin/submissions/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         setApplications(applications.filter(app => app._id !== id)); // Remove the deleted application from the list
//       }
//     } catch (error) {
//       console.error('Error deleting application:', error);
//     }
//   };

//   if (loading) return <div>Loading applications...</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin Panel - Applications</h1>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="p-2 border-b">Name</th>
//             <th className="p-2 border-b">Email</th>
//             <th className="p-2 border-b">Phone</th>
//             <th className="p-2 border-b">Statement</th>
//             <th className="p-2 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app._id}>
//               <td className="p-2 border-b">{app.name}</td>
//               <td className="p-2 border-b">{app.email}</td>
//               <td className="p-2 border-b">{app.phone}</td>
//               <td className="p-2 border-b">{app.statement}</td>
//               <td className="p-2 border-b">
//                 <button
//                   onClick={() => handleDelete(app._id)}
//                   className="text-red-600 hover:text-red-800"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch submissions when the component mounts
  useEffect(() => {
    async function fetchApplications() {
      try {
        const response = await fetch('http://localhost:5000/admin/submissions');
        const data = await response.json();
        setApplications(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching applications:', error);
        setLoading(false);
      }
    }

    fetchApplications();
  }, []);

  // Handle delete (or any other management feature)
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/admin/submissions/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setApplications(applications.filter(app => app._id !== id)); // Remove the deleted application from the list
      }
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  if (loading) return <div className="text-center py-8">Loading applications...</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md ">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel - Applications</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left border-b">Name</th>
              <th className="py-3 px-4 text-left border-b">Email</th>
              <th className="py-3 px-4 text-left border-b">Phone</th>
              <th className="py-3 px-4 text-left border-b">Statement</th>
              <th className="py-3 px-4 text-left border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">{app.name}</td>
                <td className="py-3 px-4 border-b">{app.email}</td>
                <td className="py-3 px-4 border-b">{app.phone}</td>
                <td className="py-3 px-4 border-b">{app.statement}</td>
                <td className="py-3 px-4 border-b">
                  <button
                    onClick={() => handleDelete(app._id)}
                    className="text-red-600 hover:text-red-800 transition duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   
  );
}
