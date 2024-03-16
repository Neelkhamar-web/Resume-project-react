import React, { useContext } from 'react'
import { useRef } from 'react'

import {PostList as PostlistContext } from '../Store/Post-list-store'

const CreatePost = () => {

 const {addPost} =useContext(PostlistContext)

 const userIdElement=useRef();
 const postTitleElement=useRef();
 const  postBodyElement=useRef();
 const reactionsElement=useRef();
 const tagsElement=useRef();
 
 
 const handlesubmit=(event)=>{
event.preventDefault()
const userId= userIdElement.current.value;
const postTitle= postTitleElement.current.value;
const postBody= postBodyElement.current.value;
const reactions= reactionsElement.current.value;
const tags= tagsElement.current.value.split(/(\s+)/);

addPost(userId,postTitle,postBody,reactions,tags)

 }

  return (
<>
<form onSubmit={handlesubmit}>


<label for="User-Id" class="form-label">User-Id</label>
  <div class="mb-3">
    
  <input type="text" class="form-control" id="User-Id" aria-describedby="emailHelp" ref={userIdElement}/>

 
  </div>



  <div class="mb-3">
    <label for="posttitle" class="form-label">Post title</label>
    <input type="text" class="form-control" id="posttitle" aria-describedby="emailHelp" ref={postTitleElement}/>
  
  </div>
  




  <label for="Post content" class="form-label">Post content</label>
  <div class="mb-3">
    
    <textarea type="text" style={{width:"100%"}}
    rows="4"
    className='form-controll'
    placeholder='tell more about is'
    ref={postBodyElement}>

    </textarea>
  </div>


  <div class="mb-3">
    <label for="No of Reaction" class="form-label">No of Reaction</label>
    <input type="text" class="form-control" id="No of Reaction" aria-describedby="No of Reaction" ref={reactionsElement}/>
  
  </div>


  
  <div class="mb-3">
    <label for="No of hashtag" class="form-label">No of hashtag</label>
    <input type="text" class="form-control" id="No of hashtag" aria-describedby="No of hashtag" ref={tagsElement}/>
  
  </div>




  <button type="submit" class="btn btn-primary">Post</button>
</form>
</>
  )
}

export default CreatePost