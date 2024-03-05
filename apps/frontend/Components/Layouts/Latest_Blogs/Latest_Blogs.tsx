"use client";
import Typography from "@/Components/Typography/Typography";
import classes from "./Latest_Blogs.module.scss";
import {
  Blog_Card_Large,
  IBlogCardLarge,
} from "@/Components/Stateless/Blog_Card/Blog_Card";
import { useEffect, useState } from "react";
import axios from "axios";
export interface ISuggestedBlogs {
  title: string;
}
function Blogs({ dataArr }: { dataArr: IBlogCardLarge[] }) {
  return dataArr.map((blog, i) => {
    return (
      <Blog_Card_Large
        key={i}
        createdOn="12-01-2024"
        alt="Blog"
        description="this is the description for the blog"
        heading="Blog for you"
        readDuration="32min"
        src="/services/family-civil.jpg"
        slug="blog-for-you"
      />
    );
  });
}

function Suggested_Blogs({ title }: ISuggestedBlogs) {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);
  const fetchBlogs = async () => {
    try {
      const response = await axios({
        url: process.env.API_PATH || "http://localhost:3333/api/v1" + "/blogs",
        method: "get",
      });
      if (response.status === 200) {
        setBlogs(response.data.data);
      }
    } catch (error: any) {
      if (error.message) setError(error.message);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className={classes["container"]}>
      <Typography vairent="secondary" component="h4">
        {title}
      </Typography>
      <div className={classes["container__blogs"]}>
        <Blogs dataArr={blogs} />
      </div>
    </div>
  );
}

export default Suggested_Blogs;
