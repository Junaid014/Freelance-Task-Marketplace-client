import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const slides = [
    {
      image: "https://i.ibb.co/SDHVxXRs/handsome-young-man-with-laptop-check-his-timetable-white.jpg",
      title: "Explore Creativity",
      subtitle: "Unleash your imagination with brilliant talent."
    },
    {
      image: "https://i.ibb.co/tDtv5Dw/Hrustall-K3-Qvd-Ukc-Qp4-unsplash.jpg",
      title: "Hire with Confidence",
      subtitle: "Top freelancers at your fingertips."
    },
    {
      image: "https://i.ibb.co/S6F3X8k/View-fantasy-tap-with-running-water-surreal-landscape-world-water-day-awareness.jpg",
      title: "Bring Ideas to Life",
      subtitle: "Turn your vision into reality with skilled professionals."
    }
  ];

  return (
    <div className="w-full">
      <Slide
        duration={4000}
        transitionDuration={700}
        infinite={true}
        indicators={true}
        arrows={true}
        // autoplay={true}
      >
        {slides.map((slide, index) => (
          <div key={index} className="each-slide-effect">
            <div
              className="w-full h-[800px] bg-no-repeat bg-cover bg-center flex items-center justify-start px-16"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className=" text-black p-8 rounded-lg max-w-lg">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
