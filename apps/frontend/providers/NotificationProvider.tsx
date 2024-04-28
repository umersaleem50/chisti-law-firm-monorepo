'use client';
import { SnackbarProvider } from 'notistack';

const NotificationProvider = ({
  duration,
  children,
}: {
  duration: number;
  children: any;
}) => {
  return (
    <SnackbarProvider autoHideDuration={duration}>{children}</SnackbarProvider>
  );
};

export default NotificationProvider;
