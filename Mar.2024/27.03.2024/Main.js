import {getPost} from "./get-post.js";
import { createPost } from "./get-post.js";

const allUrl='https://jsonplaceholder.typicode.com/todos/1';
const singleUrl='https://jsonplaceholder.typicode.com/todos/1';

const post=await getPost(singleUrl);
