import { AxiosError } from 'axios';
import { useCallback, useState } from 'react';

interface AsyncHookResult<T> {
  loading: boolean;
  error: AxiosError | unknown | null;
  result: T | undefined;
  setAsyncFunction: (...args: unknown[]) => Promise<void>;
}

/**
 * 로딩과 에러 메시지를 적을 상태 저장
 * getAsyncFunction에 원하는 api 호출 함수가 들어가야한다. 사용 예제는 sign-in 페이지 참고
 * @param getAsyncFunction 비동기 함수를 넣는다.
 * @returns loading, error, result, setAsyncFunction
 */
export const useAsync = <T>(getAsyncFunction: (...args: unknown[]) => Promise<T>): AsyncHookResult<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | unknown | null>(null);
  const [result, setResult] = useState<T | undefined>();

  const setAsyncFunction = useCallback(async (...args: unknown[]) => {
    try {
      setError(null);
      setLoading(true);

      const res = await getAsyncFunction(...args);
      setResult(res);
    } catch (error) {
      setError(error);

      return;
    } finally {
      setLoading(false);
    }
    // 아래 코드는 dependency array 오류 끄는 용도니 지우면 안됨.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error, result, setAsyncFunction };
};
