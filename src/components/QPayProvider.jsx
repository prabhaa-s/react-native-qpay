import React, { useCallback, useMemo, useState } from 'react';
import { Modal } from 'react-native';
import WebView from 'react-native-webview';
import QPayContext from './QPayContext';

const QPayProvider = ({ children }) => {
  const [uri, setUri] = useState('https://pg.qpayindia.com/wwws/Payment/PaymentDetails_secure.aspx');
  const [body, setBody] = useState(null);
  const [returnUri, setReturnUri] = useState(null);

  const doTransaction = useCallback((request, uri) => {
    const params = new URLSearchParams();
    Object.keys(request).forEach((key) => {
      params.append(key, request[key]);
    });
    setReturnUri(uri);
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
            onNavigationStateChange={(navState) => {
              if (navState.url === returnUri) {
                setBody(null);
              }
            }}
            onError={() => {
              setBody(null);
            }}
          />
        </Modal>
      }
    </QPayContext.Provider>
  );
};

export default QPayProvider;
