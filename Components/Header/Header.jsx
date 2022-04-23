
import  Back  from '../../assets/back.svg';

const Header = ({ onBack }) => (
  <div className="w-full h-10">
    {onBack ? (
      <div onClick={onBack}>
        <Back className="cursor-pointer" />
      </div>
    ) : null}
  </div>
);

export default Header;
