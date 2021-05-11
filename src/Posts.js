import React from 'react';

const Posts = ({ posts, deletePost }) => {

  // if posts has some data, it maps the array,
  // if not, it does not map the array and returns null
  const postsList = posts.length ? (
    posts.map(post => {
      return (
        <div className="col-12 col-md-6" key={post.id}>
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">{post.title}</h6>
              <p className="card-subtitle mb-2 text-muted">{post.date}</p>
              <p className="card-text">{post.desc}</p>
              <p className="text-muted" onClick={() => {deletePost(post.id)}}>Apagar</p>
            </div>
          </div>
        </div>
      )
    })
  ) : (
    <p className="text-muted">Não há posts aqui :(</p>
  )

  return (
    <React.Fragment>
      {postsList}
    </React.Fragment>
  );
}

export default Posts;