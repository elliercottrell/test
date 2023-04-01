import Gallery from "./Gallery";
import "./ProjectTwo.css";

function ProjectTwo() {
  const galleryImagesTwo = [
    {
      img: "Images/p2_1.jpg",
    },
    {
      img: "Images/p2_2.jpg",
    },
    {
      img: "Images/p2_3.jpg",
    },
    {
      img: "Images/p2_4.jpg",
    },
    {
      img: "Images/p2_5.jpg",
    },
    {
      img: "Images/p2_6.jpg",
    },
    {
      img: "Images/p2_7.jpg",
    },
    {
      img: "Images/p2_8.jpg",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImagesTwo} />
    </div>
  );
}

export default ProjectTwo;
