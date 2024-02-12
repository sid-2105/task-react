
import About from "../../Pages/About";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";



const ScrollToAbout = () => {

    const scrollToAbout = () => {
        window.scrollTo(document.getElementById('About'), {
          duration: 800,
          smooth: 'easeInOutQuart', 
        });
      };


  return (
    <div>
      <About
      onClick={scrollToAbout}
      />
      {/* <ScrollLink
        to="About" 
        smooth={true}
        offset={-50} 
        duration={500} 
      >
      </ScrollLink> */}

    </div>
  
  );
};

export default ScrollToAbout