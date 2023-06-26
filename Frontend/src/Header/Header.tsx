import { Match, Switch, createEffect, createSignal } from "solid-js";

import "../Global css/Style.css";
import "../Global css/util.css";
import "../Header/Header.css";

interface propstype {
  headerTitle1: string;
  headerTitle2: string;
  headerTitle3: string;
  headerTitle4: string;
  headerTitle5: string;
}

interface IconPropsType {
  height: string;
  width: string;
}

const Header = (props: propstype) => {
  const [openNavbar, setOpenNavbar] = createSignal<Boolean>(false);

  // When Pressed CrossIcon
  const handleCancelNavbar = () => {
    setOpenNavbar((isOpen) => !isOpen);
  };

  // When Pressed Hamburger Menu Item
  const handleOpenNavbar = () => {
    setOpenNavbar(true);
    console.log("clicked");
  };

  // Icon for Cross
  function CrossIcon(props: IconPropsType) {
    return (
      <svg
        fill="none"
        stroke-width="2"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
        height={props.height}
        width={props.width}
        style="overflow: visible;"
        class="Cross_icon"
        onClick={handleCancelNavbar}
      >
        <path d="M18 6 6 18M6 6l12 12"></path>
      </svg>
    );
  }

  //Icon for hamburger Menu
  function HambergurMenuIcon(props: IconPropsType) {
    return (
      <svg
        fill="currentColor"
        stroke-width="0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        height={props.height}
        width={props.width}
        style="overflow: visible;"
        class="HamburgerIcon"
        onClick={handleOpenNavbar}
      >
        <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
      </svg>
    );
  }

  function NavBarMobile() {
    return (
      // <nav class={openNavbar() ? "activeNav" : "navbar"}>
      <nav class="activeNav">
        <div class="container background">
          <div class="top_header_navbar">
            <p>logo</p>
            <CrossIcon height="0.9em" width="0.9em" />
          </div>
          <div class="Header_section_navbar">
            <a class="first_header_navbar">
              {props.headerTitle1}
              <div class="dropdown_content">
                <p>hi</p>
                <p>hello</p>
              </div>
            </a>
            <a class="">{props.headerTitle2}</a>
            <a class="">{props.headerTitle3}</a>
            <a class="">{props.headerTitle4}</a>
            <a class="">{props.headerTitle5}</a>
          </div>
        </div>
      </nav>
    );
  }

  function Body() {
    return (
      <div class="container">
        <div class="Header">
          <p>Logo</p>
          <HambergurMenuIcon height="1em" width="1em" />
        </div>
      </div>
    );
  }

  return (
    <Switch>
      <Match when={openNavbar() == true}>
        <NavBarMobile />
      </Match>
      <Match when={openNavbar() == false}>
        <Body />
      </Match>
    </Switch>
    // <>
    //   <Body />
    //   <NavBarMobile />
    // </>
  );
};

export default Header;
