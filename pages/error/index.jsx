import { useRouter } from 'next/router'
import { ButtonType, Button } from '../../Components/Button';
import Header from '../../Components/Header';

const Error = () => {
  const router = useRouter();
  const handleRetry = () => {
    router.back()
  };
  const onBack = () => {
    router.back()
  }
  return (
    <>
      <Header onBack={onBack} />
      <div className="w-full px-4 flex flex-col flex-1 ">
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-danger text-3xl">Error</h1>
      </div>
      <Button onClick={handleRetry} buttonType={ButtonType.DANGER}>
        Retry
      </Button>
    </div>
    </>
  );
};
export default Error;
