// import React from 'react';
// import { Container, Typography, Grid, TextField, Button, Card, CardContent, Box } from '@mui/material';
// import CreditCardIcon from '@mui/icons-material/CreditCard';

// const CardPaymentForm = () => {
//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" align="center" gutterBottom style={{ marginBottom: '2rem', color: '#333' }}>
//         Credit Card Payment Form
//       </Typography>
//       <Card variant="outlined" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '16px' }}>
//         <CardContent>
//           <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
//             <CreditCardIcon fontSize="large" style={{ color: '#ff7533' }} />
//           </Box>
//           <form>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Card Number"
//                   placeholder="Valid Card Number"
//                   InputProps={{
//                     startAdornment: <CreditCardIcon style={{marginRight:"10px"}} />
//                   }}
//                   style={{ borderRadius: '8px', marginBottom: '1rem'}}
//                 />
//               </Grid>

//               <Grid item xs={6}>
//                 <TextField fullWidth label="Expiration Date" placeholder="MM / YY" style={{ borderRadius: '8px', marginBottom: '1rem' }} />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField fullWidth label="CV Code" placeholder="CVC" style={{ borderRadius: '8px', marginBottom: '1rem' }} />
//               </Grid>

//               <Grid item xs={12}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={6}>
//                     <TextField fullWidth label="Card Owner" placeholder="Card Owner Names" style={{ borderRadius: '8px', marginBottom: '1rem' }} sx={{ '& input': { fontSize: '18px' }}} />
//                   </Grid>
//                   <Grid item xs={6}>
//                     <TextField fullWidth label="Email" placeholder="Email Address" style={{ borderRadius: '8px', marginBottom: '1rem' }} sx={{ '& input': { fontSize: '18px' }}} />
//                   </Grid>
//                 </Grid>
//               </Grid>

//               <Grid item xs={12}>
//                 <Button variant="contained" style={{ backgroundColor: '#ff7533', color: 'white', borderRadius: '8px' }} fullWidth>
//                   Process Payment
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default CardPaymentForm;

// import React from "react";
// import {
//   Container,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   Box,
// } from "@mui/material";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const CardPaymentForm = () => {
//   // Define Yup validation schema
//   const validationSchema = Yup.object().shape({
//     cardNumber: Yup.string().required("Card Number is required"),
//     expirationDate: Yup.string().required("Expiration Date is required"),
//     cvCode: Yup.string().required("CV Code is required"),
//     cardOwner: Yup.string().required("Card Owner is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//   });

//   return (
//     <Container maxWidth="md">
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         style={{ marginBottom: "2rem", color: "#333" }}
//       >
//         Credit Card Payment Form
//       </Typography>
//       <Card
//         variant="outlined"
//         style={{
//           boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//           borderRadius: "16px",
//         }}
//       >
//         <CardContent>
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             mb={2}
//           >
//             <CreditCardIcon fontSize="large" style={{ color: "#ff7533" }} />
//           </Box>
//           {/* Use Formik for form management */}
//           <Formik
//             initialValues={{
//               cardNumber: "",
//               expirationDate: "",
//               cvCode: "",
//               cardOwner: "",
//               email: "",
//             }}
//             validationSchema={validationSchema}
//             onSubmit={(values, { setSubmitting }) => {
//               // Handle form submission here
//               console.log(values);
//               setSubmitting(false);
//             }}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <Field
//                       as={TextField}
//                       fullWidth
//                       name="cardNumber"
//                       label="Card Number"
//                       type="Number"
//                       placeholder="Valid Card Number"
//                       InputProps={{
//                         startAdornment: (
//                           <CreditCardIcon style={{ marginRight: "10px" }} />
//                         ),
//                         inputMode: "numeric",
//                         pattern: "[0-9]*", // Only allow numeric characters
//                       }}
//                       style={{ borderRadius: "8px", marginBottom: "1rem" }}
//                       validate={(value) => {
//                         let errorMessage = "";
//                         if (value.length !== 16) {
//                           errorMessage = "Card number must be 16 digits";
//                         }
//                         return errorMessage;
//                       }}
//                     />
//                     <ErrorMessage
//                       name="cardNumber"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </Grid>

