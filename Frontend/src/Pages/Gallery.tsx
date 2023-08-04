import Header from "../Components/Header";
import GalleryBody from "../Components/GalleryBody";
const Gallery = () => {
  return (
    <>
      <Header
        headerTitle1="HOME"
        headerTitle2="ABOUT US"
        headerTitle3="MEMBERS"
        headerTitle4="GALLERY"
        headerTitle5="ACTIVITY"
      />
      <GalleryBody />
    </>
  );
};

export default Gallery;
