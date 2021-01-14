import Cookie from 'universal-cookie';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Link from 'next/link';
const cookie = new Cookie();

export default function MainPage() {
  const router = useRouter();
  const logout = () => {
    cookie.remove('access_token');
    router.push('/');
  };
  return (
    <Layout title='Main Ppge'>
      <div className='mb-10'>
        <Link href='/blog-page'>
          <a className='bg-indigo-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded'>
            Visit Blog SSG + ISG
          </a>
        </Link>
        <Link href='/task-page'>
          <a className='bg-indigo-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded'>
            Visit Task ISR + CSR
          </a>
        </Link>
      </div>

      <svg
        onClick={logout}
        class='mt-10 cursor-pointer w-6 h-6 hover:text-indigo-600'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'></path>
      </svg>
    </Layout>
  );
}
