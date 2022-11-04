import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import Image from 'next/image'

const Slug = ({blog}) => {
  // const [blog, setBlog] = useState(myBlog);
  // const router = useRouter()
  // const { slug } = router.query

  // useEffect(() => {
  //   fetch(`/api/getBlog?slug=${slug}`).then((res) => res.json()).then((data) => {
  //     setBlog(data);
  //   });
  // }, [slug]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              {blog.title}
            </h1>
            <div className={styles.author}>
              {blog.author}
            </div>
          </div>
          <p className={styles.description}>
            {blog.description}
          </p>
          <p className={styles.content}>
            {blog.content}
          </p>
        </div>
        <Image className={styles.image} src="/blogpost.svg" alt="BlogPost SVG" width={200} height={200} />
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${context.params.slug}`);
  let blog = await data.json();
  return {
    props: {blog}, // will be passed to the page component as props
  }
}

export default Slug
