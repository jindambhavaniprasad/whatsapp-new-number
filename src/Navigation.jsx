import { useState } from "react";
import {
  Autocomplete,
  Paper,
  TextField,
  Box,
  Typography,
  Button,
} from "@mui/material";
import countryCodes from "./countrycodes";

const Navigation = ({ image, logoBackground, buttonBackground }) => {
  const [countryCode, setCountryCode] = useState(null);
  const [number, setNumber] = useState("");

  const onPhoneChange = (e) => {
    if (e?.target?.value?.length <= 10) {
      setNumber(e.target.value);
    }
  };

  const openLink = (e) => {
    e?.preventDefault();
    console.log(e.target);
    window.open(
      `https://wa.me/${countryCode.dial_code.split("+").join("")}${number}`,
      "_self"
    );
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        position: "relative",
        border: "none",
      }}
    >
      <Paper
        style={{
          backgroundColor: logoBackground,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: "-35px",
          borderRadius: "20%",
          padding: "15px",
        }}
      >
        <img
          src={image}
          alt="whatsapp"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
          }}
        />
      </Paper>
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          padding: "50px 30px",
        }}
      >
        <Typography fontSize={20} style={{ textAlign: "center" }}>
          Whatsapp New Contact
        </Typography>
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={countryCodes}
          value={countryCode}
          autoHighlight
          getOptionLabel={(option) => option.dial_code}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.name} ({option.code}) {option.dial_code}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password",
              }}
            />
          )}
          onChange={(e, r, s) => {
            setCountryCode(r);
          }}
        />
        <TextField
          variant="outlined"
          type="number"
          value={number}
          placeholder="Phone Number"
          onChange={onPhoneChange}
        />
        <Button
          disabled={!(number && countryCode.dial_code)}
          style={{
            color: number && countryCode.dial_code ? "#fff" : "inherit",
            backgroundColor:
              number && countryCode.dial_code ? buttonBackground : "inherit",
            cursor: "pointer",
          }}
          onClick={openLink}
        >
          Open
        </Button>
      </Paper>
    </div>
  );
};

export default Navigation;
