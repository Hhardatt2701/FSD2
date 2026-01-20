import { Select as MuiSelect, MenuItem } from '@mui/material';

export default function Select() {
  return (
    <MuiSelect defaultValue="">
      <MenuItem value="student">Student</MenuItem>
      <MenuItem value="faculty">Faculty</MenuItem>
    </MuiSelect>
  );
}
