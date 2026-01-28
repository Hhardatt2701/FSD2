import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

export default function LocalStateCounter({ cno }) {
  const [count, setCount] = useState(0);

  
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <h5>by harshit hardatta</h5>,
    <Box sx={{ marginBottom: 2 }}>
      
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", padding: 2 }}>
          <h3>
            {cno} : Local State Count: {count}
          </h3>

          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={increaseCount}>
              Increase
            </Button>
            <Button variant="outlined" onClick={decreaseCount}>
              Decrease
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
