import { useRouter } from 'next/router'
import { ButtonType, Button } from '../Components/Button';

const Home = () => {
  const router = useRouter();

  const handleNext = () => {
    router.push('/onboardingQuestion1')
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
