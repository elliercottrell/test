import Gallery from "./Gallery";
import "./ProjectFour.css";

function ProjectFour() {
  const galleryImages = [
    {
      img: "Images/p4_1.jpg",
    },
    {
      img: "Images/p4_2.jpg",
    },
    {
      img: "Images/p4_3.jpg",
    },
    {
      img: "Images/p4_4.jpg",
    },
    {
      img: "Images/p4_5.jpg",
    },
    {
      img: "Images/p4_6.jpg",
    },
    {
      img: "Images/p4_7.jpg",
    },
    {
      img: "Images/p4_8.jpg",
    },
    {
      img: "Images/p4_9.jpg",
    },
    {
      img: "Images/p4_10.jpg",
    },
    {
      img: "Images/p4_11.jpg",
    },
    {
      img: "Images/p4_12.jpg",
    },
  ];

  return (
    <div className="ProjFour">
      <Gallery galleryImages={galleryImages} />
    </div>
  );
}

export default ProjectFour;
