# react-native-qpay

<p>
  <a href="https://www.npmjs.com/package/react-native-qpay">
    <img src="https://badge.fury.io/js/react-native-qpay.svg" alt="npm version" height="18">
  </a>
  <a href="https://npmjs.org/package/react-native-qpay" title="View this project on NPM">
    <img src="https://img.shields.io/npm/v/react-native-qpay.svg" alt="NPM version" />
  </a>
  <a href="https://www.npmjs.com/package/react-native-qpay">
    <img src="https://img.shields.io/npm/dw/react-native-qpay" alt="Downloads">
  </a>
</p>

## Install
```bash
# using npm
npm install react-native-webview react-native-qpay --save

# OR using Yarn
yarn add react-native-webview react-native-qpay
```

### Usage
```js
import React, {useCallback} from 'react';
import {Button, Text} from 'react-native';
import {QPayProvider, useQPay} from 'react-native-qpay';

const Transaction = () => {
  const {doTransaction, status} = useQPay();

  const transact = useCallback(() => {
    doTransaction(
      {
        requestparameter:
          'N7nM1bZ6lqX1VxzdRNBVxlOyNIDdvyL11iUyWnPKPKsptGZIE9RXZ8xh7HpwYmvonTVFrhfio3mFG5YqESd/5G8EzL6EszW3MR2qRZbuCZELLtF+4VP70Az9cIJl42fWBS3kn2Mdig3Ga1tDzg4OuskriETW1Bs0gJPfIq9EF4/dFTnrIWQM6doXvpa+gyZFtmGooOQXMB75opxdP2kkP7pfK0p/SYFD/pvalT9bObus/xQNdUpdj7rV7HVXLffxHjxVnEnvUel40IVqVNzb2z7nHRvRlJFzL6y+jRQeRH91Q4LW/1Ho0Fu5JYbGvl2Cq5KQVq7p3hjPEw6IyhgBKjKGEapA9Nc6XKNIOZepcSGLNNu4BXklEdWbxw1rG+j6LNZces1lkZtCQQD1iAN/QmPrw81SMQG1tASl8DBHdlhosGmhpXE9Xks+NHJOsY5gdBj5GLqzWoMeqOfYZe6ToQXUQut0fv29S+aV2G3DOVz56ZpBZpH/b/gGcysThdee+ZCPQ1S3NeoZ2+Swg47ShYMPPyGOcS0CLGGlWyR9Sn2sQtQaylm/Q3I8CQ/k4qxv+dvJlPrW0p/xnFnbE+pQ2mKXaPK4mNOMyUmTUfcdZMfPMQKGabWX6oR52nWHi0Z/6FQWWszEBTagA/MYibo/GqG9KCxFRFS+OSTO9jMC5vw=',
      },
      'http://localhost:5826/Online/TransactionStatus.aspx',
    );
  }, [doTransaction]);

  return (
    <>
      <Text>TRANSACTION STATUS: {status}</Text>
      <Button onPress={transact} title="Pay now" />
    </>
  );
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