import React, { useContext } from 'react'
import "/src/App.css"
import { MdDeleteOutline } from "react-icons/md";
import { PostList } from '../Store/Post-list-store';

const Post = ({post}) => {
  const{deletePost}=useContext(PostList)
  return (
<>
<div class="card postcard" style={{width:"18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
  <div class="card position-relative">
 
  <a class="text-right position-absolute top-0 end-0" onClick={()=>deletePost(post.id)}><MdDeleteOutline /></a>
</div>
    <h5 class="card-title">{post.title}</h5>
    <p class="card-text">
      {post.body}
    </p>
    <div class="tag-reaction">
 {post.tags.map((tag)=>(<span class='badge text-bg-pimary'>{tag}</span>))}
    <p>reaction:{post.reactions}</p>

    </div>
 
  </div>
</div>
</>
  )
}

export default Post