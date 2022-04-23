import { useRouter } from 'next/router'
import { ButtonType, Button } from '../../Components/Button';

const EmailUs = () => {
  const router = useRouter();
  const handleNext = () => {
    router.push('/success')
  };

  return (
    <div className="w-full px-4 flex flex-col flex-1 ">
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-white text-xl">
          You’ll receive an email from us reply with necessary details on the
          same email
        </h1>
      </div>
      <Button onClick={handleNext} buttonType={ButtonType.PRIMARY}>
        Continue
      </Button>
    </div>
  );
};
export default EmailUs;
