const conversation = [
  { speaker: "Bot", text: "Hello! What's your name?" },
  { speaker: "User", text: "I'm Atul." },
  { speaker: "Bot", text: "Nice to meet you, Atul!" },
];

function displayConversation() {
  const chat = document.getElementById("chat");
  let i = 0;

  function typeLine() {
    if (i >= conversation.length) return;

    const { speaker, text } = conversation[i];
    const p = document.createElement("p");
    p.innerHTML = `<strong>${speaker}:</strong> `;
    chat.appendChild(p);

    let j = 0;
    const interval = setInterval(() => {
      p.innerHTML += text[j];
      j++;
      if (j === text.length) {
        clearInterval(interval);
        i++;
        setTimeout(typeLine, 600);
      }
    }, 40);
  }

  typeLine();
}

displayConversation();
