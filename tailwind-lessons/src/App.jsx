import FirstLesson from "./lessons/FirstLesson";
import SecondLesson from "./lessons/SecondLesson";
import SecondLessonPractice from "./lessons/SecondLessonPractice";
import ThirdLesson from "./lessons/ThirdLesson";
import FourthLesson from "./lessons/FourthLesson";
import FifthLesson from "./lessons/FifthLesson";
import SixthLesson from "./lessons/SixthLesson";
import SeventhLesson from "./lessons/SeventhLesson";
import EighthLesson from "./lessons/EighthLesson";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstLesson />} />
        <Route path="/second-lesson" element={<SecondLesson />}>
          <Route path="practice" element={<SecondLessonPractice />} />
        </Route>
        <Route path="/third-lesson" element={<ThirdLesson />} />
        <Route path="/fourth-lesson" element={<FourthLesson />} />
        <Route path="/fifth-lesson" element={<FifthLesson />} />
        <Route path="/sixth-lesson" element={<SixthLesson />} />
        <Route path="/seventh-lesson" element={<SeventhLesson />} />
        <Route path="/eighth-lesson" element={<EighthLesson />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;