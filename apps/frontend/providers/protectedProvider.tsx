import { envConfig } from '@/envConfig';
import ErrorPage from './ErrorPage';
import { CookiesProvider, useCookies } from 'react-cookie';
import * as jose from 'jose';
// async function Protected({ children }: { children: any }) {
//   const cookieStore = cookies();
//   const token = cookieStore.get('jwt');

//   const decodeToken = jwt.verify(
//     token?.value as string,
//     envConfig.JWT_SECRETKEY as string
//   );

//   if (decodeToken) return children;
//   return <ErrorPage />;
// }
function Protected({ children }: { children: any }) {
  const [jwtCookie] = useCookies(['jwt']);
  // const [isAuth, setIsAuth] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const router = useRouter();

  const verifyToken = async (token: any) => {
    try {
      const data = await jose.jwtVerify(
        token,
        new TextEncoder().encode(envConfig.JWT_SECRETKEY)
      );

      if (data.payload && data.protectedHeader) {
        return children;
        // sessionStorage.setItem('account', JSON.stringify(data.payload));
      } else return <ErrorPage />;
    } catch (error) {
      console.log(error);

      // console.log('this is error', error);
      // //   alert(error);
      // if (process.env.NODE_ENV !== 'production') {
      //   console.log(error);
      //   alert('error');
      // }
      return <ErrorPage />;

      // else router.push('/auth');
    }
  };
  // useEffect(() => {
  //   verifyToken(jwtCookie.jwt);
  // }, []);
  return <CookiesProvider>{verifyToken(jwtCookie.jwt)}</CookiesProvider>;
}

export default Protected;
