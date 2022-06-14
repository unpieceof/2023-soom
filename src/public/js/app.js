// socket = 서버로의 연결
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
    console.log("Just got this : ", message, " from the Server 😘");
});

socket.addEventListener("close", () => {
    console.log("Disconnected from Server ❌");
});