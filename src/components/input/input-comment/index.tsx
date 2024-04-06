import { Dispatch, FormEvent, MutableRefObject, SetStateAction } from 'react';
import StInputComment from './style';

interface InputCommentProps {
  defaultValue?: string;
  inputRef: MutableRefObject<string | null>;
  handleSubmit: (e: FormEvent<HTMLButtonElement>) => void;
  setValue?: Dispatch<SetStateAction<string>>;
}
const InputComment = ({ defaultValue, inputRef, handleSubmit }: InputCommentProps) => {
  const handleChangeTextarea = (e: FormEvent<HTMLTextAreaElement>) => {
    inputRef.current = e.currentTarget.value;
  };
  return (
    <StInputComment>
      {defaultValue ? (
        <textarea defaultValue={defaultValue} onChange={handleChangeTextarea}></textarea>
      ) : (
        <textarea onChange={handleChangeTextarea}></textarea>
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
