import { ButtonType, Button } from '../Components/Button';
import {useMachineSubscriber} from '../System/handlers/useMachineSubscriber'
import { xStateSendNames } from '../utils/constants';

const Home = () => {
  const {send} = useMachineSubscriber();
  
  const handleNext = () => {
    send(xStateSendNames.NEXT)
  };
  return (
    <div className="w-full px-4 flex flex-col flex-1 ">
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-white text-3xl">Welcome!</h1>
      </div>
      <Button onClick={handleNext} buttonType={ButtonType.PRIMARY}>
        Next
      </Button>
    </div>
  );
};
export default Home;
