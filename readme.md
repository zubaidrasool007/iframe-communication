## The Iframe Communication 💬

### The Idea 💡

- I had a task to host a React application through an iframe to a different technology stack like Angular, WordPress, etc. 🌐
- The main task was to send data from the host application to the embedded React app and also send data from the React application to the host application. 🔄

### Implementation 🛠️

- I created a simple HTML file with an iframe and added a script to handle data communication.
- I developed a React 18 application to be embedded in the host HTML:
    - Added a simple component with text, an image, and a button to send data to the host application.
    - Implemented code to receive data from the host application.
    - Included code to send data to the host application.
- Data exchange is achieved using the `window.postMessage` function and host URLs. 🔗
