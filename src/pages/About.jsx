import React, { useState } from 'react';

function About() {
  const [steps, setSteps] = useState([
    {id: 1, text: 'Step 1'},
    {id: 2, text: 'Step 2'},
    {id: 3, text: 'Step 3'},
    {id: 4, text: 'Step 4'},
  ]);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [newStepText, setNewStepText] = useState('');
  const [newStepId, setNewStepId] = useState(5);

  const handleMouseDown = (index) => {
    setDraggingIndex(index);
  }

  const handleMouseMove = (e, index) => {
    if (draggingIndex === null) {
      return;
    }
    // Aqui se podria implementar la lógica para cambiar la posición del elemento en la interfaz de usuario mientras se arrastra
  }

  const handleMouseUp = (index) => {
    if (draggingIndex === null) {
      return;
    }
    const newSteps = [...steps];
    const step = newSteps.splice(draggingIndex, 1)[0];
    newSteps.splice(index, 0, step);
    setSteps(newSteps);
    setDraggingIndex(null);
  }

  const handleAddStep = () => {
    if (!newStepText) {
      return;
    }
    setSteps([...steps, {id: newStepId, text: newStepText}]);
    setNewStepText('');
    setNewStepId(newStepId + 1);
  }

  const handleRemoveStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  }

  return (
    <div>
      <div>
        <input type="text" value={newStepText} onChange={(e) => setNewStepText(e.target.value)} placeholder="New step text" />
        <button onClick={handleAddStep}>Add Step</button>
      </div>
      {steps.map((step, index) => (
        <div
          key={step.id}
          onMouseDown={() => handleMouseDown(index)}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseUp={() => handleMouseUp(index)}
        >
          {step.text}
          <button onClick={() => handleRemoveStep(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
export default About;