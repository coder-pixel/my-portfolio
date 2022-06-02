import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';

function App() {
  const location = useLocation()
  const path = location.pathname

  const changeCssVar = () => {
    // Get the root element
    var root = document.querySelector(":root");
    // console.log(root)

    // Get the styles (properties and values) for the root
    var cssVar = getComputedStyle(root)
    // console.log(cssVar)

    var powerIconPath = document.querySelector(".powerIcon svg path")
    var githubIconPath = document.querySelector(".github svg path")
    var linkedinIconPath = document.querySelector(".linkedin svg path")

    if (path == "/about" || path == "/projects") {
      // Set the value of variable --blue to another value (in this case "lightblue")
      root.style.setProperty('--main-text-color', '#fcf6f4');
      root.style.setProperty('--main-background-color', '#000');

      powerIconPath.setAttribute("fill", "#32cd32");
      // console.log(powerIconPath)
      githubIconPath.setAttribute("fill", "#fcf6f4");
      linkedinIconPath.setAttribute("fill", "#fcf6f4");
    }
    else {
      root.style.setProperty('--main-text-color', '#000');
      root.style.setProperty('--main-background-color', '#fcf6f4');

      powerIconPath.setAttribute("fill", "#000");
      githubIconPath.setAttribute("fill", "#000");
      linkedinIconPath.setAttribute("fill", "#000");
    }
  }

  useEffect(() => {
    changeCssVar()
  }, [path])
  return (
    <div className="portfolio_container">
      <Header />
      <div className="allPageLinks socialLinks">
        <div className="linksDiv">
          <a href='' className='github'>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 44 40"><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="#000" transform="translate(-702.000000, -265.000000)"><path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" /></g></g></svg>
          </a>
          <a href='' className='linkedin'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47"><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="#000" transform="translate(-700.000000, -560.000000)"><path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" /></g></g></svg>
          </a>
        </div>
      </div>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/myskills' element={<MySkills />} /> */}
      </Routes>
    </div>
  );
}

export default App;
