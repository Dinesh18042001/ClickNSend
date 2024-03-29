// import {
//   FormControl,
//   GoogleAutocomplete,
//   SelectBox,
//   TextBox,
//   UploadFileBox,
// } from "@/components/form";
// import { Add, Close } from "@mui/icons-material";
// import {
//   Autocomplete,
//   Box,
//   Button,
//   Card,
//   CardHeader,
//   Divider,
//   FormHelperText,
//   Grid,
//   IconButton,
//   Stack,
//   Typography,
// } from "@mui/material";
// import { TimePicker } from "@mui/x-date-pickers";
// import dayjs from "dayjs";
// import { isEmpty } from "lodash";
// import moment from "moment";
// import React from "react";
// import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

// const MaterialSelect = [
//   {
//     label: "Choose Material",
//     value: 0,
//   },
//   {
//     label: "Liquid",
//     value: "Liquid",
//   },
//   {
//     label: "Solid",
//     value: "Solid",
//   },
//   {
//     label: "Gas",
//     value: "Gas",
//   },
//   {
//     label: "Solution",
//     value: "Solution",
//   },
//   {
//     label: "Other",
//     value: "Other",
//   },
// ];
// const DropTypeSelect = [
//   {
//     label: "Choose Address Type",
//     value: 0,
//   },
//   {
//     label: "Pickup",
//     value: "pickup",
//   },
//   {
//     label: "Delivery",
//     value: "drop",
//   },
// ];
// const StepTwo = ({ formik, id, addProduct, removeProduct }) => {
//   console.log("formik step two", formik);
//   return (
//     <>
//       <Divider sx={{ my: 3 }} />
//       <Box sx={{ mb: 3 }}>
//         {formik?.values?.items &&
//           formik?.values?.items?.length > 0 &&
//           formik.values.items.map((productItem, productIndex) => {
//             return (
//               <Box key={`${productIndex}_${productItem?.id}`} sx={{ mt: 1 }}>
//                 <Card
//                   sx={{
//                     borderRadius: "0px",
//                     border: "0px",
//                     boxShadow: "none",
//                   }}
//                 >
//                   {" "}
//                   <CardHeader
//                    key={productIndex}
//                     sx={{ mb: 3, p: 0 }}
//                     action={
//                       <IconButton onClick={() => removeProduct(productIndex)}>
//                         <Close />
//                       </IconButton>
//                     }
//                   />
//                   <Grid container spacing={3}>
//                     {productIndex <= 0 && (
//                       <>
//                         <Grid item md={6}>
//                           <Box>
//                             <TextBox
//                               fullWidth
//                               type="date"
//                               label="Pickup Date"
//                               InputLabelProps={{
//                                 shrink: true,
//                               }}
//                               value={productItem?.product?.pickup_date}
//                               min={new Date().toISOString().split("T")[0]}
//                               name={`items[${productIndex}].product.pickup_date`}
//                               onChange={(e) => {
//                                 formik.setFieldValue(
//                                   `items[${productIndex}].product.pickup_date`,
//                                   e.target.value
//                                 );
//                                 formik.setFieldValue(
//                                   `items[${productIndex}].product.pickup_time`,
//                                   ""
//                                 );
//                                 formik.setFieldValue(
//                                   `items[${productIndex}].product.drop_date`,
//                                   ""
//                                 );
//                                 formik.setFieldValue(
//                                   `items[${productIndex}].product.drop_time`,
//                                   ""
//                                 );
//                               }}
//                               // onKeyDown={(event) => event.preventDefault()}
//                               size={"small"}
//                               helperText={
//                                 !isEmpty(formik.touched) &&
//                                 formik?.errors?.items &&
//                                 formik?.errors?.items?.length > 0 &&
//                                 formik?.errors?.items[productIndex]?.product
//                                   ?.index === productIndex &&
//                                 formik?.errors?.items[productIndex]?.product
//                                   ?.pickup_date
//                               }
//                               InputProps={{
//                                 inputProps: {
//                                   min: new Date().toISOString().split("T")[0],
//                                 },
//                               }}
//                             />
//                           </Box>
//                         </Grid>
//                         <Grid item md={6}>
//                           <Box>
//                             <FormControl
//                               fullWidth
//                               size="small"
//                               sx={{ marginTop: "5px" }}
//                               error={
//                                 !isEmpty(formik.touched) &&
//                                 formik?.errors?.items &&
//                                 formik?.errors?.items?.length > 0 &&
//                                 formik?.errors?.items[productIndex]?.product
//                                   ?.index === productIndex &&
//                                 formik?.errors?.items[productIndex]?.product
//                                   ?.pickup_time
//                               }
//                             >
//                               <TimePicker
//                                 sx={{
//                                   "& .MuiOutlinedInput-input": {
//                                     padding: "8.5px 14px !important",
//                                   },
//                                   "& .MuiOutlinedInput-notchedOutline": {
//                                     borderRight: "0px !important",
//                                     borderTop: "0px !important",
//                                     borderLeft: "0px !important",
//                                     borderRadius: "0px",
//                                   },
//                                 }}
//                                 fullWidth
//                                 variant="standard"
//                                 format="HH:mm"
//                                 label="Pickup Time"
//                                 ampm={false} // use this row
//                                 viewRenderers={{
//                                   hours: renderTimeViewClock,
//                                   minutes: renderTimeViewClock,
//                                   seconds: renderTimeViewClock,
//                                 }}
//                                 value={dayjs(
//                                   `${
//                                     productItem?.product?.pickup_date
//                                   }T${moment(
//                                     productItem?.product?.pickup_time,
//                                     "hh:mm a"
//                                   ).format("HH:mm")}`
//                                 )}
//                                 InputLabelProps={{
//                                   shrink: true,
//                                 }}
//                                 name={`items[${productIndex}].product.pickup_time`}
//                                 onChange={(e) => {
//                                   formik.setFieldValue(
//                                     `items[${productIndex}].product.pickup_time`,
//                                     dayjs(e).format("hh:mm a")
//                                   );
//                                   formik.setFieldValue(
//                                     `items[${productIndex}].product.drop_time`,
//                                     ""
//                                   );
//                                 }}
//                                 size={"small"}
//                                 helperText={
//                                   !isEmpty(formik.touched) &&
//                                   formik?.errors?.items &&
//                                   formik?.errors?.items?.length > 0 &&
//                                   formik?.errors?.items[productIndex]?.product
//                                     ?.index === productIndex &&
//                                   formik?.errors?.items[productIndex]?.product
//                                     ?.pickup_time
//                                 }
//                               />
//                               <Box sx={{ display: "flex" }}>
//                                 {!isEmpty(formik.touched) &&
//                                   formik?.errors?.items &&
//                                   formik?.errors?.items?.length > 0 &&
//                                   formik?.errors?.items[productIndex]?.product
//                                     ?.index === productIndex &&
//                                   formik?.errors?.items[productIndex]?.product
//                                     ?.pickup_time && (
//                                     <FormHelperText>
//                                       {!isEmpty(formik.touched) &&
//                                         formik?.errors?.items &&
//                                         formik?.errors?.items?.length > 0 &&
//                                         formik?.errors?.items[productIndex]
//                                           ?.product?.index === productIndex &&
//                                         formik?.errors?.items[productIndex]
//                                           ?.product?.pickup_time}
//                                     </FormHelperText>
//                                   )}
//                               </Box>
//                             </FormControl>
//                           </Box>
//                         </Grid>
//                         <Grid item md={6}>
//                           <Box>
//                             <TextBox
//                               fullWidth
//                               type="date"
//                               label="Delivery Date"
//                               InputLabelProps={{
//                                 shrink: true,
//                               }}
//                               value={productItem?.product?.drop_date}
//                               min={
//                                 productItem?.product?.pickup_date ||
//                                 new Date().toISOString().split("T")[0]
//                               }
//                               name={`items[${productIndex}].product.drop_date`}
//                               onChange={(e) => {
//                                 formik.setFieldValue(
//                                   `items[${productIndex}].product.drop_time`,
//                                   ""
//                                 );
//                                 formik.setFieldValue(
//                                   `items[${productIndex}].product.drop_date`,
//                                   e.target.value
//                                 );
//                               }}
//                               // onKeyDown={(event) => event.preventDefault()}
//                               size={"small"}
//                               helperText={
//                                 !isEmpty(formik.touched) &&
//                                 formik?.errors?.items &&
//                                 formik?.errors?.items?.length > 0 &&
//                                 formik?.errors?.items[productIndex]?.product
//                                   ?.index === productIndex &&
//                                 formik?.errors?.items[productIndex]?.product
//                                   ?.drop_date
//                               }
//                             />
//                           </Box>
//                         </Grid>
//                         <Grid item md={6}>
//                           <Box>
//                             <FormControl
//                               fullWidth
//                               size="small"
//                               error={
//                                 !isEmpty(formik.touched) &&
//                                 formik?.errors?.items &&
//                                 formik?.errors?.items?.length > 0 &&
//                                 formik?.errors?.items[productIndex]?.product
//                                   ?.index === productIndex &&
//                                 formik?.errors?.items[productIndex]?.product
//                                   ?.drop_time
//                               }
//                             >
//                               <TimePicker
//                                 sx={{
//                                   "& .MuiOutlinedInput-input": {
//                                     padding: "8.5px 14px !important",
//                                   },
//                                   "& .MuiOutlinedInput-notchedOutline": {
//                                     borderRight: "0px !important",
//                                     borderTop: "0px !important",
//                                     borderLeft: "0px !important",
//                                     borderRadius: "0px",
//                                   },
//                                 }}
//                                 fullWidth
//                                 format="hh:mm"
//                                 ampm={false} // use this row
//                                 label="Delivery Time"
//                                 value={dayjs(
//                                   `${productItem?.product?.drop_date}T${moment(
//                                     productItem?.product?.drop_time,
//                                     "hh:mm a"
//                                   ).format("HH:mm")}`
//                                 )}
//                                 InputLabelProps={{
//                                   shrink: true,
//                                 }}
//                                 viewRenderers={{
//                                   hours: renderTimeViewClock,
//                                   minutes: renderTimeViewClock,
//                                   seconds: renderTimeViewClock,
//                                 }}
//                                 name={`items[${productIndex}].product.drop_time`}
//                                 onChange={(e) => {
//                                   const dropTime = dayjs(e);
//                                   const pickupTime = dayjs(
//                                     formik.values.items[productIndex].product
//                                       .pickup_time,
//                                     "hh:mm a"
//                                   );
//                                   if (dropTime.isBefore(pickupTime)) {
//                                     formik.setFieldError(
//                                       `items[${productIndex}].product.drop_time`,
//                                       "Delivery time cannot be earlier than pickup time."
//                                     );
//                                   } else {
//                                     formik.setFieldValue(
//                                       `items[${productIndex}].product.drop_time`,
//                                       dropTime.format("hh:mm a")
//                                     );
//                                     // Clear the error when the user selects a valid drop time
//                                     formik.setFieldError(
//                                       `items[${productIndex}].product.drop_time`,
//                                       ""
//                                     );
//                                   }
//                                 }}
//                                 size={"small"}
//                                 helperText={
//                                   !isEmpty(formik.touched) &&
//                                   formik?.errors?.items &&
//                                   formik?.errors?.items?.length > 0 &&
//                                   formik?.errors?.items[productIndex]?.product
//                                     ?.index === productIndex &&
//                                   formik?.errors?.items[productIndex]?.product
//                                     ?.drop_time
//                                 }
//                               />
//                               <Box sx={{ display: "flex" }}>
//                                 {!isEmpty(formik.touched) &&
//                                   formik?.errors?.items &&
//                                   formik?.errors?.items?.length > 0 &&
//                                   formik?.errors?.items[productIndex]?.product
//                                     ?.index === productIndex &&
//                                   formik?.errors?.items[productIndex]?.product
//                                     ?.drop_time && (
//                                     <FormHelperText>
//                                       {!isEmpty(formik.touched) &&
//                                         formik?.errors?.items &&
//                                         formik?.errors?.items?.length > 0 &&
//                                         formik?.errors?.items[productIndex]
//                                           ?.product?.index === productIndex &&
//                                         formik?.errors?.items[productIndex]
//                                           ?.product?.drop_time}
//                                     </FormHelperText>
//                                   )}
//                               </Box>
//                             </FormControl>
//                           </Box>
//                         </Grid>
//                       </>
//                     )}
//                     <Grid item md={6}>
//                       <Box>
//                         <TextBox
//                           fullWidth
//                           label="Quantity"
//                           InputLabelProps={{
//                             shrink: true,
//                           }}
//                           placeholder="Enter Quantity"
//                           value={productItem?.product?.quantity}
//                           name={`items[${productIndex}].product.quantity`}
//                           onChange={(e) => {
//                             formik.setFieldValue(
//                               `items[${productIndex}].product.quantity`,
//                               e.target.value.replace(/\D/gm, "")
//                             );
//                           }}
//                           size="small"
//                           helperText={
//                             !isEmpty(formik.touched) &&
//                             formik?.errors?.items &&
//                             formik?.errors?.items?.length > 0 &&
//                             formik?.errors?.items[productIndex]?.product
//                               ?.index === productIndex &&
//                             formik?.errors?.items[productIndex]?.product
//                               ?.quantity
//                           }
//                         />
//                       </Box>
//                     </Grid>

