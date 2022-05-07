import '../styles/globals.css'
import { useState } from 'react';
import { Root, HomeLink } from '@components/app.style';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import DarkTheme from '@components/dark-theme.style';
import DarkModeSwitch from '@components/DarkModeSwitch';
import LightTheme from '@components/light-theme.style';
import { DarkCode } from '@components/dark-code.style';
import { LightCode } from '@components/light-code.style';
import Sine from 'components/Sine'
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const handleDarkModeSwitch = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div>
      {theme === 'dark' ? <DarkCode /> : <LightCode />}
      <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
        <Root>
          <div className='flex items-start'>
            <div className=''>
              <Link href="/" passHref>
                <HomeLink className='text-3xl'>Home</HomeLink>
              </Link>
              <DarkModeSwitch handler={handleDarkModeSwitch} />
            </div>
            <Sine />
          </div>
          <Component {...pageProps} />
        </Root>
      </ThemeProvider>
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp
