import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import StInputContainer from './style';

interface InputTextProps {
  required?: boolean;
  labelName: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const InputText = ({ setValue, required = false, labelName, placeholder }: InputTextProps) => {
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <StInputContainer>
        <div className='label-box'>
          <label>{labelName}</label>
          {required ? <span>*</span> : null}
        </div>
        <div className='input-box'>
          <input type='text' placeholder={placeholder} onChange={handleChangeValue} />
        </div>
      </StInputContainer>
    </>
  );
};

export default InputText;
