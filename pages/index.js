import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({allBlogs}) {
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() =>{
  //   fetch('/api/blogs').then((res) => res.json()).then((data) => {
  //     setBlogs(data);
  //   });
  // }, []);
  return (
    <div className={styles.container}>
      {/* <style jsx>
        {`
          .dot{
            color: red;
          }
        `}
      </style> */}
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="This is a Blog named Hunting Coder. It is developed using Next.js" />
        <meta name="keywords" content="next.js, HuntingCoder Blog, Hunting Coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='sr.js'></Script> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder Blog
        </h1>
        <Image src="/blog.svg" alt='Blog SVG' width={500} height={300} />
        <p className={styles.description}>
          A Blog for hunting coder by hunting coder
        </p>

        <div className={styles.blogs}>
        {allBlogs.map((singleBlog) => (
                    
                    <div className={styles.blog}  key={singleBlog.slug}>
                        <img src={singleBlog.image} alt={singleBlog.title} width={200} height={200} />
                        <h3>{singleBlog.title}</h3>
                        <p>{singleBlog.description}</p>
                        <Link href={`/blogpost/${singleBlog.slug}`}>
                        <button className={styles.btn}>Read More...</button>
                        </Link>
                    </div>
                ))}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs');
  let allBlogs = await data.json();
  return {
      props: {allBlogs}, // will be passed to the page component as props
  }
}