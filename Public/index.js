const form = document.querySelector("form");
const randomId = Math.random().toString(36).substr(2, 8);
console.log(randomId);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;
  const player3 = document.getElementById("player3").value;
  const player4 = document.getElementById("player4").value;

  if (!player1 || !player2 || !player3 || !player4) {
    alert("Vui lòng nhập tên cho tất cả người chơi!");
    return;
  }

  const playerData = {
    id: randomId,
    players: [
      {
        player1: player1,
        point: 0,
      },
      {
        player2: player2,
        point: 0,
      },
      {
        player3: player3,
        point: 0,
      },
      {
        player4: player4,
        point: 0,
      },
    ],
    rounds: [],
  };
  console.log("Dữ liệu người dùng ===> ", playerData);
  fetch(`http://localhost:4040/api/rounds`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playerData),
  });
  window.location.href = `http://localhost:4040/rounds/${randomId}`;
});
