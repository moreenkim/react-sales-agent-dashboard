import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Typography,  Dialog, DialogActions, DialogContent,  DialogTitle,  IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import axios from "axios";

export const UpdateModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id} = useParams;
  const [values, setValues] = React.useState({
    id: '',
    number: '',
    item: '',
    paid: '',
    balance: '',
    created: ''
  });



  React.useEffect(() => {
    axios
      .get("http://localhost:8000/invoices/" +id)
      .then(res => setValues({
        ...values, number:res.data.number, item:res.data.item, paid:res.data.paid, balance:res.data.balance
      }))
      .catch((err) => {console.log(err)});
  }, []);


 

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={handleOpen} color="primary" variant="contained">
        <EditTwoToneIcon/>
        <Link to={`/invoice/${id}`}/>
      </Button>
      <Dialog open={open} fullWidth>
        <DialogTitle>Edit Invoice <IconButton style={{float:'right'}} onClick={handleClose}><CloseIcon/></IconButton></DialogTitle>
        <DialogContent>
                  <Stack spacing={2} margin={2}>
                      <TextField variant="outlined" label="Number">{values.number}</TextField>
                      <TextField variant="outlined" label="Item">{values.item}</TextField>
                      <TextField variant="outlined" label="Paid">{values.paid}</TextField>
                      <TextField variant="outlined" label="Balance">{values.balance}</TextField>
                      <Button color="primary" variant="contained">Submit</Button>
                    </Stack>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export const DeleteModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={handleOpen} color="primary" variant="contained">
        <DeleteTwoToneIcon/>
      </Button>
      <Dialog open={open} fullWidth>
      <DialogTitle>Delete Invoice <IconButton style={{float:'right'}} onClick={handleClose}><CloseIcon/></IconButton></DialogTitle>
        <DialogContent>
          <Typography> Do you want to delete? </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="success" variant="contained">
            Delete 
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
};
