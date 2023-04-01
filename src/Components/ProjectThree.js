import Gallery from "./Gallery";
import "./ProjectTwo.css";

function ProjectThree() {
  const galleryImages = [
    {
      img: "Images/p3_1.jpg",
    },
    {
      img: "Images/p3_2.jpg",
    },
    {
      img: "Images/p3_3.jpg",
    },
    {
      img: "Images/p3_4.jpg",
    },
    {
      img: "Images/p3_5.jpg",
    },
    {
      img: "Images/p3_6.jpg",
    },
    {
      img: "Images/p3_7.jpg",
    },
    {
      img: "Images/p3_8.jpg",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImages} />
    </div>
  );
}

export default ProjectThree;
