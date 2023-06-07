import SearchAndFilter from "./SearchAndFilter";
import React from "react";
import Select from "../../Component/Select";
import CustomInput from "../../Component/CustomInput";

const table = () => {
  const { list, dataGender, filter, onChange } = SearchAndFilter();
  return (
    <div className="contatiner">
      <div className="row">
        <div className="col-6">
          <Select
            title="Gender"
            dataOption={dataGender}
            value={filter.filterGender?.key}
            onChange={(e) => {
              onChange(e, "gender");
            }}
          />
        </div>
        <div className="col-6">
          <CustomInput
            title="Search"
            className=""
            type="text"
            placeholder=""
            value={filter.filterSearch}
            onChange={(e) => {
              onChange(e, "search");
            }}
          />
        </div>
      </div>

      <div>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((item, index) => {
            return (
              <tr className="text-center" key={item.Id}>
                <th scope="row">{index + 1}</th>
                <td>
                  {item.FirstName} {item.LastName}
                </td>
                <td>
                  {item.Gender == 0 ? (
                    <div
                      class="alert alert-danger p-1 d-flex justify-content-center"
                      role="alert"
                    >
                      Male
                    </div>
                  ) : (
                    <div
                      class="alert alert-info p-1 d-flex justify-content-center"
                      role="alert"
                    >
                      Female
                    </div>
                  )}
                </td>
                <td className="text-center">
                  <div className="">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      style={{ marginRight: 5 }}
                    >
                      <i class="fa-solid fa-eye"></i>
                    </button>
                    <button class="btn btn-outline-danger" type="button">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </div>
    </div>
  );
};

export default table;
