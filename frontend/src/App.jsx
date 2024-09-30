import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CourseList from './components/CourseList';

const App = () => {
  const learnerSysId = 'current_learner_sys_id'; // Replace with actual learner sys_id

  return (
    <DndProvider backend={HTML5Backend}>
      <CourseList learnerSysId={learnerSysId} />
    </DndProvider>
  );
};

export default App;
