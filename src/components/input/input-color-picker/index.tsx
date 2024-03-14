import StInputContainer from './style';

interface InputColorPickerProps {
  required?: boolean;
  labelName: string;
  placeholder: string;
  autoFocus?: boolean;
  readonly?: boolean;
  imgUrl?: string;
  imgAlt?: string;
  cursor?: string;
  value: string;
}

const InputColorPicker = ({
  value,
  autoFocus = false,
  readonly = false,
  required = false,
  imgUrl,
  imgAlt,
  labelName,
  placeholder,
  cursor,
}: InputColorPickerProps) => {
  return (
    <>
      <StInputContainer $cursor={cursor}>
        <div className='label-box'>
          <label>{labelName}</label>
          {required ? <span>*</span> : null}
        </div>
        <div className='input-box'>
          {imgUrl ? <img src={imgUrl} alt={imgAlt} /> : null}
          <input autoFocus={autoFocus} readOnly={readonly} type='text' placeholder={placeholder} value={value} />
        </div>
      </StInputContainer>
    </>
  );
};

export default InputColorPicker;
