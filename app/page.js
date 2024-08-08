"use client";
import {
  Box,
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
  Icon,
} from "@mui/material";
import { Language, School, Chat, EmojiObjects } from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";

function LandingPage() {
  const features = [
    {
      icon: <Language />,
      title: "Multiple Languages",
      description: "Learn any language",
    },
    {
      icon: <School />,
      title: "Personalized Lessons",
      description: "Tailored to your level",
    },
    {
      icon: <Chat />,
      title: "Interactive Chats",
      description: "Practice with AI",
    },
    {
      icon: <EmojiObjects />,
      title: "Cultural Insights",
      description: "Beyond just words",
    },
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(179.4deg, rgb(253, 240, 233) 2.2%, rgb(255, 194, 203) 96.2%)",
      }}
    >
      <Stack
        direction="column"
        spacing={4}
        alignItems="center"
        justifyContent="center"
        height="100%"
        px={4}
      >
        <Typography
          variant="h2"
          textAlign="center"
          color="#f48db4"
          fontWeight="bold"
          sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" } }}
        >
          AI Language Tutor
        </Typography>

        <Typography
          variant="h5"
          textAlign="center"
          color="#333"
          maxWidth="800px"
          sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}
        >
          Master any language with personalized, AI-powered lessons
        </Typography>

        <Link href="/login" passHref>
          <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variant="contained"
            size="large"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#f48db4",
              "&:hover": {
                backgroundColor: "#f06292",
              },
              padding: "12px 24px",
              fontSize: "1.1rem",
            }}
          >
            Start Learning Now
          </Button>
        </Link>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ flexWrap: "wrap" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  width: { xs: 150, sm: 200 },
                  height: { xs: 150, sm: 200 },
                  borderRadius: "16px",
                  boxShadow: "0px 8px 30px rgba(244, 141, 180, 0.2)",
                }}
              >
                <CardContent>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                    height="100%"
                  >
                    <Icon sx={{ fontSize: 40, color: "#f48db4" }}>
                      {feature.icon}
                    </Icon>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      color="#333"
                      sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="center"
                      color="#666"
                      sx={{ fontSize: { xs: "0.7rem", sm: "0.8rem" } }}
                    >
                      {feature.description}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default LandingPage;
