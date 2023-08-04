import Card from "../Components/Card";
import Header from "../Components/Header";
import "../Global css/Style.css";
import "../Global css/util.css";
import "./PageCss/Members.css";
import Profile from "../Components/Images/Profile.png";

const Members = () => {
  return (
    <>
      <Header
        headerTitle1="HOME"
        headerTitle2="ABOUT US"
        headerTitle3="MEMBERS"
        headerTitle4="GALLERY"
        headerTitle5="ACTIVITY"
      />
      <div class="container">
        <div class="members_wrapper">
          <Card source={Profile} />
          <Card source={Profile} />
          <Card source={Profile} />
          <Card source={Profile} />
          <Card source={Profile} />
          <Card source={Profile} />
          <Card source={Profile} />
          <Card source={Profile} />
          <Card source={Profile} />
        </div>
      </div>
    </>
  );
};

export default Members;
