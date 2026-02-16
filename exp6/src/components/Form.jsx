import { useState } from "react";
import {
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Container,
  Box
} from "@mui/material";

export default function FormExample() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || password === "") {
      setError("All fields are required");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (!agree) {
      setError("You must accept the terms");
      return;
    }

    setError("");
    alert("Form submitted successfully!");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2
        }}
      >
        <h3>Registration Form</h3>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <RadioGroup
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            sx={{ mt: 2 }}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>

          <FormControlLabel
            control={
              <Checkbox
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
            }
            label="I agree to terms and conditions"
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