//                     <Grid item md={6}>
//                       <Box>
//                         <TextBox
//                           fullWidth
//                           label="Length (mm) "
//                           placeholder="Enter Product Length (mm) "
//                           value={productItem?.product?.length}
//                           name={`items[${productIndex}].product.length`}
//                           onChange={(e) => {
//                             formik.setFieldValue(
//                               `items[${productIndex}].product.length`,
//                               e.target.value.replace(/\D/gm, "")
//                             );
//                           }}
//                           size="small"
//                           helperText={
//                             !isEmpty(formik.touched) &&
//                             formik?.errors?.items &&
//                             formik?.errors?.items?.length > 0 &&
//                             formik?.errors?.items[productIndex]?.product
//                               ?.index === productIndex &&
//                             formik?.errors?.items[productIndex]?.product?.length
//                           }
//                         />
//                       </Box>
//                     </Grid>
//                     <Grid item md={6}>
//                       <Box>
//                         <TextBox
//                           fullWidth
//                           label="Width (mm)"
//                           placeholder="Enter Product Width (mm)"
//                           value={productItem?.product?.width}
//                           name={`items[${productIndex}].product.width`}
//                           onChange={(e) => {
//                             formik.setFieldValue(
//                               `items[${productIndex}].product.width`,
//                               e.target.value.replace(/\D/gm, "")
//                             );
//                           }}
//                           size="small"
//                           helperText={
//                             !isEmpty(formik.touched) &&
//                             formik?.errors?.items &&
//                             formik?.errors?.items?.length > 0 &&
//                             formik?.errors?.items[productIndex]?.product
//                               ?.index === productIndex &&
//                             formik?.errors?.items[productIndex]?.product?.width
//                           }
//                         />
//                       </Box>
//                     </Grid>
//                     <Grid item md={6}>
//                       <Box>
//                         <TextBox
//                           fullWidth
//                           label="Height (mm)"
//                           placeholder="Enter Product Height (mm)"
//                           value={productItem?.product?.height}
//                           name={`items[${productIndex}].product.height`}
//                           onChange={(e) => {
//                             formik.setFieldValue(
//                               `items[${productIndex}].product.height`,
//                               e.target.value.replace(/\D/gm, "")
//                             );
//                           }}
//                           size="small"
//                           helperText={
//                             !isEmpty(formik.touched) &&
//                             formik?.errors?.items &&
//                             formik?.errors?.items?.length > 0 &&
//                             formik?.errors?.items[productIndex]?.product
//                               ?.index === productIndex &&
//                             formik?.errors?.items[productIndex]?.product?.height
//                           }
//                         />
//                       </Box>
//                     </Grid>
//                     <Grid item md={6}>
//                       <Box>
//                         <Typography>Image Upload</Typography>
//                         <UploadFileBox
//                           fullWidth
//                           url="qwerty"
//                           accept="image/jpeg,image/png,application/pdf"
//                           icon="upload"
//                           disabled={true}
//                           size="small"
//                           value={productItem?.product?.image}
//                           name={`items[${productIndex}].product.image`}
//                           onChange={(e) => {
//                             console.log(
//                               "ProductImage",
//                               e,
//                               `items[${productIndex}].product.image`
//                             );
//                             formik.setFieldValue(
//                               `items[${productIndex}].product.image`,
//                               e
//                             );
//                           }}
//                           helperText={
//                             !isEmpty(formik.touched) &&
//                             formik?.errors?.items &&
//                             formik?.errors?.items?.length > 0 &&
//                             formik?.errors?.items[productIndex]?.product
//                               ?.index === productIndex &&
//                             formik?.errors?.items[productIndex]?.product?.image
//                           }
//                         />
//                       </Box>
//                     </Grid>
//                     <Grid item md={6}>
//                       <Typography>Choose Material</Typography>
//                       <Box>
//                         <Stack direction="row" mb={1.3}>
//                           <SelectBox
//                             fullWidth
//                             placeholder="Select"
//                             size="small"
//                             variant="standard"
//                             value={productItem?.product?.material}
//                             name={`items[${productIndex}].product.material`}
//                             onChange={(e) => {
//                               formik.setFieldValue(
//                                 `items[${productIndex}].product.material`,
//                                 e.target.value
//                               );
//                             }}
//                             options={MaterialSelect}
//                             vehicle="small"
//                             helperText={
//                               !isEmpty(formik.touched) &&
//                               formik?.errors?.items &&
//                               formik?.errors?.items?.length > 0 &&
//                               formik?.errors?.items[productIndex]?.product
//                                 ?.index === productIndex &&
//                               formik?.errors?.items[productIndex]?.product
//                                 ?.material
//                             }
//                           />
//                         </Stack>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                   <Box>
//                     <Divider
//                       sx={{
//                         my: 2,
//                       }}
//                     />
//                     <Typography
//                       component="h5"
//                       variant="h5"
//                       fontSize={15}
//                       fontWeight={400}
//                     >
//                       Add Delivery Address
//                     </Typography>
//                   </Box>
//                   <Box sx={{ my: 4 }}>
//                     {productItem?.address &&
//                       productItem?.address?.length > 0 &&
//                       productItem?.address.map((addressItem, addressIndex) => (
//                         <Box key={productIndex} sx={{ mt: 4 }}>
//                           <Card
//                             sx={{
//                               borderRadius: "0px",
//                               border: "0px",
//                               boxShadow: "none",
//                             }}
//                           >
//                             <Grid container spacing={3}>
//                               <Grid item md={12}>
//                                 <Stack
//                                   direction="row"
//                                   spacing={2}
//                                   alignItems="center"
//                                   className="flexDirection"
//                                 >
//                                   <Typography fontSize={16}>
//                                     Address Type :
//                                   </Typography>
//                                   <Typography
//                                     fontSize={14}
//                                     sx={{ textTransform: "capitalize" }}
//                                   >
//                                     {addressItem?.type == "drop"
//                                       ? "Delivery"
//                                       : addressItem?.type}
//                                   </Typography>
//                                 </Stack>
//                               </Grid>
//                               <Grid item md={12}>
//                                 <Box>
//                                   <TextBox
//                                     fullWidth
//                                     label="Post Code"
//                                     placeholder="Enter Post Code"
//                                     value={addressItem?.pin_code}
//                                     name={`items[${productIndex}].address[${addressIndex}].pin_code`}
//                                     onChange={(e) => {
//                                       const enteredPostalCode =
//                                         e.target.value.toUpperCase();

