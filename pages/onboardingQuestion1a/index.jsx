import { ButtonType, Button } from '../../Components/Button';
import Header from '../../Components/Header';
import { useMachineSubscriber } from '../../System/handlers/useMachineSubscriber';
import { xStateSendNames } from '../../utils/constants';

const OnboardingQuestion1a = () => {
  const {send} = useMachineSubscriber();
  const handleNext = () => {
    send(xStateSendNames.NEXT)
  };
  const onBack = () => {
    send(xStateSendNames.PREV)
  }
  return (
    <>
      <Header onBack={onBack} />
      <div className="w-full px-4 flex flex-col flex-1 ">
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-white text-3xl">Onboarding Question 1a</h1>
      </div>

      <Button onClick={handleNext} buttonType={ButtonType.PRIMARY}>
        Continue
      </Button>
    </div>
    </>
  );
};
export default OnboardingQuestion1a;
