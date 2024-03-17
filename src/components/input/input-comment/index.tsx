import StInputComment from './style';
// handleSubmitModal?: (e: FormEvent<HTMLButtonElement>) => void;
interface InputCommentProps {
  value?: string;
  readonly?: boolean;
}
const InputComment = ({ value, readonly }: InputCommentProps) => {
  return (
    <form>
      <StInputComment>
        <textarea readOnly={readonly} defaultValue={value}></textarea>
        <div className='submit-button-box'>
          <button type='submit'>입력</button>
        </div>
      </StInputComment>
    </form>
  );
};

export default InputComment;
