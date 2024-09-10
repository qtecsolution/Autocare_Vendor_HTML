document.addEventListener("DOMContentLoaded", function () {
  // Initialize default tags for each input
  addTag("Toyota Camry", "tags-meta");
  addTag("Honda Accord", "tags-meta");
  addTag("Ford Mustang", "tags-meta");
  addTag("Chevrolet Malibu", "tags-meta");

  addTag("Random", "tags-input-1");
  addTag("Special", "tags-input-1");

  addTag("Car", "tags-input-2");
  addTag("Bike", "tags-input-2");

  addTag("Car", "tags-input-3");
  addTag("Bike", "tags-input-3");

  addTag("Toyota", "tags-input-4");
  addTag("Ford", "tags-input-4");
  addTag("Honda", "tags-input-4");
  addTag("BMW", "tags-input-4");

  addTag("Subway", "tags-input-5");
  addTag("Helicopter", "tags-input-5");
});

function setupInputListeners(inputId, containerId) {
  document.getElementById(inputId).addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const input = event.target;
      const tagText = input.value.trim();

      if (tagText) {
        addTag(tagText, containerId);
        input.value = "";
      }
    }
  });
}

function addTag(tagText, containerId) {
  const tagsInput = document.getElementById(containerId);
  const tag = document.createElement("div");
  tag.className = "tag";
  tag.textContent = tagText;

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-tag";
  removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M9 3L3 9M3 3L9 9" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  removeBtn.addEventListener("click", function () {
    tagsInput.removeChild(tag);
  });

  tag.appendChild(removeBtn);
  tagsInput.insertBefore(tag, tagsInput.querySelector("input"));
}

// Set up input listeners for all five inputs
setupInputListeners("tag-meta", "tags-meta");
setupInputListeners("tag-input-1", "tags-input-1");
setupInputListeners("tag-input-2", "tags-input-2");
setupInputListeners("tag-input-3", "tags-input-3");
setupInputListeners("tag-input-4", "tags-input-4");
setupInputListeners("tag-input-5", "tags-input-5");
