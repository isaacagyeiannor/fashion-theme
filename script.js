const chips = document.querySelectorAll(".chip");
const toggles = document.querySelectorAll(".toggle");
const grid = document.getElementById("fashionGrid");
const cards = Array.from(document.querySelectorAll(".card"));
const searchInput = document.querySelector(".search input");

const setActive = (buttons, activeButton) => {
  buttons.forEach((button) => button.classList.remove("active"));
  activeButton.classList.add("active");
};

const filterCards = () => {
  const activeChip = document.querySelector(".chip.active");
  const filter = activeChip ? activeChip.dataset.filter : "all";
  const query = searchInput.value.trim().toLowerCase();

  cards.forEach((card) => {
    const matchesFilter =
      filter === "all" || card.dataset.category === filter;
    const textContent = card.textContent.toLowerCase();
    const matchesQuery = textContent.includes(query);

    card.style.display = matchesFilter && matchesQuery ? "flex" : "none";
  });
};

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    setActive(chips, chip);
    filterCards();
  });
});

searchInput.addEventListener("input", () => {
  filterCards();
});

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    setActive(toggles, toggle);
    const sort = toggle.dataset.sort;

    const sorted = [...cards].sort((a, b) => {
      const aValue = Number(a.dataset.popularity);
      const bValue = Number(b.dataset.popularity);
      return sort === "new" ? aValue - bValue : bValue - aValue;
    });

    sorted.forEach((card) => grid.appendChild(card));
  });
});

document.querySelectorAll(".save").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    button.classList.toggle("saved");
    button.textContent = button.classList.contains("saved") ? "✓" : "♡";
  });
});

filterCards();
