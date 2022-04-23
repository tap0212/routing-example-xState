import { useRouter } from 'next/router'
import { ButtonType, Button } from '../../Components/Button';

const OnboardingQuestion3 = () => {
  const router = useRouter();
  const handleConnectStatements = () => {
    router.push('/signup')
  };
  const handleEmailUs = () => {
    router.push('/emailUs')
  };
  return (
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
  );
};
export default OnboardingQuestion3;
