export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Chyawanprash",
    description: "Immunity booster with authentic herbs. 1kg pack.",
    price: 350,
    category: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    name: "Herbal Hair Oil",
    description: "Nourishes scalp and promotes hair growth. 200ml.",
    price: 180,
    category: "Personal Care",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "3",
    name: "Ayurvedic Face Wash",
    description: "Gentle cleansing for glowing skin. Neem & Turmeric.",
    price: 120,
    category: "Skin Care",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "4",
    name: "Digestive Churan",
    description: "Natural remedy for digestion issues. 100g bottle.",
    price: 85,
    category: "Digestive Health",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "5",
    name: "Immunity Tablets",
    description: "Daily supplement for stronger immunity. 60 tablets.",
    price: 250,
    category: "Health Supplements",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "6",
    name: "Pure Honey",
    description: "100% organic honey from wild forests. 500g.",
    price: 400,
    category: "Food & Nutrition",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1000",
  }
];
