import React from "react";
import SearchBar from "./SearchBar";
import Add from "./Add";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../service/Employee";
import Pagination from "./Pagination";
import { storeContext } from "../service/store";
import { toast } from "react-toastify";

export default function Table() {
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(url + "/api/Employees");
      setdata(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/api/Employees/${id}`);
      toast.success("Deleted Successfully");
      fetchData();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete");
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <storeContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        lastIndex,
        firstIndex,
        npage,
        numbers,
      }}
    >
      <div className="p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <SearchBar fetchData={fetchData} setdata={setdata} />
          <Add />
        </div>
        <div className="rounded-lg border border-gray-200">
          <div className="overflow-x-auto rounded-t-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                    Id
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    First Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Last Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Email
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Phone
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Department
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {records.map((e) => (
                  <tr key={e._id}>
                    <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                      {e._id}
                    </td>
                    <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                      {e.first_name}
                    </td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                      {e.last_name}
                    </td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                      {e.email}
                    </td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                      {e.phone}
                    </td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                      {e.department}
                    </td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                      <Link to={"/employee/edit/" + e._id}>
                        <button className="bg-blue-500 m-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(e._id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-full border flex justify-center items-center">
              {records.length === 0 && (
                <h1 className="text-center text-red-500 text-2xl font-bold m-5">
                  No Data Found
                </h1>
              )}
            </div>
          </div>

          <Pagination />
        </div>
      </div>
    </storeContext.Provider>
  );
}
