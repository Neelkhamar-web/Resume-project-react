import { useState } from 'react'
import Hader from './Components/Hader'
import Footer from './Components/Footer'
import Slidebar from './Components/Slidebar'
import CreatePost from './Components/CreatePost'
import Postlist from './Components/Postlist'
import Postlistsprovider from './Store/Post-list-store'
import "./App.css"


import"bootstrap/dist/css/bootstrap.min.css"


function App() {
const[Cpost,Setpost]=useState("Home")

  return (

    <Postlistsprovider>

   
    <div className='container-div'>
     <Slidebar slidebar={Cpost} setpost={Setpost}/>
     <div className='content'>
     <Hader/>
{Cpost==="Home"?(<CreatePost/> ):(<Postlist/>)}
  
    
 
    <Footer/>

     </div>

    </div>
    </Postlistsprovider>

  )
}

export default App
