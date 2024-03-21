import { envConfig } from '@/envConfig';
import axios from 'axios';

export const handle_logout_button = async (router: any) => {
  // e.preventDefault();
  try {
    const res = await axios({
      url: envConfig.API_PATH + '/auth/logout',
      method: 'POST',
      withCredentials: true,
    });
    alert('logout successful');
  } catch (error) {
    alert('Failed to logout your profile.');
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
