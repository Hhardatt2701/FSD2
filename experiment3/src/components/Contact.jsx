import { Typography, Card, CardContent, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Contact Page
        </Typography>

        <TextField
          label="Name"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Email"
          fullWidth
          margin="normal"
        />

        <Button variant="contained" sx={{ marginTop: 2 }}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