//                                       if (
//                                         enteredPostalCode.length <= 8 ||
//                                         enteredPostalCode.length === 0
//                                       ) {
//                                         formik.setFieldValue(
//                                           `items[${productIndex}].address[${addressIndex}].pin_code`,
//                                           enteredPostalCode
//                                         );
//                                       }
//                                     }}
//                                     size="small"
//                                     helperText={
//                                       !isEmpty(formik.touched) &&
//                                       formik?.errors?.items &&
//                                       formik?.errors?.items[productIndex]
//                                         ?.address[addressIndex].pin_code
//                                     }
//                                   />
//                                 </Box>
//                               </Grid>
//                               <Grid item md={12}>
//                                 <GoogleAutocomplete
//                                   fullWidth
//                                   size="small"
//                                   labelname="Address"
//                                   name={`items[${productIndex}].address[${addressIndex}].address`}
//                                   value={addressItem?.address}
//                                   onSelect={(address, lat, long) => {
//                                     formik.setFieldValue(
//                                       `items[${productIndex}].address[${addressIndex}].address`,
//                                       address
//                                     );
//                                     formik.setFieldValue(
//                                       `items[${productIndex}].address[${addressIndex}].lat`,
//                                       lat
//                                     );
//                                     formik.setFieldValue(
//                                       `items[${productIndex}].address[${addressIndex}].long`,
//                                       long
//                                     );
//                                   }}
//                                   onChange={(e) => {
//                                     formik.setFieldValue(
//                                       `items[${productIndex}].address[${addressIndex}].address`,
//                                       e
//                                     );
//                                   }}
//                                   endIcon={
//                                     addressItem?.address && (
//                                       <IconButton
//                                         size="small"
//                                         inputEndAdornmentPosition="end"
//                                         onClick={() => {
//                                           formik.setFieldValue(
//                                             `items[${productIndex}].address[${addressIndex}].address`,
//                                             ""
//                                           );
//                                           formik.setFieldValue(
//                                             `items[${productIndex}].address[${addressIndex}].lat`,
//                                             ""
//                                           );
//                                           formik.setFieldValue(
//                                             `items[${productIndex}].address[${addressIndex}].long`,
//                                             ""
//                                           );
//                                         }}
//                                       >
//                                         <Close fontSize="small" />
//                                       </IconButton>
//                                     )
//                                   }
//                                   helperText={
//                                     !isEmpty(formik.touched) &&
//                                     formik?.errors?.items &&
//                                     formik?.errors?.items[productIndex]
//                                       ?.address[addressIndex].address
//                                   }
//                                 />
//                               </Grid>
//                             </Grid>
//                           </Card>
//                         </Box>
//                       ))}
//                   </Box>
//                 </Card>
//               </Box>
//             );
//           })}
//       </Box>
//       <Button
//         variant="outlined"
//         onClick={() => addProduct()}
//         startIcon={<Add />}
//         color="primary"
//       >
//         Add Another Address
//       </Button>
//       <Divider sx={{ my: 3 }} />
//     </>
//   );
// };

