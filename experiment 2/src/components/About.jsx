import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function About() {
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar alt="Harshit" src="/static/images/avatar/1.jpg" />
        <h2>Welcome to About Page</h2>
      </Stack>

      <br />

      <Typography sx={{ mt: 1 }}>
        This is experiment 2 of FSD-2 where I have created a Single Page
        Application using React Router and Material UI components.
      </Typography>

      <br /><br />

      <Card variant="elevation">
        <CardContent>
          <Typography>
            Get to know more about this SPA and the UI components used in it.
          </Typography>
        </CardContent>
      </Card>

      <br /><br />

      
      <TextField
        label="Your Feedback"
        variant="outlined"
        fullWidth
      />

      <br /><br />

      
      <FormControlLabel
        control={<Checkbox />}
        label="Interested in this project"
      />
    </>
  );
}
