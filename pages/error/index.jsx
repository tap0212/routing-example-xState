import { useRouter } from 'next/router'
import { ButtonType, Button } from '../../Components/Button';

const Error = () => {
  const router = useRouter();
  const handleRetry = () => {
   router.back()
  };
  return (
    <div className="w-full px-4 flex flex-col flex-1 ">
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-danger text-3xl">Error</h1>
      </div>

      <Button onClick={handleRetry} buttonType={ButtonType.DANGER}>
        Retry
      </Button>
    </div>
  );
};
export default Error;
