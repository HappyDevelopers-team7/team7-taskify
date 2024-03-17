import { Dispatch, FormEvent, SetStateAction } from 'react';
import StInputComment from './style';

interface InputCommentProps {
  value?: string;
  readonly?: boolean;
  handleSubmit: (e: FormEvent<HTMLButtonElement>) => void;
  setValue?: Dispatch<SetStateAction<string>>;
}
const InputComment = ({ value, readonly = false, handleSubmit, setValue }: InputCommentProps) => {
  const handleChangeTextarea = (e: FormEvent<HTMLTextAreaElement>) => {
    setValue?.(e.currentTarget.value);
  };
  return (
    <StInputComment>
      <textarea readOnly={readonly} defaultValue={value} onChange={handleChangeTextarea}></textarea>
      <div className='submit-button-box'>
        <button type='submit' onClick={handleSubmit}>
          입력
        </button>
      </div>
    </StInputComment>
  );
};

export default InputComment;
