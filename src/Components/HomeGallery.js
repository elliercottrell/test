import { Link } from "react-router-dom";
import "./Gallery.css";

function HomeGallery() {
  const homeGalleryImages = [
    {
      img: "Images/morocco/p6_1.png",
      link: "pjo",
    },
    {
      img: "Images/p6_2.png",
      link: "pjo",
    },
    {
      img: "Images/p6_3.png",
      link: "pjo",
    },
    {
      img: "Images/p6_4.png",
      link: "pjo",
    },
    {
      img: "Images/p6_5.png",
      link: "pjo",
    },
    {
      img: "Images/p6_6.png",
      link: "pjo",
    },
    {
      img: "Images/p6_7.png",
      link: "pjt",
    },

    {
      img: "Images/p6_8.png",
      link: "pjt",
    },
    {
      img: "Images/p6_9.png",
      link: "pjt",
    },
    {
      img: "Images/p6_10.png",
      link: "pjt",
    },
    {
      img: "Images/p6_11.png",
      link: "pjt",
    },
    {
      img: "Images/p6_12.png",
      link: "pjt",
    },
    {
      img: "Images/p6_13.png",
      link: "pjth",
    },
    {
      img: "Images/p6_14.png",
      link: "pjth",
    },
    {
      img: "Images/p6_15.png",
      link: "pjth",
    },
    {
      img: "Images/p6_16.png",
      link: "pjth",
    },
    {
      img: "Images/p6_17.png",
      link: "pjth",
    },
    {
      img: "Images/p6_18.png",
      link: "pjth",
    },
    {
      img: "Images/p6_19.png",
      link: "pjth",
    },
    {
      img: "Images/p6_20.png",
      link: "pjth",
    },
    {
      img: "Images/p6_21.png",
      link: "pjf",
    },
    {
      img: "Images/p6_22.png",
      link: "pjf",
    },
    {
      img: "Images/p6_23.png",
      link: "pjf",
    },
    {
      img: "Images/p6_24.png",
      link: "pjf",
    },
    {
      img: "Images/p6_25.png",
      link: "pjf",
    },
    {
      img: "Images/p6_26.png",
      link: "pjf",
    },
    {
      img: "Images/p6_27.png",
      link: "pjf",
    },
    {
      img: "Images/p6_28.png",
      link: "pjf",
    },
    {
      img: "Images/p1_1.png",
      link: "pjf",
    },
    {
      img: "Images/p1_2.png",
      link: "pjf",
    },
    {
      img: "Images/p1_3.png",
      link: "pjf",
    },
    {
      img: "Images/p1_4.png",
      link: "pjf",
    },
    {
      img: "Images/p1_5.png",
      link: "pjfi",
    },
    {
      img: "Images/p1_6.png",
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
