## The Iframe Communication

#### The Idea

- I had a task to host a react application through an iframe to a different technology stack like Angular, WordPress etc.
- The main task was to send data from host application to embedded react app and also can send data from react application to host application.

#### Implementation
- I have created a simple HTML file where I added iframe into it and added script to receive and send data.
- I have created a react 18 application to be embedded into host HTML.
    - Added a simple component with some text, image and a button to send data to host application
    - Added code to receive data from the host application
    - Added code to send data to the host application
- The code sending and receiving is implemented with the help of windows.postMessage function and host URLs.
