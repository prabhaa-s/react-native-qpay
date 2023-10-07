import { useContext, useEffect } from 'react';
import QPayContext from '../components/QPayContext';

const useQPay = (props) => {
  const { uri } = props || {};
  const { doTransaction, setUri, status } = useContext(QPayContext);

  useEffect(() => {
    if (uri) {
      setUri(uri);
    }
  }, [uri]);

  return {
    doTransaction,
    status,
  };
};

export default useQPay;
