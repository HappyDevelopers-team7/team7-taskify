import StInputComment from './style';
// handleSubmitModal?: (e: FormEvent<HTMLButtonElement>) => void;
const InputComment = () => {
  return (
    <form>
      <StInputComment>
        <textarea></textarea>
        <div className='submit-button-box'>
          <button type='submit'>입력</button>
        </div>
      </StInputComment>
    </form>
  );
};

export default InputComment;