// export default StepTwo;

//code -2

import {
  FormControl,
  GoogleAutocomplete,
  SelectBox,
  TextBox,
  UploadFileBox,
} from "@/components/form";
import { Add, Close } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { isEmpty } from "lodash";
import moment from "moment";

import React, { useEffect, useState } from "react";

import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

import Switch from "@mui/material/Switch";

import Checkbox from "@mui/material/Checkbox";

const MaterialSelect = [
  {
    label: "Choose Material",
    value: 0,
  },
  {
    label: "Liquid",
    value: "Liquid",
  },
  {
    label: "Solid",
    value: "Solid",
  },
  {
    label: "Gas",
    value: "Gas",
  },
  {
    label: "Solution",
    value: "Solution",
  },
  {
    label: "Other",
    value: "Other",
  },
];
const DropTypeSelect = [
  {
    label: "Choose Address Type",
    value: 0,
  },
  {
    label: "Pickup",
    value: "pickup",
  },
  {
    label: "Delivery",
    value: "drop",
  },
];
const StepTwo = ({ formik, id, addProduct, removeProduct }) => {
  return (
    <>
      <Divider sx={{ my: 3 }} />
      <Box sx={{ mb: 3 }}>
        {formik &&
          formik?.values?.items &&
          formik.values.items?.map((productItem, productIndex) => {
            return (
              <Box key={`${productIndex}_${productItem?.id}`} sx={{ mt: 1 }}>
                <Card
                  sx={{
                    borderRadius: "0px",
                    border: "0px",
                    boxShadow: "none",
                  }}
                >

                  {productIndex !== 0 && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                        padding: "1px"
                      }}
                    >
                      <div
                        style={{
                          marginRight: "10px",
                          position: "relative",
                          top: "45px",
                        }}
                      >
                        <span>Add Product Detail</span>
                        <Switch
                          checked={productItem?.product?.checked}
                          onChange={(e) => {
                            formik.setFieldValue(
                              `items[${productIndex}].product.checked`,
                              e.target.checked
                            );
                          }}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                        <span>Only for slip</span>
                      </div>
                    </div>
                  )}{" "}
                  <CardHeader
                    key={productIndex}
                    sx={{ mb: 3, p: 0 }}
                    action={
                      <IconButton onClick={() => removeProduct(productIndex)}>
                        <Close />
                      </IconButton>
                    }
                  />
                  

                  <Grid container spacing={3}>
                    {(productIndex <= 0 || productItem?.product?.checked) && ( //implement logic
                      <>
                        <Grid item md={6}>
                          <Box>
                            <TextBox
                              fullWidth
                              type="date"
                              label="Pickup Date"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              value={productItem?.product?.pickup_date}
                              min={new Date().toISOString().split("T")[0]}
                              name={`items[${productIndex}].product.pickup_date`}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `items[${productIndex}].product.pickup_date`,
                                  e.target.value
                                );
                                formik.setFieldValue(
                                  `items[${productIndex}].product.pickup_time`,
                                  ""
                                );
                                formik.setFieldValue(
                                  `items[${productIndex}].product.drop_date`,
                                  ""
                                );
                                formik.setFieldValue(
                                  `items[${productIndex}].product.drop_time`,
                                  ""
                                );
                              }}
                              // onKeyDown={(event) => event.preventDefault()}
                              size={"small"}
                              helperText={
                                !isEmpty(formik.touched) &&
                                formik?.errors?.items &&
                                formik?.errors?.items?.length > 0 &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.index === productIndex &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.pickup_date
                              }
                              InputProps={{
                                inputProps: {
                                  min: new Date().toISOString().split("T")[0],
                                },
                              }}
                            />
                          </Box>
                        </Grid>

                        <Grid item md={6}>
                          <Box>
                            <FormControl
                              fullWidth
                              size="small"
                              sx={{ marginTop: "5px" }}
                              error={
                                !isEmpty(formik.touched) &&
                                formik?.errors?.items &&
                                formik?.errors?.items?.length > 0 &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.index === productIndex &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.pickup_time
                              }
                            >
                              <TimePicker
                                sx={{
                                  "& .MuiOutlinedInput-input": {
                                    padding: "8.5px 14px !important",
                                  },
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    borderRight: "0px !important",
                                    borderTop: "0px !important",
                                    borderLeft: "0px !important",
                                    borderRadius: "0px",
                                  },
                                }}
                                fullWidth
                                variant="standard"
                                format="HH:mm"
                                label="Pickup Time"
                                ampm={false} // use this row
                                viewRenderers={{
                                  hours: renderTimeViewClock,
                                  minutes: renderTimeViewClock,
                                  seconds: renderTimeViewClock,
                                }}
                                value={dayjs(
                                  `${
                                    productItem?.product?.pickup_date
                                  }T${moment(
                                    productItem?.product?.pickup_time,
                                    "hh:mm a"
                                  ).format("HH:mm")}`
                                )}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                name={`items[${productIndex}].product.pickup_time`}
                                onChange={(e) => {
                                  formik.setFieldValue(
                                    `items[${productIndex}].product.pickup_time`,
                                    dayjs(e).format("hh:mm a")
                                  );
                                  formik.setFieldValue(
                                    `items[${productIndex}].product.drop_time`,
                                    ""
                                  );
                                }}
                                size={"small"}
                                helperText={
                                  !isEmpty(formik.touched) &&
                                  formik?.errors?.items &&
                                  formik?.errors?.items?.length > 0 &&
                                  formik?.errors?.items[productIndex]?.product
                                    ?.index === productIndex &&
                                  formik?.errors?.items[productIndex]?.product
                                    ?.pickup_time
                                }
                              />
                              <Box sx={{ display: "flex" }}>
                                {!isEmpty(formik.touched) &&
                                  formik?.errors?.items &&
                                  formik?.errors?.items?.length > 0 &&
                                  formik?.errors?.items[productIndex]?.product
                                    ?.index === productIndex &&
                                  formik?.errors?.items[productIndex]?.product
                                    ?.pickup_time && (
                                    <FormHelperText>
                                      {!isEmpty(formik.touched) &&
                                        formik?.errors?.items &&
                                        formik?.errors?.items?.length > 0 &&
                                        formik?.errors?.items[productIndex]
                                          ?.product?.index === productIndex &&
                                        formik?.errors?.items[productIndex]
                                          ?.product?.pickup_time}
                                    </FormHelperText>
                                  )}
                              </Box>
                            </FormControl>
                          </Box>
                        </Grid>
                        <Grid item md={6}>
                          <Box>
                            <TextBox
                              fullWidth
                              type="date"
                              label="Delivery Date"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              value={productItem?.product?.drop_date}
                              min={
                                productItem?.product?.pickup_date ||
                                new Date().toISOString().split("T")[0]
                              }
                              name={`items[${productIndex}].product.drop_date`}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `items[${productIndex}].product.drop_time`,
                                  ""
                                );
                                formik.setFieldValue(
                                  `items[${productIndex}].product.drop_date`,
                                  e.target.value
                                );
                              }}
                              // onKeyDown={(event) => event.preventDefault()}
                              size={"small"}
                              helperText={
                                !isEmpty(formik.touched) &&
                                formik?.errors?.items &&
                                formik?.errors?.items?.length > 0 &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.index === productIndex &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.drop_date
                              }
                            />
                          </Box>
                        </Grid>
                        <Grid item md={6}>
                          <Box>
                            <FormControl
                              fullWidth
                              size="small"
                              error={
                                !isEmpty(formik.touched) &&
                                formik?.errors?.items &&
                                formik?.errors?.items?.length > 0 &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.index === productIndex &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.drop_time
                              }
                            >
                              <TimePicker
                                sx={{
                                  "& .MuiOutlinedInput-input": {
                                    padding: "8.5px 14px !important",
                                  },
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    borderRight: "0px !important",
                                    borderTop: "0px !important",
                                    borderLeft: "0px !important",
                                    borderRadius: "0px",
                                  },
                                }}
                                fullWidth
                                format="hh:mm"
                                ampm={false} // use this row
                                label="Delivery Time"
                                value={dayjs(
                                  `${productItem?.product?.drop_date}T${moment(
                                    productItem?.product?.drop_time,
                                    "hh:mm a"
                                  ).format("HH:mm")}`
                                )}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                viewRenderers={{
                                  hours: renderTimeViewClock,
                                  minutes: renderTimeViewClock,
                                  seconds: renderTimeViewClock,
                                }}
                                name={`items[${productIndex}].product.drop_time`}
                                onChange={(e) => {
                                  const dropTime = dayjs(e);
                                  const pickupTime = dayjs(
                                    formik.values.items[productIndex].product
                                      .pickup_time,
                                    "hh:mm a"
                                  );
                                  if (dropTime.isBefore(pickupTime)) {
                                    formik.setFieldError(
                                      `items[${productIndex}].product.drop_time`,
                                      "Delivery time cannot be earlier than pickup time."
                                    );
                                  } else {
                                    formik.setFieldValue(
                                      `items[${productIndex}].product.drop_time`,
                                      dropTime.format("hh:mm a")
                                    );
                                    // Clear the error when the user selects a valid drop time
                                    formik.setFieldError(
                                      `items[${productIndex}].product.drop_time`,
                                      ""
                                    );
                                  }
                                }}
                                size={"small"}
                                helperText={
                                  !isEmpty(formik.touched) &&
                                  formik?.errors?.items &&
                                  formik?.errors?.items?.length > 0 &&
                                  formik?.errors?.items[productIndex]?.product
                                    ?.index === productIndex &&
                                  formik?.errors?.items[productIndex]?.product
                                    ?.drop_time
                                }
                              />
                              <Box sx={{ display: "flex" }}>
                                {!isEmpty(formik.touched) &&
                                  formik?.errors?.items &&
                                  formik?.errors?.items?.length > 0 &&
                                  formik?.errors?.items[productIndex]?.product
                                    ?.index === productIndex &&
                                  formik?.errors?.items[productIndex]?.product
                                    ?.drop_time && (
                                    <FormHelperText>
                                      {!isEmpty(formik.touched) &&
                                        formik?.errors?.items &&
                                        formik?.errors?.items?.length > 0 &&
                                        formik?.errors?.items[productIndex]
                                          ?.product?.index === productIndex &&
                                        formik?.errors?.items[productIndex]
                                          ?.product?.drop_time}
                                    </FormHelperText>
                                  )}
                              </Box>
                            </FormControl>
                          </Box>
                        </Grid>
                      </>
                    )}
                    {(!productItem?.product?.checked || productIndex === 0) && (  //implement logic
                      <>
                        <Grid item md={6}>
                          <Box>
                            <TextBox
                              fullWidth
                              label="Quantity"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder="Enter Quantity"
                              value={productItem?.product?.quantity}
                              name={`items[${productIndex}].product.quantity`}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `items[${productIndex}].product.quantity`,
                                  e.target.value.replace(/\D/gm, "")
                                );
                              }}
                              size="small"
                              helperText={
                                !isEmpty(formik.touched) &&
                                formik?.errors?.items &&
                                formik?.errors?.items?.length > 0 &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.index === productIndex &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.quantity
                              }
                            />
                          </Box>
                        </Grid>

                        <Grid item md={6}>
                          <Box>
                            <TextBox
                              fullWidth
                              label="Length (mm) "
                              placeholder="Enter Product Length (mm) "
                              value={productItem?.product?.length}
                              name={`items[${productIndex}].product.length`}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `items[${productIndex}].product.length`,
                                  e.target.value.replace(/\D/gm, "")
                                );
                              }}
                              size="small"
                              helperText={
                                !isEmpty(formik.touched) &&
                                formik?.errors?.items &&
                                formik?.errors?.items?.length > 0 &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.index === productIndex &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.length
                              }
                            />
                          </Box>
                        </Grid>
                        <Grid item md={6}>
                          <Box>
                            <TextBox
                              fullWidth
                              label="Width (mm)"
                              placeholder="Enter Product Width (mm)"
                              value={productItem?.product?.width}
                              name={`items[${productIndex}].product.width`}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `items[${productIndex}].product.width`,
                                  e.target.value.replace(/\D/gm, "")
                                );
                              }}
                              size="small"
                              helperText={
                                !isEmpty(formik.touched) &&
                                formik?.errors?.items &&
                                formik?.errors?.items?.length > 0 &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.index === productIndex &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.width
                              }
                            />
                          </Box>
                        </Grid>
                        <Grid item md={6}>
                          <Box>
                            <TextBox
                              fullWidth
                              label="Height (mm)"
                              placeholder="Enter Product Height (mm)"
                              value={productItem?.product?.height}
                              name={`items[${productIndex}].product.height`}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `items[${productIndex}].product.height`,
                                  e.target.value.replace(/\D/gm, "")
                                );
                              }}
                              size="small"
                              helperText={
                                !isEmpty(formik.touched) &&
                                formik?.errors?.items &&
                                formik?.errors?.items?.length > 0 &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.index === productIndex &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.height
                              }
                            />
                          </Box>
                        </Grid>
                      </>
                    )}


                    {(!productItem?.product?.checked || productIndex === 0) && (
                      <Grid item md={6}>
                        <Box>
                          <Typography>Image Upload</Typography>
                          <UploadFileBox
                            fullWidth
                            url="api/auth/master/jobs/item-image"
                            accept="image/jpeg,image/png,application/pdf"
                            icon="upload"
                            disabled={true}
                            size="small"
                            value={productItem?.product?.image}
                            name={`items[${productIndex}].product.image`}
                            onChange={(e) => {
                              console.log(
                                "ProductImage",
                                e,
                                `items[${productIndex}].product.image`
                              );
                              formik.setFieldValue(
                                `items[${productIndex}].product.image`,
                                e
                              );
                            }}
                            helperText={
                              !isEmpty(formik.touched) &&
                              formik?.errors?.items &&
                              formik?.errors?.items?.length > 0 &&
                              formik?.errors?.items[productIndex]?.product
                                ?.index === productIndex &&
                              formik?.errors?.items[productIndex]?.product
                                ?.image
                            }
                          />
                        </Box>
                      </Grid>
                    )}


                    {(!productItem?.product?.checked || productIndex === 0) && (
                      <Grid item md={6}>
                        <Typography>Choose Material</Typography>
                        <Box>
                          <Stack direction="row" mb={1.3}>
                            <SelectBox
                              fullWidth
                              placeholder="Select"
                              size="small"
                              variant="standard"
                              value={productItem?.product?.material}
                              name={`items[${productIndex}].product.material`}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `items[${productIndex}].product.material`,
                                  e.target.value
                                );
                              }}
                              options={MaterialSelect}
                              vehicle="small"
                              helperText={
                                !isEmpty(formik.touched) &&
                                formik?.errors?.items &&
                                formik?.errors?.items?.length > 0 &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.index === productIndex &&
                                formik?.errors?.items[productIndex]?.product
                                  ?.material
                              }
                            />
                          </Stack>
                        </Box>
                      </Grid>
                    )}
                  </Grid>
                  <Box>
                    <Divider
                      sx={{
                        my: 2,
                      }}
                    />
                    <Typography
                      component="h5"
                      variant="h5"
                      fontSize={15}
                      fontWeight={400}
                    >
                      Add Delivery Address
                      {/*add Checkbox */}
                      <Box>
                        <Divider
                          sx={{
                            my: 2,
                          }}
                        />
                        <Typography
                          component="h5"
                          variant="h5"
                          fontSize={15}
                          fontWeight={400}
                        ></Typography>
                        {productIndex !== 0 && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "10px",
                            }}
                          >
                            <Checkbox
                              checked={productItem?.product?.copyAvobe} //for copy address
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `items[${productIndex}].product.copyAvobe`,
                                  e.target.checked
                                );
                              }}
                            />

                            <div style={{ marginLeft: "10px" }}>
                              <span>Same as above</span>
                            </div>
                          </div>
                        )}
                      </Box>
                    </Typography>
                  </Box>
                  <Box sx={{ my: 4 }}>
                    {productItem?.address &&
                      productItem?.address?.length > 0 &&
                      productItem?.address.map((addressItem, addressIndex) => (
                        <Box key={productIndex} sx={{ mt: 4 }}>
                          <Card
                            sx={{
                              borderRadius: "0px",
                              border: "0px",
                              boxShadow: "none",
                            }}
                          >
                            <Grid container spacing={3}>
                              <Grid item md={12}>
                                <Stack
                                  direction="row"
                                  spacing={2}
                                  alignItems="center"
                                  className="flexDirection"
                                >
                                  <Typography fontSize={16}>
                                    Address Type :
                                  </Typography>
                                  <Typography
                                    fontSize={14}
                                    sx={{ textTransform: "capitalize" }}
                                  >
                                    {addressItem?.type == "drop"
                                      ? "Delivery"
                                      : addressItem?.type}
                                  </Typography>
                                </Stack>
                              </Grid>
                              <Grid item md={12}>
                                <Box>
                                  <TextBox
                                    fullWidth
                                    label="Post Code"
                                    placeholder="Enter Post Code"
                                    value={
                                      productItem?.product?.copyAvobe
                                        ? formik?.values?.items[0]?.address[
                                            addressIndex
                                          ]?.pin_code
                                        : addressItem?.pin_code
                                    }
                                    name={`items[${productIndex}].address[${addressIndex}].pin_code`}
                                    onChange={(e) => {
                                      const enteredPostalCode =
                                        e.target.value.toUpperCase();

                                      if (
                                        enteredPostalCode.length <= 8 ||
                                        enteredPostalCode.length === 0
                                      ) {
                                        formik.setFieldValue(
                                          `items[${productIndex}].address[${addressIndex}].pin_code`,
                                          enteredPostalCode
                                        );
                                      }
                                    }}
                                    size="small"
                                    helperText={
                                      !isEmpty(formik.touched) &&
                                      formik?.errors?.items &&
                                      formik?.errors?.items[productIndex]
                                        ?.address[addressIndex].pin_code
                                    }
                                  />
                                </Box>
                              </Grid>
                              <Grid item md={12}>
                                <GoogleAutocomplete
                                  fullWidth
                                  size="small"
                                  labelname="Address"
                                  name={`items[${productIndex}].address[${addressIndex}].address`}
                                  value={
                                    productItem?.product?.copyAvobe
                                      ? formik?.values?.items[0]?.address[
                                          addressIndex
                                        ].address
                                      : addressItem?.address
                                  }
                                  onSelect={(address, lat, long) => {
                                    formik.setFieldValue(
                                      `items[${productIndex}].address[${addressIndex}].address`,
                                      address
                                    );
                                    formik.setFieldValue(
                                      `items[${productIndex}].address[${addressIndex}].lat`,
                                      lat
                                    );
                                    formik.setFieldValue(
                                      `items[${productIndex}].address[${addressIndex}].long`,
                                      long
                                    );
                                  }}
                                  onChange={(e) => {
                                    formik.setFieldValue(
                                      `items[${productIndex}].address[${addressIndex}].address`,
                                      e
                                    );
                                  }}
                                  endIcon={
                                    addressItem?.address && (
                                      <IconButton
                                        size="small"
                                        inputEndAdornmentPosition="end"
                                        onClick={() => {
                                          formik.setFieldValue(
                                            `items[${productIndex}].address[${addressIndex}].address`,
                                            ""
                                          );
                                          formik.setFieldValue(
                                            `items[${productIndex}].address[${addressIndex}].lat`,
                                            ""
                                          );
                                          formik.setFieldValue(
                                            `items[${productIndex}].address[${addressIndex}].long`,
                                            ""
                                          );
                                        }}
                                      >
                                        <Close fontSize="small" />
                                      </IconButton>
                                    )
                                  }
                                  helperText={
                                    !isEmpty(formik.touched) &&
                                    formik?.errors?.items &&
                                    formik?.errors?.items[productIndex]
                                      ?.address[addressIndex].address
                                  }
                                />
                              </Grid>
                            </Grid>
                          </Card>
                        </Box>
                      ))}
                  </Box>
                </Card>
              </Box>
            );
          })}
      </Box>

      <Button
        variant="outlined"
        onClick={() => addProduct()}
        startIcon={<Add />}
        color="primary"
        style={{ marginBottom: "100px" }}
      >
        Add Another Address
      </Button>

      <Divider sx={{ my: 3 }} />
    </>
  );
};

export default StepTwo;
