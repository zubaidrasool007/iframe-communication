import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";

const EmbeddedComponent = () => {
  const [message, setMessage] = useState(
    "This is text written in the child component which will be changed once you click the button! The text is in the child component and will be changed from the child component for now! Working on to change it from the parent component. Wish me good luck to achieve it!"
  );
  const [parentMessage, setParentMessage] = useState("");

  const handleButtonClick = () => {
    setMessage(
      "\"Button Clicked!\" This is text written in the child component which will be changed once you click the button! The text is in the child component and will be changed from the child component for now! Working on to change it from the parent component. Wish me good luck to achieve it!"
    );
    window.parent.postMessage(
      "Button clicked message received from child!",
      "*"
    );
  };

  useEffect(() => {
    const handleMessage = (event) => {
        console.log(event.data)
      if (event.data.isParent) {
        setParentMessage(event.data.message);
      } else if (event.origin === "http://localhost:3000") {
        setMessage("Hello from React Component");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <Card variant="outlined" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          Embedded Component
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://placekitten.com/200/200"
            alt="Kitten"
            style={{ marginRight: "20px" }}
          />
          <Typography variant="body1">{message}</Typography>
        </div>
        {parentMessage.length > 0 && (
          <Typography variant="body1" align="center">
            {parentMessage}
          </Typography>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            onClick={handleButtonClick}
            variant="contained"
            color="primary"
          >
            Click Me
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmbeddedComponent;
