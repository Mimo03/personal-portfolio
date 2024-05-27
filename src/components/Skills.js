import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>How it Works?</h2>
                        <p>Steps to Identify and Improve Dyslexia-Related Handwriting</p>
                        <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider">
                            <div className="item" style={{marginTop: '40px'}}>
                                {/* <img src={meter1} alt="Image" /> */}
                                <h1 className="steps-style">Step 1</h1>
                                <p>Start with an assessment to determine if you have dyslexia.</p>
                            </div>
                            <div className="item" style={{marginTop: '40px'}}>
                            <h1 className="steps-style">Step 2</h1>
                                <p>Upload a handwritten text photo for dyslexia pattern analysis.</p>
                            </div>
                            <div className="item" style={{marginTop: '40px'}}>
                            <h1 className="steps-style">Step 3</h1>
                                <p>Review corrections and practice tracing to improve handwriting.</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
