import React, { useCallback, useMemo, useState } from 'react';
import { Modal } from 'react-native';
import WebView from 'react-native-webview';
import { STATUS } from '../constants/status';
import QPayContext from './QPayContext';

const QPayProvider = ({ children }) => {
  const [uri, setUri] = useState('https://pg.qpayindia.com/wwws/Payment/PaymentDetails_secure.aspx');
  const [body, setBody] = useState(null);
  const [returnUri, setReturnUri] = useState(null);
  const [status, setStatus] = useState(null);

  const doTransaction = useCallback((request, uri) => {
    const params = new URLSearchParams();
    Object.keys(request).forEach((key) => {
      params.append(key, request[key]);
    });
    setStatus(STATUS.PROCESSING);
    setReturnUri(uri);
    setBody(params.toString());
  }, []);

  return (
    <QPayContext.Provider value={{ doTransaction, setUri, status }}>
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
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }}
            onNavigationStateChange={(navState) => {
              if (navState.url === returnUri) {
                setStatus(STATUS.DONE);
                setBody(null);
              }
            }}
            onError={() => {
              setStatus(STATUS.ERROR);
              setBody(null);
            }}
          />
        </Modal>
      }
    </QPayContext.Provider>
  );
};

export default QPayProvider;
