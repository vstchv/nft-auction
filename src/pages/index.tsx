import Header from "@/components/Header/Header";
import UserCard from "@/components/UserCard/UserCard";

export default function Home() {
  return (
    <>
      <Header />
      <UserCard name="terika77" verified info="134 Items" size={90} />
    </>
  );
}
