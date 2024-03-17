import { Dispatch, FormEvent, SetStateAction } from 'react';
import StInputComment from './style';

interface InputCommentProps {
  defaultValue?: string;
  value?: string;
  handleSubmit: (e: FormEvent<HTMLButtonElement>) => void;
  setValue?: Dispatch<SetStateAction<string>>;
}
const InputComment = ({ defaultValue, value, handleSubmit, setValue }: InputCommentProps) => {
  const handleChangeTextarea = (e: FormEvent<HTMLTextAreaElement>) => {
    setValue?.(e.currentTarget.value);
  };
  return (
    <StInputComment>
      {defaultValue ? (
        <textarea defaultValue={defaultValue} onChange={handleChangeTextarea}></textarea>
      ) : (
        <textarea value={value} onChange={handleChangeTextarea}></textarea>
      )}
      <div className='submit-button-box'>
        <button type='submit' onClick={handleSubmit}>
          입력
        </button>
      </div>
    </StInputComment>
  );
};

export default InputComment;
