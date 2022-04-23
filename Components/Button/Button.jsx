
export const ButtonType = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  DANGER: 'DANGER',
};
const Button = ({ children, buttonType, ...rest }) => {
  const getButtonStyles = () => {
    switch (buttonType) {
      case ButtonType.PRIMARY:
        return 'bg-primary border-primary text-black';
      case ButtonType.SECONDARY:
        return 'border-primary text-white';
      case ButtonType.DANGER:
        return 'border-danger bg-danger text-black';
      default:
        return 'bg-primary border-primary text-black';
    }
  };

  return (
    <button
      {...rest}
      className={`${getButtonStyles()} px-4 py-2 border-[1px] my-2 rounded-md w-full`}>
      {children}
    </button>
  );
};

export default Button;
