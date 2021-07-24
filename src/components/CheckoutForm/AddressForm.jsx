import React, { useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";

import { commerce } from "../../lib/commerce";

const AddressForm = () => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last Name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP / Postal code" />
            {/* <Grid item xs={12} sm={6}>
				<InputLable>Shipping country</InputLable>
				<Select value={} fullWidth onChange={}>
					<MenuItem key={} value={}>Select me</MenuItem>
				</Select>
			</Grid>
			<Grid item xs={12} sm={6}>
				<InputLable>Shipping subdivision</InputLable>
				<Select value={} fullWidth onChange={}>
					<MenuItem key={} value={}>Select me</MenuItem>
				</Select>
			</Grid>
			<Grid item xs={12} sm={6}>
				<InputLable>Shipping Options</InputLable>
				<Select value={} fullWidth onChange={}>
					<MenuItem key={} value={}>Select me</MenuItem>
				</Select>
			</Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
