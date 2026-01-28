import { Typography, Card, CardContent } from "@mui/material";

export default function About() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          About Page
        </Typography>
        <Typography variant="body1">
          This experiment is about routing using Layout and nested routes.
        </Typography>
      </CardContent>
    </Card>
  );
}
