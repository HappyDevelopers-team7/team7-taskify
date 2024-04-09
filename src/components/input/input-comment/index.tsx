import { FormEvent, LegacyRef } from 'react';
import StInputComment from './style';

interface InputCommentProps {
  defaultValue?: string;
  handleSubmit: (e: FormEvent<HTMLButtonElement>) => void;
  inputRef: LegacyRef<HTMLTextAreaElement>;
}

const InputComment = ({ defaultValue, inputRef, handleSubmit }: InputCommentProps) => {
  return (
    <StInputComment>
      {defaultValue ? (
        <textarea defaultValue={defaultValue} ref={inputRef}></textarea>
      ) : (
        <textarea ref={inputRef}></textarea>
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
