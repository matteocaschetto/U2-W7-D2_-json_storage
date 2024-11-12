function updateSavedName() {
  const savedName = localStorage.getItem("userName");
  const savedNameDiv = document.getElementById("savedName");

  if (savedName) {
    savedNameDiv.textContent = `Nome salvato: ${savedName}`;
  } else {
    savedNameDiv.textContent = "";
  }
}

function saveName() {
  const nameInput = document.getElementById("nameInput").value;
  if (nameInput) {
    localStorage.setItem("userName", nameInput);
    updateSavedName();
  } else {
    alert("inserisci il tuo nome.");
  }
}

function removeName() {
  localStorage.removeItem("userName");
  document.getElementById("nameInput").value = "";
  updateSavedName();
}

document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("saveBtn");
  saveButton.addEventListener("click", function () {
    saveName();
  });

  const removeButton = document.getElementById("removeBtn");
  removeButton.addEventListener("click", function () {
    removeName();
  });

  updateSavedName();
});

function updateCounter() {
  let counter = sessionStorage.getItem("counter");
  if (counter === null) {
    counter = 0;
  } else {
    counter = parseInt(counter) + 1;
  }
  sessionStorage.setItem("counter", counter);
  document.getElementById("counter").textContent = counter;
}

setInterval(updateCounter, 1000);

updateCounter();
