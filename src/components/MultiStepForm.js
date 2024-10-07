import React, { useState } from 'react';
import Create from './Create'; // Your first component
import BusinessInformation from './BusinessInformation'; // Your second component

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  // Proceed to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Render the correct form step based on the state
  const renderFormStep = () => {
    switch (step) {
      case 1:
        return <Create nextStep={nextStep} />;
      case 2:
        return <BusinessInformation nextStep={nextStep} prevStep={prevStep} />;
      default:
        return <Create nextStep={nextStep} />;
    }
  };

  return (
    <div>
      {renderFormStep()}
    </div>
  );
};

export default MultiStepForm;
