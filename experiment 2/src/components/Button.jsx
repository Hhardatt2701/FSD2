import { Button as MuiButton } from '@mui/material';

export default function Button() {
  return <MuiButton variant="contained" onClick={() => alert('Submitted!')}>
    Submit</MuiButton>;
}
