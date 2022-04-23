import { useRouter } from 'next/router'
import { ButtonType, Button } from '../../Components/Button';
import Header from '../../Components/Header';

const ConnectBank = () => {
  const router = useRouter();
  const handleNext = () => {
    router.push('/success')
  };
  const handleMockError = () => {
    router.push('/error')
  };
  const onBack = () => {
    router.back()
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
        <Button onClick={handleMockError} buttonType={ButtonType.DANGER}>
          Mock Error
        </Button>
      </div>
    </>
  );
};
export default ConnectBank;
