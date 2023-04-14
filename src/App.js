import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO list</PageTitle>
        <div className={styles.app__wrapper} />
        <AppHeader />
        <AppContent />
      </div>
      <Toaster />
    </>
  );
}

export default App;
