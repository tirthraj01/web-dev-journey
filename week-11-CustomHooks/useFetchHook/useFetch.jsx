import { useEffect, useState } from "react";

export function usePostTitle(){
    const [post, setPost] = useState({});

  async function getPosts() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1");
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return post.title;
}

export function useFetch(url){
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getDetails(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setLoading(false);
        setFinalData(json);
    }

    useEffect(() => {
        getDetails();
    }, [url] )

    return{
        finalData,
        loading
    }
}
