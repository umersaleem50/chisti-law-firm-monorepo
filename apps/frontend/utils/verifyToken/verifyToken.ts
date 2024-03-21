import { envConfig } from '@/envConfig';
import { jwtVerify } from 'jose';

export const verifyToken = async (token: string) => {
  const tokenStr = token?.toString();
  if (!tokenStr || tokenStr === '') return false;
  const verified = await jwtVerify(
    tokenStr,
    new TextEncoder().encode(envConfig.JWT_SECRETKEY)
  );
  if (verified && verified.payload.id) {
    return true;
  }
  return false;
};
