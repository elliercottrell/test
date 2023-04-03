import { Link } from "react-router-dom";
import "./Gallery.css";

function HomeGallery() {
  const homeGalleryImages = [
    {
      img: "Images/p1_1.jpg",
      link: "pjo",
    },
    {
      img: "Images/p1_2.jpg",
      link: "pjo",
    },
    {
      img: "Images/p1_3.jpg",
      link: "pjo",
    },
    {
      img: "Images/p1_4.jpg",
      link: "pjo",
    },
    {
      img: "Images/p1_5.jpg",
      link: "pjo",
    },
    {
      img: "Images/p1_6.jpg",
      link: "pjo",
    },
    {
      img: "Images/p2_1.jpg",
      link: "pjt",
    },

    {
      img: "Images/p2_2.jpg",
      link: "pjt",
    },
    {
      img: "Images/p2_3.jpg",
      link: "pjt",
    },
    {
      img: "Images/p2_4.jpg",
      link: "pjt",
    },
    {
      img: "Images/p2_5.jpg",
      link: "pjt",
    },
    {
      img: "Images/p2_6.jpg",
      link: "pjt",
    },
    {
      img: "Images/p3_1.jpg",
      link: "pjth",
    },
    {
      img: "Images/p3_2.jpg",
      link: "pjth",
    },
    {
      img: "Images/p3_3.jpg",
      link: "pjth",
    },
    {
      img: "Images/p3_4.jpg",
      link: "pjth",
    },
    {
      img: "Images/p3_5.jpg",
      link: "pjth",
    },
    {
      img: "Images/p3_6.jpg",
      link: "pjth",
    },
    {
      img: "Images/p3_7.jpg",
      link: "pjth",
    },
    {
      img: "Images/p3_8.jpg",
      link: "pjth",
    },
    {
      img: "Images/p4_1.jpg",
      link: "pjf",
    },
    {
      img: "Images/p4_2.jpg",
      link: "pjf",
    },
    {
      img: "Images/p4_3.jpg",
      link: "pjf",
    },
    {
      img: "Images/p4_4.jpg",
      link: "pjf",
    },
    {
      img: "Images/p4_5.jpg",
      link: "pjf",
    },
    {
      img: "Images/p4_6.jpg",
      link: "pjf",
    },
    {
      img: "Images/p4_7.jpg",
      link: "pjf",
    },
    {
      img: "Images/p4_8.jpg",
      link: "pjf",
    },
    {
      img: "Images/p4_9.jpg",
      link: "pjf",
    },
    {
      img: "Images/p4_10.jpg",
      link: "pjf",
    },
    {
      img: "Images/p4_11.jpg",
      link: "pjf",
    },
    {
      img: "Images/p4_12.jpg",
      link: "pjf",
    },
    {
      img: "Images/p5_1.jpg",
      link: "pjfi",
    },
    {
      img: "Images/p5_2.jpg",
      link: "pjfi",
    },
    {
      img: "Images/p5_3.jpg",
      link: "pjfi",
    },
    {
      img: "Images/p5_4.jpg",
      link: "pjfi",
    },
    {
      img: "Images/p5_5.jpg",
      link: "pjfi",
    },
    {
      img: "Images/p5_6.jpg",
      link: "pjfi",
    },
    {
      img: "Images/p5_7.jpg",
      link: "pjfi",
    },
    {
      img: "Images/p5_8.jpg",
      link: "pjfi",
    },
  ];

  return (
    <div className="App">
      <div className="imageWrap">
        {homeGalleryImages &&
          homeGalleryImages.map((image, index) => {
            return (
              <div className="single" key={index}>
                <Link to={image.link}>
                  <img src={image.img} alt="" />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HomeGallery;
