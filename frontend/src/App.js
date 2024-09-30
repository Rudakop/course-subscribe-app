
import React from 'react';
import CourseList from './components/CourseList';
import MyCourses from './components/MyCourses';

function App() {
  // learner's sys_id
  const learnerSysId = 'your_learner_sys_id';

  return (
    <div className="App">
      <h1>Course Subscription Application</h1>
      <CourseList learnerSysId={learnerSysId} />
      <MyCourses learnerSysId={learnerSysId} />
    </div>
  );
}

export default App;
