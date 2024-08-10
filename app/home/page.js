"use client";
import { Box, Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import { auth } from "../../firebase";
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm going to be your language tutor for this lesson, nice to meet you!",
    },
  ]);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const sendMessage = async () => {
    setMessage("");
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([...messages, { role: "user", content: message }]),
    }).then(async (res) => {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let result = "";
      return reader.read().then(function processText({ done, value }) {
        if (done) {
          return result;
        }
        const text = decoder.decode(value || new Int8Array(), { stream: true });
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ];
        });
        return reader.read().then(processText);
      });
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
      }}
    >
      <Stack
        direction={"column"}
        width="500px"
        height="700px"
        border="1px solid #f48db4"
        borderRadius="24px"
        p={3}
        spacing={3}
        bgcolor="rgba(255, 255, 255, 0.9)"
        sx={{
          boxShadow: "0px 8px 30px rgba(244, 141, 180, 0.2)",
        }}
      >
        <Stack
          direction={"column"}
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
          sx={{
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(244, 141, 180, 0.1)",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(244, 141, 180, 0.5)",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "rgba(244, 141, 180, 0.7)",
            },
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.role === "assistant" ? "flex-start" : "flex-end"
              }
            >
              <Box
                bgcolor={message.role === "assistant" ? "#ff88b7" : "#b388ff"}
                color="white"
                textAlign="left"
                borderRadius={
                  message.role === "assistant"
                    ? "20px 20px 20px 4px"
                    : "20px 20px 4px 20px"
                }
                p={2}
                maxWidth="70%"
                sx={{
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {message.content}
              </Box>
            </Box>
          ))}
        </Stack>

        <Stack direction={"row"} spacing={2}>
          <TextField
            label="Message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            variant="outlined"
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
          <Button
            variant="contained"
            onClick={sendMessage}
            sx={{
              borderRadius: "20px",
              backgroundColor: "#f48db4",
              "&:hover": {
                backgroundColor: "#f06292",
              },
            }}
          >
            Send
          </Button>
          <Button
            variant="contained"
            onClick={handleLogout}
            sx={{
              borderRadius: "20px",
              backgroundColor: "#f48db4",
              "&:hover": {
                backgroundColor: "#f06292",
              },
            }}
          >
            <LogoutIcon />
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
