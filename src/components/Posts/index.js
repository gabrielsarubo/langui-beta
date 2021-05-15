import React from 'react';

const Posts = ({ posts, getPostId }) => {

  // if posts has some data, it maps the array,
  // if not, it does not map the array and returns null
  const postsList = posts.length ? (
    posts.map(post => {
      return (
        <div className="col-12 col-md-6" key={post.id}>
          <div className="card" data-bs-toggle="modal" data-bs-target="#modalViewPost" onClick={() => { getPostId(post.id) }}>
            <div className="card-body">
              <div className="mb-2 d-flex align-items-center">
                <h6 className="card-title m-0">{post.title}</h6>
                <div className="card-date mx-2 text-muted">{post.date}</div>
              </div>
              <p className="card-text text-muted">{post.desc}</p>
            </div>
          </div>
        </div>
      )
    })
  ) : (
    // Template for when there are no posts or loading them
    <div className="col">
      <div className="card">
        <div className="card-body text-center bg-light">
          <h6 className="card-title">Não existem posts ainda.</h6>
          <p className="card-text text-muted">Crie um novo e comece a praticar.</p>
        </div>
      </div>
    </div>
  )

  return (
    <React.Fragment>
      {postsList}
    </React.Fragment>
  );
}

export default Posts;