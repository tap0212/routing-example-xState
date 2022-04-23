import { useState } from 'react';
import { xStateSendNames } from '../../utils/constants';
import { ButtonType, Button } from '../../Components/Button';
import Header from '../../Components/Header';
import { useMachineSubscriber } from '../../System/handlers/useMachineSubscriber';

const OnboardingQuestion1 = () => {
  const {send} = useMachineSubscriber();
  const [shouldGoTo1a, setShouldGoTo1a] = useState(false);

  const handleYes = () => {
    send({type: xStateSendNames.NEXT, shouldGoTo1a: shouldGoTo1a})
  };
  const handleChange = () => {
    setShouldGoTo1a(!shouldGoTo1a);
  };
  const onBack = () => {
    send(xStateSendNames.PREV)
  }
  return (
   <>
    <Header onBack={onBack} />
    <div className="w-full px-4 flex flex-col flex-1 ">
    <div className="flex flex-col items-center justify-center flex-1">
      <h1 className="text-white text-3xl">Onboarding Question 1</h1>
      <div className="flex items-center justify-center my-4">
        <input
          className="mr-4 w-4 h-4 "
          type="checkbox"
          onChange={handleChange}
          checked={shouldGoTo1a}
        />
        <p className="text-white">Should go to Onboarding question 1a?</p>
      </div>
    </div>

    <Button onClick={handleYes} buttonType={ButtonType.PRIMARY}>
      Continue
    </Button>
  </div>
   </>
  );
};
export default OnboardingQuestion1;
