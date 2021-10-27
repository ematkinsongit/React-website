import './sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
               <span className="sidebarTitle">About Me</span>
               <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates quae placeat, cupiditate exercitationem in id laboriosam error quo. Eum consectetur soluta fugit blanditiis dolorum eaque officiis veritatis at cupiditate?</p>
            </div>
           <div className="sidebarItem">
               <span className="sidebarTitle">Categories</span>
               <ul className="sidebarList">
                   <li className="sidebarListItem">Life</li>
                   <li className="sidebarListItem">Music</li>
                   <li className="sidebarListItem">Style</li>
                   <li className="sidebarListItem">Sport</li>
                   <li className="sidebarListItem">Cinema</li>
                   <li className="sidebarListItem">Tech</li>
               </ul>
           </div>
           <div className='sidebarItem'>
               <span className="sidebarTitle">Follow Us</span>
               <div className="sidebarSocial">Social Icons </div>
           </div>
        </div>
    )
}

export default Sidebar
