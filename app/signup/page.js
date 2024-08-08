"use client";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Icon,
  Link as MuiLink,
} from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  LockOutlined,
  EmailOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Update the user's display name
        updateProfile(user, { displayName: fullName })
          .then(() => {
            router.push("/home");
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background:
          "linear-gradient(179.4deg, rgb(253, 240, 233) 2.2%, rgb(255, 194, 203) 96.2%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Stack
          direction="column"
          width="400px"
          border="1px solid #f48db4"
          borderRadius="24px"
          p={4}
          spacing={4}
          bgcolor="rgba(255, 255, 255, 0.9)"
          sx={{
            boxShadow: "0px 8px 30px rgba(244, 141, 180, 0.2)",
          }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            color="#f48db4"
            fontWeight="bold"
          >
            Sign Up
          </Typography>
          <form onSubmit={handleSignup}>
            <Stack spacing={3}>
              <TextField
                label="Full Name"
                type="text"
                fullWidth
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <Icon sx={{ color: "#f48db4", mr: 1 }}>
                      <PersonOutlined />
                    </Icon>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    "&.Mui-focused fieldset": {
                      borderColor: "#f48db4",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#f48db4",
                  },
                }}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <Icon sx={{ color: "#f48db4", mr: 1 }}>
                      <EmailOutlined />
                    </Icon>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    "&.Mui-focused fieldset": {
                      borderColor: "#f48db4",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#f48db4",
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <Icon sx={{ color: "#f48db4", mr: 1 }}>
                      <LockOutlined />
                    </Icon>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    "&.Mui-focused fieldset": {
                      borderColor: "#f48db4",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#f48db4",
                  },
                }}
              />
              {error && (
                <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#f48db4",
                  "&:hover": {
                    backgroundColor: "#f06292",
                  },
                  padding: "12px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </form>

          <Box textAlign="center" mt={2}>
            <Typography variant="body1" color="#666">
              Already have an account?{" "}
              <MuiLink
                component={Link}
                href="/login"
                sx={{
                  color: "#f48db4",
                  textDecoration: "none",
                  fontWeight: "bold",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Log in
              </MuiLink>
            </Typography>
          </Box>
        </Stack>
      </motion.div>
    </Box>
  );
}

export default Signup;
