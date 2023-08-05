# react-native-qpay

## Install
```bash
# using npm
npm install react-native-webview react-native-qpay --save

# OR using Yarn
yarn add react-native-webview react-native-qpay
```

### Usage
```js
import React, {useEffect} from 'react';
import {QPayProvider, useQPay} from 'react-native-qpay';

const Transaction = () => {
  const {doTransaction} = useQPay();

  useEffect(() => {
    doTransaction({
      ResponseURL: 'http://localhost/reach/Testcontrollerqpay/ajaxtest',
      QPayID: 'JPCTCapiacc`MTAuMDA=',
      QPayPWD: 'jpctc!123',
      TransactionType: 'PURCHASE',
      OrderID: '9610',
      Currency: 'INR',
      Mode: 'test',
      name: 'sunil',
      email: 'test@test.com',
      phone: '9876543210',
      Paymentoption: 'C,U,N,W',
      secure_hash:
        'D99A8CC4E6C1178640A56AEEFB3A6450A068ACA4F4BDF3FB4DC0B3AD1D13F07FEFBA53E9211524FDB32C1B7394B1F4AF62D59A0C9A6BC637B9428AFB3B422CCB',
    });
  }, [doTransaction]);

  return null;
};

const App = () => {
  return (
    <QPayProvider>
      <Transaction />
    </QPayProvider>
  );
};

export default App;
```