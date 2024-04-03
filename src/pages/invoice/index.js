import React, { useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Header from "@/layout/primaryWeb/header";
import Footer from "@/layout/primaryWeb/footer";

const InvoicePage = () => {
  // Sample data
  const invoiceData = [
    {
      sn: 1,
      jobId: "JOB001",
      jobTitle: "Software Developer",
      date: "Feb 21, 2024",
      dueDate: "Mar 15, 2024",
      status: "Pending",
      action: (
        <Button variant="contained" color="primary">
          Edit
        </Button>
      ),
    },
  ];

  // State for invoice date and due date
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [showEntries, setShowEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // Handler for changing the invoice date
  const handleInvoiceDateChange = (event) => {
    setInvoiceDate(event.target.value);
  };

  // Handler for changing the due date
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  // Handler for changing the number of entries to show
  const handleShowEntriesChange = (event) => {
    setShowEntries(event.target.value);
  };

  // Handler for searching as the user types
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtered data based on search term
  const filteredData = invoiceData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div style={{ padding: "0 20px" }}>
      <div style={{ marginBottom: "100px" }}>
        <Header />
      </div>
      <Typography variant="h4" gutterBottom>
        Invoices Page
      </Typography>

      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel id="show-label">Show</InputLabel>
            <Select
              labelId="show-label"
              id="entries-select"
              value={showEntries}
              onChange={handleShowEntriesChange}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="invoice-date"
            label="Invoice Date"
            type="date"
            fullWidth
            value={invoiceDate}
            onChange={handleInvoiceDateChange}
            InputLabelProps={{ shrink: true }}
            style={{ paddingRight: "10px" }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="due-date"
            label="Due Date"
            type="date"
            fullWidth
            value={dueDate}
            onChange={handleDueDateChange}
            InputLabelProps={{ shrink: true }}
            style={{ paddingRight: "10px" }}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={handleSearch}
              style={{ paddingRight: "10px" }}
            />
          </div>
        </Grid>
      </Grid>

      <TableContainer component={Paper} style={{ padding: "10px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SN</TableCell>
              <TableCell>Job ID</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>Invoice Date</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.sn}</TableCell>
                <TableCell>{row.jobId}</TableCell>
                <TableCell>{row.jobTitle}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.dueDate}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="body2" gutterBottom>
        Showing 1-{filteredData.length} of {filteredData.length} entries
      </Typography>
      <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default InvoicePage;
