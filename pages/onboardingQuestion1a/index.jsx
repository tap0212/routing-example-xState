import { useRouter } from 'next/router'
import { ButtonType, Button } from '../../Components/Button';

const OnboardingQuestion1a = () => {
  const router = useRouter();
  const handleNext = () => {
    router.push('/onboardingQuestion2')
  };

  return (
    <div className="w-full px-4 flex flex-col flex-1 ">
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-white text-3xl">Onboarding Question 1a</h1>
      </div>

      <Button onClick={handleNext} buttonType={ButtonType.PRIMARY}>
        Continue
      </Button>
    </div>
  );
};
export default OnboardingQuestion1a;
