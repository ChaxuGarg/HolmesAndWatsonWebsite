import "./App.css";
import Header from "./components/header.js";
import About from "./components/about.js";
import Team from "./components/team.js";
import Enola from "./components/enola.js";
import OurStory from "./components/ourStory.js";
import ContactUs from "./components/contactUs.js";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const enolaRef = useRef(null);
  const storyRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  const aboutScroll = () => aboutRef.current.scrollIntoView();
  const enolaScroll = () => enolaRef.current.scrollIntoView();
  const storyScroll = () => storyRef.current.scrollIntoView();
  const teamScroll = () => teamRef.current.scrollIntoView();
  const contactScroll = () => contactRef.current.scrollIntoView();

  return (
    <div className="App">
      <Header
        about={aboutScroll}
        enola={enolaScroll}
        story={storyScroll}
        team={teamScroll}
        contact={contactScroll}
      />
      <About refProp={aboutRef} />
      <Enola refProp={enolaRef} />
      <OurStory refProp={storyRef} />
      <Team refProp={teamRef} />
      <ContactUs refProp={contactRef} about={aboutScroll} enola={enolaScroll} story={storyScroll}/>
    </div>
  );
}

export default App;
