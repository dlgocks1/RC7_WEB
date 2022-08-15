import React from 'react';
import Dialog from 'views/dialog/Dialog';
import { useSelector } from 'react-redux';
import PreViewModal from 'views/previewModal/PreViewModal';
import RootRoute from 'routes';

function App() {
  const { isModal } = useSelector((state) => state.episodeModalReducer);
  const { previewVisible } = useSelector((state) => state.previewModalReducer);

  return (
    <>
      
      <RootRoute/>
      {isModal && <Dialog />}
      {previewVisible && <PreViewModal />}

    </>
  );
}

export default App;
