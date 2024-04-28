import Typography from '@/Components/Typography/Typography';
import { envConfig } from '@/envConfig';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

export const handle_logout_button = async (router: any) => {
  // e.preventDefault();
  try {
    const res = await axios({
      url: envConfig.API_PATH + '/auth/logout',
      method: 'POST',
      withCredentials: true,
    });
    enqueueSnackbar(
      <Typography component="p" vairent="p" color="var(--color-white)">
        Logout Successfully!
      </Typography>,
      { variant: 'warning' }
    );
  } catch (error) {
    enqueueSnackbar(
      <Typography component="p" vairent="p" color="var(--color-white)">
        Failed to logout, Try again later.
      </Typography>,
      { variant: 'error' }
    );
  } finally {
    router.push('/auth');
  }
};

export const handle_dashboard_redirect = (router: any) => {
  router.push('/admin/appointments');
};

export const handle_login = (router: any) => {
  router.push('/auth');
};
