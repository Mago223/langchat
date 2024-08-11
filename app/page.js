"use client";
import {
  Box,
  Container,
  Grid,
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
      description: "Explore and learn various languages.",
    },
    {
      icon: <School />,
      title: "Customized Lessons",
      description: "Lessons tailored to your proficiency level.",
    },
    {
      icon: <Chat />,
      title: "Conversational Practice",
      description: "Engage in real-time conversations with AI.",
    },
    {
      icon: <EmojiObjects />,
      title: "Cultural Insights",
      description: "Gain insights into the culture behind the language.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background:
          "linear-gradient(179.4deg, rgb(253, 240, 233) 2.2%, rgb(255, 194, 203) 96.2%)",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              textAlign="center"
              color="#f48db4"
              fontWeight="bold"
              sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" } }}
            >
              Welcome to LangChat
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              textAlign="center"
              color="#333"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Your AI-powered companion for mastering new languages and
              exploring cultures.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
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
                  padding: { xs: "10px 20px", md: "12px 24px" },
                  fontSize: { xs: "0.9rem", md: "1.1rem" },
                }}
              >
                Start Your Journey
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center">
              {features.map((feature, index) => (
                <Grid item xs={6} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: { xs: 140, sm: 180, md: 200 },
                        width: "100%",
                        borderRadius: "16px",
                        boxShadow: "0px 8px 30px rgba(244, 141, 180, 0.2)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
                        <Icon
                          sx={{
                            fontSize: { xs: 30, sm: 36, md: 40 },
                            color: "#f48db4",
                            mb: 1,
                          }}
                        >
                          {feature.icon}
                        </Icon>
                        <Typography
                          variant="h6"
                          color="#333"
                          sx={{
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.9rem",
                              md: "1rem",
                            },
                            mb: 1,
                            fontWeight: "bold",
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#666"
                          sx={{
                            fontSize: {
                              xs: "0.6rem",
                              sm: "0.7rem",
                              md: "0.8rem",
                            },
                            lineHeight: 1.2,
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default LandingPage;
