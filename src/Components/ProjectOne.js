import Gallery from "./Gallery";
import "./ProjectOne.css";

function ProjectOne() {
  const galleryImages = [
    {
      img: "Images/p1_1.jpg",
    },
    {
      img: "Images/p1_2.jpg",
    },
    {
      img: "Images/p1_3.jpg",
    },
    {
      img: "Images/p1_4.jpg",
    },
    {
      img: "Images/p1_5.jpg",
    },
    {
      img: "Images/p1_6.jpg",
    },
    {
      img: "Images/test_image_7.jpg",
    },
    {
      img: "Images/test_image_8.jpg",
    },
  ];

  return (
    <div className="ProjOne">
      <Gallery galleryImages={galleryImages} />
    </div>
  );
}

export default ProjectOne;
