const addBtn = document.getElementById("add-button");
const noteInput = document.getElementById("note-input");
const notesContainer = document.getElementById("notes-container");

addBtn.addEventListener("click", () => {
  const noteText = noteInput.value.trim();
  if (noteText === "") return;

  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <button class="delete-button">×</button>
    <p>${noteText}</p>
  `;

  notesContainer.appendChild(note);
  noteInput.value = "";

  const deleteBtn = note.querySelector(".delete-button");
  deleteBtn.addEventListener("click", () => {
    note.remove();
  });
});