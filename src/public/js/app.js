// socket = 서버로의 연결
const socket = new WebSocket(`ws://${window.location.host}`);
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

function handleOpen() {
    console.log("Connected to Server ✅");
};

socket.addEventListener("open", handleOpen);

socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    messageList.append(li);
});


socket.addEventListener("close", () => {
    console.log("Disconnected from Server ❌");
});

function handleSubmit(event){
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(input.value);
    input.value = '';
}
messageForm.addEventListener("submit", handleSubmit);