import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import "../App.css";
import axios from "axios"

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(value.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((res) => {
        console.log(res);
        setValue(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  //~~~~~~~~~~~Delete Data~~~~~~~~~~~~~~~~~~
  const deleteHandle = (name) => {
    const newList = value.filter((item) => item.name !== name);
    setValue([...newList]);
  };    

  return (
    <div className="container my-3">
      <input
        className="form-control"
        placeholder="Search by Name, Email and Role...."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <table className="table">
        <thead>
          <tr>
            <th>
              {" "}
              <input
                className="form-check-input "
                type="checkbox"
                aria-label="Checkbox for following text input"
              />  
            </th>
            <th scope="col">Name</th>
            <th scope="col">Eamil</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            value
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val.name;
                } else if (
                  val.email.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val.email;
                } else if (
                  val.role.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val.role;
                }
              })
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((e, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                      />
                    </td>

                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.role}</td>
                    <td className="icon-margin">
                      <i className="bi bi-pencil-square"></i>
                      <i
                        className="bi bi-archive  "
                        onClick={() => deleteHandle(e.name)}
                      ></i>
                    </td>
                  </tr>
                );
              })
          )}
        </tbody>
      </table>

      <div className="d-flex justify-content-evenly">
        <button type="button" className="btn btn-danger">
          Delete Selected
        </button>
        <div className="page-flex">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
}
