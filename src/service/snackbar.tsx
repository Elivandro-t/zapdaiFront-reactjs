import React, { useState, useEffect, type ReactNode } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { setSnackbarHandler } from './snackbarService';

interface Props {
  children: ReactNode;
}

export const SnackbarProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<'error' | 'success' | 'info'>('error');

  const showMessage = (msg: string, sev: 'error' | 'success' | 'info' = 'error') => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  useEffect(() => {
    setSnackbarHandler(showMessage);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <>
      {children}
      <Snackbar open={open} autoHideDuration={4000 }  anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // aqui
 onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
