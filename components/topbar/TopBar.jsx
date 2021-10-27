
import './topbar.css'
function TopBar() {
    const user = true;
    return (
        <div className='top'>
           <div className='topleft'><i class="fas fa-feather-alt"></i></div>
           <div className='topcenter'>
               <ul className='toplist'>
                  

<li className='toplistitem'><a href='/home'>Home</a></li>
{user && <li className='toplistitem'><a href="/write">Write</a></li>}
 {!user && <li className='toplistitem'><a href="/login">Login</a></li>}

<li className='toplistitem'>{user && "Logout"}</li> <div className='topright'>
    
<li className='toplistIcon'><a href='/settings'><i class="fas fa-user-circle"></i></a></li>
<li className='toplistIcon'><a><i class="fas fa-search"></i></a></li>
<li className='toplistIcon'><input type='text' placeholder='Search'></input></li></div>
               </ul></div>
          
              
              
           

        </div>
        
    )
}

export default TopBar
