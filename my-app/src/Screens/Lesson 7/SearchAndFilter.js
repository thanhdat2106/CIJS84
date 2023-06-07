import { useState } from "react";
import { useEffect } from "react";
import { Remove_Viet, DeepParse } from "../../Component/CommonFunctions";

const listAllDefault = [
  {
    id: "0",
    firstName: "Van A",
    lastName: "Nguyen",
    gender: "0",
  },
  {
    id: "1",
    firstName: "Van B",
    lastName: "Nguyen",
    gender: "1",
  },
  {
    id: "2",
    firstName: "Van C",
    lastName: "Nguyen",
    gender: "0",
  },
  {
    id: "3",
    firstName: "Van D",
    lastName: "Nguyen",
    gender: "1",
  },
  {
    id: "4",
    firstName: "Van E",
    lastName: "Nguyen",
    gender: "0",
  },
  {
    id: "5",
    firstName: "Van F",
    lastName: "Nguyen",
    gender: "1",
  },
];

const dataSelect = [
  { key: 0, name: "Male" },
  { key: 1, name: "Femal" },
  { key: 2, name: "All" },
];

const dataFilter = {
  filterGender: null,
  filterSearch: null,
};
const SearchAndFilter = () => {
  const [filter, setFilter] = useState(dataFilter);
  const [dataGender, setGender] = useState(dataSelect);
  const [list, setList] = useState([]);
  const [listAll, setListAll] = useState([]);

  useEffect(() => {
    setList(listAllDefault);
    setListAll(listAllDefault);
  }, []);

  useEffect(() => {
    if (filter.filterGender) {
      if (filter.filterGender.key == 2) {
        setList(listAll);
      } else {
        const listClone = DeepParse(listAll);
        const update = listClone.filter(
          (x) => x.Gender == filter.filterGender.key
        );
        setList(update);
      }
    }
    if (filter.filterSearch.key != null) {
      const listClone = DeepParse(list);
      const searchValue = filter.filterSearch
        ? filter.filterSearch.trim().toUpperCase()
        : "";
      const result = listClone.filter((item) =>
        Remove_Viet(item?.FirstName + " " + item?.LastName).includes(
          Remove_Viet(searchValue)
        )
      );
      setList(result);
    }
  }, [filter]);
  useEffect(() => {
    if (dataGender.length > 0) {
      const filterClone = DeepParse(filter);
      filterClone.filterGender = dataGender[0];
      setFilter(filterClone);
    }
  }, [dataGender]);
  const onChange = (e, name) => {
    if (name == "gender") {
      const dataGenderClone = DeepParse(dataGender);
      const result = dataGenderClone?.find((x) => x.key == e.target.value);
      let filterClone = DeepParse(filter);
      filterClone["filterGender"] = result;
      setFilter(filterClone);
    } else if (name == "search") {
      const filterClone = DeepParse(filter);
      filterClone["filterSearch"] = e.target.value;
      setFilter(filterClone);
    }
  };
  return {
    list,
    onChange,
    dataGender,
    filter,
  };
};
export default SearchAndFilter;
