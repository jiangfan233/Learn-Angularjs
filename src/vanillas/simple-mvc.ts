
const Vanilla = "Vanilla";

const nameInput = document.querySelector(".name");
const nameLabel = document.querySelector(".name-label")

// 这就是一个简单的MVC模型
// View通过event把数据传递给Controller
// Controller 拿到数据再给到model
nameInput?.addEventListener("keydown", function(e) {
    // nameLabel!.innerHTML： Model
    nameLabel!.innerHTML = (<HTMLInputElement>e.target).value;
})

export default Vanilla;