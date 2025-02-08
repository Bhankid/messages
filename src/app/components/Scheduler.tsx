
const Scheduler = () => {
  return (
    <div className="p-2 flex-[3] flex-col shadow-md">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 bg-blue-100 text-left">Time</th>
              <th className="border p-2 bg-blue-100 text-center">Sun</th>
              <th className="border p-2 bg-blue-100 text-center">Mon</th>
              <th className="border p-2 bg-blue-100 text-center">Tue</th>
              <th className="border p-2 bg-blue-100 text-center">Wed</th>
              <th className="border p-2 bg-blue-100 text-center">Thu</th>
              <th className="border p-2 bg-blue-100 text-center">Fri</th>
              <th className="border p-2 bg-blue-100 text-center">Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 text-left">09:20 AM</td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center">
                <div className="bg-green-100 text-green-700 p-2 rounded">
                  New Project
                  <br />
                  Design Brief Case
                </div>
              </td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center">
                <div className="bg-green-100 text-green-700 p-2 rounded">
                  New Project
                  <br />
                  Design Brief Case
                </div>
              </td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center">
                <div className="bg-yellow-100 text-yellow-700 p-2 rounded">
                  New Project
                  <br />
                  Design Brief Case
                </div>
              </td>
              <td className="border p-2 text-center"></td>
            </tr>
            <tr>
              <td className="border p-2 text-left">09:20 AM</td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center">
                <div className="bg-blue-100 text-blue-700 p-2 rounded">
                  New Project
                  <br />
                  Design Brief Case
                </div>
              </td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"></td>
            </tr>
            <tr>
              <td className="border p-2 text-left">09:20 AM</td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center">
                <div className="bg-red-100 text-red-700 p-2 rounded">
                  New Project
                  <br />
                  Design Brief Case
                </div>
              </td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"></td>
            </tr>
            <tr>
              <td className="border p-2 text-left">09:20 AM</td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center">
                <div className="bg-blue-100 text-blue-700 p-2 rounded">
                  New Project
                  <br />
                  Design Brief Case
                </div>
              </td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scheduler;
