import { Typography, Card, CardContent } from "@mui/material";

export default function Home() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Welcome to Home Page
        </Typography>
        <Typography variant="body1">
          This is a Single Page Application built using React Router by Harshit.
        </Typography>
      </CardContent>
    </Card>
  );
}
