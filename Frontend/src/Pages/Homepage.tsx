import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Paragraph from "../Components/Paragraph";

const Homepage = () => {
  return (
    <>
      <Header
        headerTitle1="HOME"
        headerTitle2="ABOUT US"
        headerTitle3="MEMBERS"
        headerTitle4="GALLERY"
        headerTitle5="ACTIVITY"
      />
      <Hero />
      <Paragraph paragraph="Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    </>
  );
};

export default Homepage;
