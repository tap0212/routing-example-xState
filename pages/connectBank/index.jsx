import { useMachineSubscriber } from '../../System/handlers/useMachineSubscriber';
import { xStateSendNames } from '../../utils/constants';
import { ButtonType, Button } from '../../Components/Button';
import Header from '../../Components/Header';

const ConnectBank = () => {
  const {send} = useMachineSubscriber();
  const handleNext = () => {
    // TODO add logic here
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
          <h1 className="text-white text-3xl">Connect Bank</h1>
        </div>
        <Button onClick={handleNext} buttonType={ButtonType.PRIMARY}>
          Continue
        </Button>
      </div>
    </>
  );
};
export default ConnectBank;
