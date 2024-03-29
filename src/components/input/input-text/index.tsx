import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import StInputContainer from './style';

interface InputTextProps {
  value?: string; // value prop 추가
  required?: boolean;
  labelName: string;
  placeholder: string;
  autoFocus?: boolean;
  readonly?: boolean;
  cursor?: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const InputText = ({
  value,
  setValue,
  autoFocus = false,
  readonly = false,
  required = false,
  labelName,
  placeholder,
}: InputTextProps) => {
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
          <input
            value={value}
            autoFocus={autoFocus}
            readOnly={readonly}
            type='text'
            placeholder={placeholder}
            onChange={handleChangeValue}
          />
        </div>
      </StInputContainer>
    </>
  );
};

export default InputText;
