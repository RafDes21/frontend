import React from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { filterClient } from "../../redux/slices/client.Slice";
import { Container, TextField } from "@mui/material";

const Search = () => {
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterClient(e.target.value))
  };

  return (
    <Container >
      <TextField onChange={handleChange} placeholder="search Patient" />
    </Container>
  );
};

export default Search;
