import React, { useCallback, useState } from 'react';
import { Modal } from 'react-native';
import WebView from 'react-native-webview';
import QPayContext from './QPayContext';

const QPayProvider = ({ children }) => {
  const [isTransaction, setIsTransaction] = useState(false);

  const doTransaction = useCallback(() => {
    setIsTransaction(true);
  }, []);

  return (
    <QPayContext.Provider value={{ doTransaction }}>
      {children}
      {
        isTransaction &&
        <Modal
          animationType="slide"
          transparent
          visible={isTransaction}
        >
          <WebView
            source={{ html: 
              `<body onload="document.QPayTransaction.submit()">
                <form name="QPayTransaction" method="post" action="http://pg.qpayindia.com/WWWS/Payment/PaymentDetails.aspx">
                  <input type="hidden" name="ResponseURL" value="http://localhost/reach/Testcontrollerqpay/ajaxtest"/>
                  <input type="hidden" name="QPayID" value="JPCTCapiaccMTAuMDA="/>
                  <input type="hidden" name="QPayPWD" value="jpctc!123"/>
                  <input type="hidden" name="TransactionType" value="PURCHASE"/>
                  <input type="hidden" name="OrderID" value="9610"/>
                  <input type="hidden" name="Currency" value="INR"/>
                  <input type="hidden" name="Mode" value="test"/>
                  <input type="hidden" name="name" value="sunil"/>
                  <input type="hidden" name="email" value="test@test.com"/>
                  <input type="hidden" name="phone" value="9876543210"/>
                  <input type="hidden" name="Paymentoption" value="C,U,N,W"/>
                  <input type="hidden" name="secure_hash" value="D99A8CC4E6C1178640A56AEEFB3A6450A068ACA4F4BDF3FB4DC0B3AD1D13F07FEFBA53E9211524FDB32C1B7394B1F4AF62D59A0C9A6BC637B9428AFB3B422CCB"/>
                  <input type="submit" value="submit"/>
                </form>
              </body>`
            }}
          />
        </Modal>
      }
    </QPayContext.Provider>
  );
};

export default QPayProvider;
