import Navbar from "./components/Navbar.jsx";
import PromoBar from "./components/PromoBar.jsx";
import CourseHero from "./components/CourseHero.jsx";
import AboutCourse from "./components/AboutCourse.jsx";
import ProgramHighlights from "./components/ProgramHighlights.jsx";
import ToolsCovered from "./components/ToolsCovered.jsx";
import Trainers from "./components/Trainers.jsx";
import Syllabus from "./components/Syllabus.jsx";
import CourseBanner from "./components/CourseBanner.jsx";
import Projects from "./components/Projects.jsx";
import Certification from "./components/Certification.jsx";
import OfflineCombos from "./components/OfflineCombos.jsx";
import FullStackAI from "./components/FullStackAI.jsx";
import Comparison from "./components/Comparison.jsx";
import CohubPlatform from "./components/CohubPlatform.jsx";
import SuccessStories from "./components/SuccessStories.jsx";
import Careers from "./components/Careers.jsx";
import FAQ from "./components/FAQ.jsx";
import DemoForm from "./components/DemoForm.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import StickyCTA from "./components/StickyCTA.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <PromoBar />
      <main>
        <CourseHero />
        <AboutCourse />
        <ProgramHighlights />
        <ToolsCovered />
        <Trainers />
        <Syllabus />
        <CourseBanner />
        <Projects />
        <Certification />
        <OfflineCombos />
        <Comparison />
        <CohubPlatform />
        <SuccessStories />
        <Careers />
        <FAQ />
        <DemoForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </>
  );
}
