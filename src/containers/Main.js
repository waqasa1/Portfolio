// src/containers/Main.js

import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import Contact from "./contact/Contact";
import { splashScreen } from "../portfolio";
import StyleContext from "../contexts/StyleContext";
import "./Main.scss";

const Main = () => {
  const { isDark } = useContext(StyleContext);
  const location = useLocation();

  // Check if coming from internal navigation (skip splash)
  const skipSplash = location.state?.scrollTo || sessionStorage.getItem("splashShown") === "true";
  
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(
    splashScreen.enabled && !skipSplash
  );

  useEffect(() => {
    if (splashScreen.enabled && !skipSplash) {
      const splashTimer = setTimeout(() => {
        setIsShowingSplashAnimation(false);
        sessionStorage.setItem("splashShown", "true"); // Mark splash as shown
      }, splashScreen.duration);

      return () => clearTimeout(splashTimer);
    } else {
      setIsShowingSplashAnimation(false);
    }
  }, [skipSplash]);

  // Handle scroll to section after navigation from ProjectDetail
  useEffect(() => {
    if (location.state?.scrollTo && !isShowingSplashAnimation) {
      // Wait for components to render
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.state, isShowingSplashAnimation]);

  return (
    <div className={isDark ? "dark-mode" : null}>
      {isShowingSplashAnimation && splashScreen.enabled ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <Projects />
          <StartupProject />
          <Achievement />
          <Blogs />
          <Talks />
          <Twitter />
          <Podcast />
          <Profile />
          <Contact />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
};

export default Main;