import Gallery from "./Gallery";
import "./ProjectFour.css";

function ProjectFive() {
  const galleryImages = [
    {
      img: "Images/p5_1.jpg",
    },
    {
      img: "Images/p5_2.jpg",
    },
    {
      img: "Images/p5_3.jpg",
    },
    {
      img: "Images/p5_4.jpg",
    },
    {
      img: "Images/p5_5.jpg",
    },
    {
      img: "Images/p5_6.jpg",
    },
    {
      img: "Images/p5_7.jpg",
    },
    {
      img: "Images/p5_8.jpg",
    },
  ];

  return (
    <div className="ProjFour">
      <Gallery galleryImages={galleryImages} />
    </div>
  );
}

export default ProjectFive;
