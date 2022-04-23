import { useRouter } from 'next/router'
import { ButtonType, Button } from '../../Components/Button';

const Signup = () => {
  const router = useRouter();
  const handleNext = () => {
    router.push('/connectBank')
  };
  const handleMockError = () => {
    router.push('/error')
  };
  return (
    <div className="w-full px-4 flex flex-col flex-1 ">
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-white text-3xl">Signup</h1>
      </div>
      <Button onClick={handleNext} buttonType={ButtonType.PRIMARY}>
        Continue
      </Button>
      <Button onClick={handleMockError} buttonType={ButtonType.DANGER}>
        Mock Error
      </Button>
    </div>
  );
};
export default Signup;
