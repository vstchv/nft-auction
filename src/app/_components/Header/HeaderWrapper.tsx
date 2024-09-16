import Header from "./Header";
import { getSession } from "lib";

const HeaderWrapper = async () => {
  const session = await getSession();
  const links: Link[] = [
    { text: "Home", href: "/" },
    { text: "Explore", href: "/explore" },
    { text: "Login", href: "/login" },
    { text: "Profile", href: "/profile", isVisible: session ? true : false },
  ];
  return (
    <>
      <Header links={links} />
    </>
  );
};

export default HeaderWrapper;

interface Link {
  text: string;
  href: string;
  isVisible?: boolean;
}
