import { useContext } from 'react';
import { QPayContext } from '../components';

const useQPay = () => {
  const { doTransaction } = useContext(QPayContext);

  return {
    doTransaction,
  };
};

export default useQPay;
