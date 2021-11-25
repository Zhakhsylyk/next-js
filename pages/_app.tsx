import '../styles/globals.scss'
import Image from 'next/image';
import {AppProps} from "next/app"
import youtubeImg from "../public/youtube.png"
import Layout from '../components/Layout';
import Head from 'next/dist/shared/lib/head';

const MyApp = ({ Component, pageProps }:AppProps) => (
<Layout>
<Head>
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@1,100&family=Montserrat:wght@300&family=Shalimar&display=swap" rel="stylesheet" />
</Head>
<main> 
<Component {...pageProps} />
</main>
<Image src={youtubeImg}
width={500}
height={650}
alt="preview"
placeholder="blur"
> 

</Image>
</Layout>
);

export default MyApp
