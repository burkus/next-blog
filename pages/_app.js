import '../styles/globals.css'
import React from 'react';
import { Canvas, Root, HomeLink } from '@components/app.style';
import Link from 'next/link';
import Sine from '../lib/sine';
import { ThemeProvider } from 'styled-components';
import DarkTheme from '@components/dark-theme.style';
import DarkModeSwitch from '@components/DarkModeSwitch';
import LightTheme from '@components/light-theme.style';
import { DarkCode } from '@components/dark-code.style';
import { LightCode } from '@components/light-code.style';

function MyApp({ Component, pageProps }) {
  const canvasRef = React.useRef(null);
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const sine = new Sine();
    const width = window.innerWidth;
    console.log(ctx)
    canvasRef.current.width = width;
    canvasRef.current.backgroundColor = 'black'
    const draw = () => {
      sine.draw(ctx);
      requestAnimationFrame(() => draw(sine.draw(ctx)));
    }

    draw();

    const resize = () => {
      canvasRef.current.width = window.innerWidth;
    }

    window.onresize = resize;

    return () => window.removeEventListener("resize", resize);
  }, []);

  const handleDarkModeSwitch = () => {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  React.useEffect(() => {
    if(!canvasRef.current) return;
    canvasRef.current.backgroundColor = theme === 'dark' ? 'black' : 'white';
  }, [theme])

  return (
    <Root>
      { theme === 'dark' ? <DarkCode /> : <LightCode /> }
      <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
        <Canvas ref={canvasRef}></Canvas>
        <Link href="/" passHref>
            <HomeLink>Home</HomeLink>
        </Link>
        <DarkModeSwitch handler={handleDarkModeSwitch} />
        
        <Component {...pageProps} />
      </ThemeProvider>
    </Root>
  );
}

export default MyApp