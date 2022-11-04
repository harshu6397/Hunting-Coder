import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const blogs = ({allBlogs}) => {
    // const [blogs, setBlogs] = useState([]);
    // useEffect(() => {
    //     fetch('/api/blogs').then((res) => res.json()).then((data) => {
    //         setBlogs(data);
    //     });
    // }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Hunting Coder Blog
            </h1>
            <p className={styles.description}>
                A Blog for hunting coder by hunting coder : Connecting ideas and people
            </p>
            <div className={styles.blogs}>

                {allBlogs.map((singleBlog) => (

                    <div className={styles.blog} key={singleBlog.slug}>
                        <img src={singleBlog.image} alt={singleBlog.title} width={200} height={200} />
                        <h3>{singleBlog.title}</h3>
                        <p>{singleBlog.description.substr(0, 140)}...</p>
                        <Link href={`/blogpost/${singleBlog.slug}`}>
                            <button className={styles.btn}>Read More...</button>
                        </Link>
                    </div>
                ))}
            </div>
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

export default blogs
