import Header from "@/components/Header/Header";
import TrendingSection from "@/components/TrendingSection/TrendingSection";

export default function Home() {
  return (
    <>
      <Header />
      <TrendingSection cards={cardsData} />
    </>
  );
}

const cardsData = [
  {
    name: "Ivy",
    user: {
      avatar: {
        url: "/images/avatar.png",
      },
      verified: true,
    },
    mediaUrl: "/images/nft.jpg",
    price: 1,
    currency: "ETH",
  },
  {
    name: "Judie",
    user: {
      avatar: {
        url: "/images/avatar.png",
      },
      verified: true,
    },
    mediaUrl: "/images/nft.jpg",
    price: 2.3,
    currency: "ETH",
  },
  {
    name: "Juniper",
    user: {
      avatar: {
        url: "/images/avatar.png",
      },
      verified: true,
    },
    mediaUrl: "/images/nft.jpg",
    price: 5,
    currency: "ETH",
  },
  {
    name: "Maple",
    user: {
      avatar: {
        url: "images/avatar.png",
      },
      verified: true,
    },
    mediaUrl: "/images/nft.jpg",
    price: 10,
    currency: "ETH",
  },
];
