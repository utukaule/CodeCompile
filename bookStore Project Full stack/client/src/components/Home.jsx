import React, { useState } from "react";
import { bookBaseUrl } from "../axiosinstance";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Navbar from "./Navbar";

const Home = () => {
  const [bookForm, setBookForm] = useState({
    BookName: "",
    BookTitle: "",
    Author: "",
    SellingPrice: "",
    PublishDate: "",
    Id: "",
  });
  console.log(bookForm);

  const [bookLists, setBookLists] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBookForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!isUpdating) {
        if (
          !bookForm.BookName ||
          !bookForm.BookTitle ||
          !bookForm.Author ||
          !bookForm.PublishDate ||
          !bookForm.SellingPrice
        ) {
          alert("All fields are required...");
          return;
        }
        const { data } = await bookBaseUrl.post("/addbook", bookForm);
        if (data?.Success) {
          alert(data?.Message);
          getAllBookList();
        }
        setBookForm({
          BookName: "",
          BookTitle: "",
          Author: "",
          SellingPrice: "",
          PublishDate: "",
          Id: "",
        });
        console.log(data);
      } else {
        const { data } = await bookBaseUrl.put("/updatebook", bookForm);
        if (data?.Success) {
          getAllBookList();
          alert(data?.Message);
        }
        setBookForm({
          BookName: "",
          BookTitle: "",
          Author: "",
          SellingPrice: "",
          PublishDate: "",
          Id: "",
        });
        console.log(data);
        setIsUpdating(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBookList = async () => {
    try {
      const { data } = await bookBaseUrl.get("booklists");
      setBookLists(data.BookList);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBookList();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { data } = await bookBaseUrl.post("/deletebook", { Id: id });
      if (data?.Success) {
        alert(data?.Message);
        getAllBookList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (data) => {
    setBookForm({
      BookName: data.BookName,
      BookTitle: data.BookTitle,
      Author: data.Author,
      SellingPrice: data.SellingPrice,
      PublishDate: data.PublishDate,
      Id: data._id,
    });
    setIsUpdating(true);
  };

  return (
    <>
      <Navbar />
      <div className="w-full px-5 min-h-[calc(100vh-60px)]">
        <div className="w-full grid grid-cols-5 gap-3 my-4">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">Book Name</label>
            <input
              type="text"
              placeholder="Book Name"
              name="BookName"
              value={bookForm.BookName}
              onChange={handleFormChange}
              className="w-full h-8 px-2 border-2 border-gray-300 text-gray-800"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">Book Title</label>
            <input
              type="text"
              placeholder="Book Title"
              name="BookTitle"
              value={bookForm.BookTitle}
              onChange={handleFormChange}
              className="w-full h-8 px-2 border-2 border-gray-300 text-gray-800"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">Author</label>
            <input
              type="text"
              placeholder="Author"
              name="Author"
              value={bookForm.Author}
              onChange={handleFormChange}
              className="w-full h-8 px-2 border-2 border-gray-300 text-gray-800"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">Selling Price</label>
            <input
              type="text"
              placeholder="Selling Price"
              name="SellingPrice"
              value={bookForm.SellingPrice}
              onChange={handleFormChange}
              className="w-full h-8 px-2 border-2 border-gray-300 text-gray-800"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">Publish Date</label>
            <input
              type="date"
              placeholder="Publish Date"
              name="PublishDate"
              value={bookForm.PublishDate}
              onChange={handleFormChange}
              className="w-full h-8 px-2 border-2 border-gray-300 text-gray-800"
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button
            className="bg-blue-500  text-white h-10 w-22 rounded cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        <div className="w-full mt-10">
          <div className="w-full">
            <table className="w-full bg-white divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Book Name
                  </th>
                  <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Book Title
                  </th>
                  <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Author
                  </th>
                  <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Selling Price
                  </th>
                  <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Publish Date
                  </th>
                  <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="w-full bg-white divide-y divide-gray-200">
                {bookLists?.map((book, index) => {
                  return (
                    <tr className="hover:bg-gray-200" key={book._id}>
                      <td className="px-6 py-3 whitespace-nowrap">
                        {book.BookName}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap">
                        {book.BookTitle}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap">
                        {book.Author}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap">
                        {book.SellingPrice}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap">
                        {book.PublishDate}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap flex gap-3">
                        <span
                          className="text-red-500 bg-red-100 p-2 rounded cursor-pointer items-center"
                          onClick={() => handleDelete(book._id)}
                        >
                          <MdDelete />
                        </span>
                        <span
                          className="text-green-500 bg-green-100 p-2 rounded   cursor-pointer items-center"
                          onClick={() => handleUpdate(book)}
                        >
                          <FaPen />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