//                   <Grid item xs={6}>
//                     <Field
//                       as={TextField}
//                       fullWidth
//                       name="expirationDate"
//                       label="Expiration Date"
//                       placeholder="MM / YY"
//                       style={{ borderRadius: "8px", marginBottom: "1rem" }}
//                     />
//                     <ErrorMessage
//                       name="expirationDate"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Field
//                       as={TextField}
//                       fullWidth
//                       name="cvCode"
//                       label="CV Code"
//                       placeholder="CVC"
//                       style={{ borderRadius: "8px", marginBottom: "1rem" }}
//                     />
//                     <ErrorMessage
//                       name="cvCode"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Grid container spacing={2}>
//                       <Grid item xs={6}>
//                         <Field
//                           as={TextField}
//                           fullWidth
//                           name="cardOwner"
//                           label="Card Owner"
//                           placeholder="Card Owner Names"
//                           style={{ borderRadius: "8px", marginBottom: "1rem" }}
//                         />
//                         <ErrorMessage
//                           name="cardOwner"
//                           component="div"
//                           style={{ color: "red" }}
//                         />
//                       </Grid>
//                       <Grid item xs={6}>
//                         <Field
//                           as={TextField}
//                           fullWidth
//                           name="email"
//                           label="Email"
//                           placeholder="Email Address"
//                           style={{ borderRadius: "8px", marginBottom: "1rem" }}
//                         />
//                         <ErrorMessage
//                           name="email"
//                           component="div"
//                           style={{ color: "red" }}
//                         />
//                       </Grid>
//                     </Grid>
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       style={{
//                         backgroundColor: "#ff7533",
//                         color: "white",
//                         borderRadius: "8px",
//                       }}
//                       fullWidth
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Processing..." : "Process Payment"}
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Form>
//             )}
//           </Formik>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default CardPaymentForm;

// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   Box,
// } from "@mui/material";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const CardPaymentForm = () => {
//   // Define Yup validation schema
//   const validationSchema = Yup.object().shape({
//     cardNumber: Yup.string().required("Card Number is required"),
//     expirationDate: Yup.string().required("Expiration Date is required"),
//     cvCode: Yup.string().required("CV Code is required"),
//     cardOwner: Yup.string().required("Card Owner is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//   });

//   // State to store the selected plan amount
//   const [selectedAmount, setSelectedAmount] = useState("$3000");

//   return (
//     <Container maxWidth="md">
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         style={{ marginBottom: "2rem", color: "#333" }}
//       >
//         Credit Card Payment Form
//       </Typography>
//       <Card
//         variant="outlined"
//         style={{
//           boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//           borderRadius: "16px",
//         }}
//       >
//         <CardContent>
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             mb={2}
//           >
//             <CreditCardIcon fontSize="large" style={{ color: "#ff7533" }} />
//           </Box>
//           {/* Use Formik for form management */}
//           <Formik
//             initialValues={{
//               cardNumber: "",
//               expirationDate: "",
//               cvCode: "",
//               cardOwner: "",
//               email: "",
//               amount: selectedAmount, // Include the selected amount in form values
//             }}
//             validationSchema={validationSchema}
//             onSubmit={(values, { setSubmitting }) => {
//               // Handle form submission here
//               console.log(values);
//               setSubmitting(false);
//             }}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     {/* Display selected amount */}
//                     <Typography variant="h6" gutterBottom>
//                       Selected Plan Amount: {selectedAmount}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button
//                       onClick={() => setSelectedAmount("$3000")}
//                       variant="outlined"
//                       style={{ marginRight: "1rem" }}
//                     >
//                       $3000 /month
//                     </Button>
//                     <Button
//                       onClick={() => setSelectedAmount("$102")}
//                       variant="outlined"
//                       style={{ marginRight: "1rem" }}
//                     >
//                       $102 /month
//                     </Button>
//                     {/* Add more buttons for other plan amounts */}
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Field
//                       as={TextField}
//                       fullWidth
//                       name="cardNumber"
//                       label="Card Number"
//                       type="Number"
//                       placeholder="Valid Card Number"
//                       InputProps={{
//                         startAdornment: (
//                           <CreditCardIcon style={{ marginRight: "10px" }} />
//                         ),
//                         inputMode: "numeric",
//                         pattern: "[0-9]*", // Only allow numeric characters
//                       }}
//                       style={{ borderRadius: "8px", marginBottom: "1rem" }}
//                       validate={(value) => {
//                         let errorMessage = "";
//                         if (value.length !== 16) {
//                           errorMessage = "Card number must be 16 digits";
//                         }
//                         return errorMessage;
//                       }}
//                     />
//                     <ErrorMessage
//                       name="cardNumber"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Field
//                       as={TextField}
//                       fullWidth
//                       name="expirationDate"
//                       label="Expiration Date"
//                       placeholder="MM / YY"
//                       style={{ borderRadius: "8px", marginBottom: "1rem" }}
//                     />
//                     <ErrorMessage
//                       name="expirationDate"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Field
//                       as={TextField}
//                       fullWidth
//                       name="cvCode"
//                       label="CV Code"
//                       placeholder="CVC"
//                       style={{ borderRadius: "8px", marginBottom: "1rem" }}
//                     />
//                     <ErrorMessage
//                       name="cvCode"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Field
//                       as={TextField}
//                       fullWidth
//                       name="cardOwner"
//                       label="Card Owner"
//                       placeholder="Card Owner Names"
//                       style={{ borderRadius: "8px", marginBottom: "1rem" }}
//                     />
//                     <ErrorMessage
//                       name="cardOwner"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Field
//                       as={TextField}
//                       fullWidth
//                       name="email"
//                       label="Email"
//                       placeholder="Email Address"
//                       style={{ borderRadius: "8px", marginBottom: "1rem" }}
//                     />
//                     <ErrorMessage
//                       name="email"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       style={{
//                         backgroundColor: "#ff7533",
//                         color: "white",
//                         borderRadius: "8px",
//                       }}
//                       fullWidth
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting
//                         ? "Processing..."
//                         : `Get Started with ${selectedAmount}`}
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Form>
//             )}
//           </Formik>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default CardPaymentForm;

import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import * as Yup from "yup";
import Header from "@/layout/primaryWeb/header";
import Footer from "@/layout/primaryWeb/footer";

const CardPaymentForm = () => {
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string().required("Card Number is required"),
    expirationDate: Yup.string().required("Expiration Date is required"),
    cvCode: Yup.string().required("CVC Code is required"),
    cardOwner: Yup.string().required("Card Owner is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  // State to store the selected plan amount
  const [selectedAmount, setSelectedAmount] = useState("$2000");

  //this state for validation
  const [cardNumber, setCardNumber] = useState("");

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ marginBottom: "2rem", color: "#333", paddingTop: "25px" }}
        >
          Pay with card
        </Typography>
        <Card
          variant="outlined"
          style={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
          }}
        >
          <CardContent>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={2}
            >
              <CreditCardIcon fontSize="large" style={{ color: "#ff7533" }} />
              {/* <AccountBalanceIcon fontSize="large" style={{ color: "#ff7533" }} /> */}
            </Box>
            <Formik
              initialValues={{
                cardNumber: "",
                expirationDate: "",
                cvCode: "",
                cardOwner: "",
                email: "",
                amount: selectedAmount,
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                // Handle form submission here
                console.log(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      container
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography variant="h6" gutterBottom>
                        Selected Plan Amount: {selectedAmount}
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      container
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        onClick={() => setSelectedAmount("$2000")}
                        variant="outlined"
                        style={{
                          marginRight: "1rem",
                          backgroundColor:
                            selectedAmount === "$2000" ? "#ff7533" : "inherit",
                          color:
                            selectedAmount === "$2000" ? "#fff" : "inherit",
                        }}
                      >
                        $2000 /month
                      </Button>
                      <Button
                        onClick={() => setSelectedAmount("$102")}
                        variant="outlined"
                        style={{
                          marginRight: "1rem",
                          backgroundColor:
                            selectedAmount === "$102" ? "#ff7533" : "inherit",
                          color: selectedAmount === "$102" ? "#fff" : "inherit",
                        }}
                      >
                        $102 /month
                      </Button>
                      {/* Add more buttons for other plan amounts */}
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Card Number"
                        placeholder="Valid Card Number"
                        value={cardNumber}
                        onChange={(e) => {
                          const input = e.target.value.replace(/\D/g, "");
                          if (!isNaN(input) && input.length <= 16) {
                            setCardNumber(input);
                          }
                        }}
                        InputProps={{
                          startAdornment: (
                            <CreditCardIcon style={{ marginRight: "10px" }} />
                          ),
                          inputMode: "numeric",
                          pattern: "[0-9]*",
                        }}
                        style={{ borderRadius: "8px", marginBottom: "1rem" }}
                        error={cardNumber.length !== 16}
                      />
                      {cardNumber.length !== 16 && (
                        <div style={{ color: "red" }}>
                          Card number must be 16 digits
                        </div>
                      )}
                    </Grid>

                    <Grid item xs={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="expirationDate"
                        label="Expiration Date"
                        type="String"
                        placeholder="MM / YY"
                        style={{ borderRadius: "8px", marginBottom: "1rem" }}
                      />
                      <ErrorMessage
                        name="expirationDate"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </Grid>

                    
                    <Grid item xs={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="cvCode"
                        type="Number"
                        label="CVC Code"
                        placeholder="CVC"
                        style={{ borderRadius: "8px", marginBottom: "1rem" }}
                      />
                      <ErrorMessage
                        name="cvCode"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </Grid>

                    
                    <Grid item xs={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="cardOwner"
                        label="Card Owner"
                        placeholder="Card Owner Names"
                        style={{ borderRadius: "8px", marginBottom: "1rem" }}
                      />
                      <ErrorMessage
                        name="cardOwner"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="email"
                        label="Email"
                        placeholder="Email Address"
                        style={{ borderRadius: "8px", marginBottom: "1rem" }}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        style={{
                          backgroundColor: "#ff7533",
                          color: "white",
                          borderRadius: "8px",
                        }}
                        fullWidth
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? "Processing..."
                          : `Get Started with ${selectedAmount}`}
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
      <Box mt={15}>
        <Footer />
      </Box>
    </>
  );
};

export default CardPaymentForm;
