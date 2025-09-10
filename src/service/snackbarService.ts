// service/snackbar.tsx
let showSnackbar: ((msg: string, severity?: 'error' | 'success' | 'info') => void) | null = null;

export const setSnackbarHandler = (fn: typeof showSnackbar) => {
  showSnackbar = fn;
};

export const notify = (msg: string, severity: 'error' | 'success' | 'info' = 'error') => {
  if (showSnackbar) showSnackbar(msg, severity);
};
