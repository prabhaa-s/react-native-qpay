import React, { useCallback, useMemo, useState } from 'react';
import { Modal } from 'react-native';
import WebView from 'react-native-webview';
import QPayContext from './QPayContext';

const QPayProvider = ({ children }) => {
  const [uri, setUri] = useState('https://pg.qpayindia.com/WWWS/Payment/PaymentDetails.aspx');
  const [body, setBody] = useState(null);

  const doTransaction = useCallback((request) => {
    const params = new URLSearchParams();
    Object.keys(request).forEach((key) => {
      params.append(key, request[key]);
    });
    setBody(params.toString());
  }, []);

  return (
    <QPayContext.Provider value={{ doTransaction, setUri }}>
      {children}
      {
        Boolean(body) &&
        <Modal
          animationType="slide"
          transparent
          visible={Boolean(body)}
        >
          <WebView
            source={{
              uri,
              method: 'POST',
              body,
            }}
          />
        </Modal>
      }
    </QPayContext.Provider>
  );
};

export default QPayProvider;
