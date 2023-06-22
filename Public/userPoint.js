let questionData;

async function handleGetData() {
  const id = window.location.pathname.split("/")[2];
  const response = await fetch(`http://localhost:4040/api/rounds/${id}`);
  const data = await response.json();
  questionData = data;
  console.log(" Hello mấy th ngu chơi game", questionData);
}
