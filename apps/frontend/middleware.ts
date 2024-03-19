import { NextRequest, NextResponse } from 'next/server';
// import * as jwt from 'jsonwebtoken';
import { jwtVerify } from 'jose';
import { envConfig } from './envConfig';

const verifyToken = async (token: string) => {
  const verified = await jwtVerify(
    token,
    new TextEncoder().encode(envConfig.JWT_SECRETKEY)
  );
  if (verified && verified.payload.id) {
    return true;
  }
  return false;
};

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('jwt')?.value;
    if (token && (await verifyToken(token))) {
      return NextResponse.next();
    }
    return NextResponse.error();
  }
  return NextResponse.next();
}
