import { useMachineSubscriber } from '../../System/handlers/useMachineSubscriber';
import { xStateSendNames } from '../../utils/constants';
import { ButtonType, Button } from '../../Components/Button';
import Header from '../../Components/Header';

const OnboardingQuestion3 = () => {
  const {send} = useMachineSubscriber();
  const handleConnectStatements = () => {
    send(xStateSendNames.SIGNUP)
  };
  const handleEmailUs = () => {
    send(xStateSendNames.EMAIL_US)
  };
  const onBack = () => {
    send(xStateSendNames.PREV)
  }
  return (
    <>
      <Header onBack={onBack} />
      <div className="w-full px-4 flex flex-col flex-1 ">
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-white text-3xl">What you want to do next?</h1>
      </div>
      <Button onClick={handleConnectStatements} buttonType={ButtonType.PRIMARY}>
        Connect statements
      </Button>
      <Button onClick={handleEmailUs} buttonType={ButtonType.SECONDARY}>
        Share statements over email
      </Button>
    </div>
    </>
  );
};
export default OnboardingQuestion3;
