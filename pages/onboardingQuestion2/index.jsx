import { useRouter } from 'next/router'
import { ButtonType, Button } from '../../Components/Button';

const OnboardingQuestion2 = () => {
  const router = useRouter();
  const handleNext = () => {
    router.push('/onboardingQuestion3')
  };

  return (
    <div className="w-full px-4 flex flex-col flex-1 ">
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-white text-3xl">Onboarding Question 2</h1>
      </div>

      <Button onClick={handleNext} buttonType={ButtonType.PRIMARY}>
        Continue
      </Button>
    </div>
  );
};
export default OnboardingQuestion2;
