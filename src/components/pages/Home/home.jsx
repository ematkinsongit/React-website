import Sidebar from '../../sidebar/sidebar'
import Header from '../../header/header'
import Posts from '../../posts/posts'
import './home.css'

function Home() {
  
    return (
        <>
          <Header/>
        <div className='home'>
          
            <Posts/>
            <Sidebar/>
        </div></>
        
    )
}

export default Home
