import TextField from "@mui/material/TextField";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function Contact() {
  return (
    <>
      <h2>Contact Page</h2>

      <Stack spacing={2} sx={{ maxWidth: 300 }}>
        
        <TextField
          label="Enter your email"
          variant="outlined"
        />

        
        <TextField
          label="Your message"
          multiline
          rows={3}
        />

        
        <Select defaultValue="">
          <MenuItem value="">Select reason</MenuItem>
          <MenuItem value="query">Query</MenuItem>
          <MenuItem value="feedback">Feedback</MenuItem>
        </Select>

        
        <Rating defaultValue={2} size="large" />

        
        <Stack direction="row" alignItems="center">
          <Checkbox />
          <span>Subscribe to updates</span>
        </Stack>

  
        <Button variant="contained" onClick={() => alert('Form submitted!')}>
          Submit
          
        </Button>
      </Stack>
    </>
  );
}
