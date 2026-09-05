import axios from "axios";
async function getBlogs(){
    const res = await axios.get
    ("https://jsonplaceholder.typicode.com/todos/");
    return res.data;
}
export default async function Blogs(){
    const blogs = await getBlogs();
    return <div>
        <h1>Learn Recoil</h1>
        {blogs.map((blog: ITodo) => <Todo 
        title={blog.title} completed={blog.completed} />)}
    </div>
}
 
interface ITodo{
    title: string;
    completed: boolean;
}

function Todo({title, completed}: ITodo){
    return <div>
        {title} {completed ? "Completed" : "Not Completed"}
    </div>

}