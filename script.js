const looks = [
  {
    season: "SPRING / SUMMER 2024",
    title: "Tied green V-neck shirt",
    description:
      "Lightweight linen with a soft satin tie. Designed to float between minimal tailoring and playful street energy.",
    heroImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    sideImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=520&q=80",
    products: [
      {
        title: "Medium crossbody bag",
        price: "$54",
        image:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=220&q=80",
      },
      {
        title: "High heel sandals",
        price: "$89",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=220&q=80",
      },
    ],
  },
  {
    season: "RUNWAY 2020",
    title: "Double-breasted trench set",
    description:
      "Sculpted silhouettes and belt details inspired by modern runway essentials. Pair with tonal accessories for impact.",
    heroImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    sideImage:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=520&q=80",
    products: [
      {
        title: "Kitten heel slingback",
        price: "$109",
        image:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=220&q=80",
      },
      {
        title: "Oversized trench coat",
        price: "$199",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=220&q=80",
      },
    ],
  },
];

let currentIndex = 0;

const seasonEl = document.getElementById("season");
const titleEl = document.getElementById("title");
const descriptionEl = document.getElementById("description");
const heroImageEl = document.getElementById("heroImage");
const sideImageEl = document.getElementById("sideImage");
const productOne = document.getElementById("productOne");
const productTwo = document.getElementById("productTwo");

const updateProductCard = (card, data) => {
  const title = card.querySelector("h3");
  const price = card.querySelector("p");
  const image = card.querySelector("img");
  title.textContent = data.title;
  price.textContent = data.price;
  image.src = data.image;
  image.alt = data.title;
};

const renderLook = () => {
  const look = looks[currentIndex];
  seasonEl.textContent = look.season;
  titleEl.textContent = look.title;
  descriptionEl.textContent = look.description;
  heroImageEl.src = look.heroImage;
  sideImageEl.src = look.sideImage;
  updateProductCard(productOne, look.products[0]);
  updateProductCard(productTwo, look.products[1]);
};

const nextLook = () => {
  currentIndex = (currentIndex + 1) % looks.length;
  renderLook();
};

const prevLook = () => {
  currentIndex = (currentIndex - 1 + looks.length) % looks.length;
  renderLook();
};

document.getElementById("nextBtn").addEventListener("click", nextLook);
document.getElementById("prevBtn").addEventListener("click", prevLook);

renderLook();
