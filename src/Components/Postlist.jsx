import { useContext } from 'react'
import React from 'react'

import Post from './Post'
import {PostList as PostlistContext } from '../Store/Post-list-store'

const Postlist = () => {
  const{postList}=useContext(PostlistContext)

  return (
<>
{postList.map((post)=><Post key={post.id} post={post}/>)}


</>
  )
}

export default Postlist