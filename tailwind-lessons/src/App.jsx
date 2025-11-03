import FirstLesson from "./lessons/FirstLesson";
import FirstLessonPractice from "./lessons/FirstLessonPractice";
import SecondLesson from "./lessons/SecondLesson";
import SecondLessonPractice from "./lessons/SecondLessonPractice";
import ThirdLesson from "./lessons/ThirdLesson";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstLesson />}>
          <Route path="practice" element={<FirstLessonPractice />} />
        </Route>
        <Route path="/second-lesson" element={<SecondLesson />}>
          <Route path="practice" element={<SecondLessonPractice />} />
        </Route>
        <Route path="/third-lesson" element={<ThirdLesson />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;