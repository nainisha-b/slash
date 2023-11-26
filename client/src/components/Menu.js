import React, { useState } from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { Stack, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import getResults from "../util";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const [button, setButton] = useState("Default");
  const [searchItem, setSearchItem] = useState(undefined);
  const [searchWeb, setSearchWeb] = useState(undefined);

  const fetchResults = async () => {
    let result = null;
    try {
      result = await getResults(searchWeb, searchItem);
      navigate("/results", { state: { response: result } });
    } catch (error) {
      console.error(error);
    } finally {
      setButton("Fetched");
    }
  };

  const handleSubmission = () => {
    setButton("Fetching");
    fetchResults();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2vh" }}>
      <Stack direction="row" alignItems="center" spacing={3}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Enter Item Name"
          variant="outlined"
          size="small" // Adjusted input field size
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel variant="outlined" htmlFor="outlined-basic1">
            Select Website
          </InputLabel>
          <Select
            id="outlined-basic1"
            label="Select Website"
            variant="outlined"
            size="small" // Adjusted input field size
            onChange={(e) => setSearchWeb(e.target.value)}
          >
            <MenuItem value="az">Amazon</MenuItem>
            <MenuItem value="wm">Walmart</MenuItem>
            <MenuItem value="eb">Ebay</MenuItem>
            <MenuItem value="cc">Costco</MenuItem>
            <MenuItem value="tg">Target</MenuItem>
            <MenuItem value="bb">BestBuy</MenuItem>
            <MenuItem value="thd">The Home Depot</MenuItem>
            <MenuItem value="all">All</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Button
        size="medium"
        variant="contained"
        color="secondary"
        onClick={handleSubmission}
        style={{ marginTop: "2vh", padding: "10px" }} // Increased top margin and padding
      >
        Search Item
      </Button>
      {button === "Fetching" && (
        <LoadingButton
          loading
          variant="outlined"
          style={{ marginTop: "2vh", padding: "10px" }} // Increased top margin and padding
        >
          Submit
        </LoadingButton>
      )}
    </div>
  );
}

export default Menu;
