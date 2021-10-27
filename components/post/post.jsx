import './post.css'


function Post({post}) {
    return (
        <div className='card'>
            <img
            className='postImg' src="https://cdn.pixabay.com/photo/2018/01/28/13/24/portrait-3113651_1280.jpg" alt="" />
        
        <div className="postInfo">
            <div className="postCategories">
                
            </div>
            <span className="postTitle">{}</span>
            <hr/>
            <span className="postDate">{}</span>
        </div>
        <p className='postDescription'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad iste laborum fugiat, iusto exercitationem minus quam doloremque, at dolorum alias harum explicabo eum veniam possimus blanditiis consequuntur quae. Quo, incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum libero laudantium, amet pariatur veritatis dolore quis id corrupti corporis saepe repellendus necessitatibus excepturi accusantium reprehenderit quibusdam sunt nisi voluptatem! </p>
        </div>
    )
}

export default Post
