import React from 'react';

const Posts = ({ posts, search, dateFilters }) => {

  const convertDate = milliseconds => {
    const dateObject = new Date(milliseconds)

    // const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15

    const month = dateObject.toLocaleString("pt-BR", { month: "long" }) // dezembro
    const day = dateObject.toLocaleString("pt-BR", { day: "numeric" }) // 9

    return `${day} de ${month}`
  }

  // if posts has some data, it maps the array,
  // if not, it does not map the array and returns null
  const postsList = posts.length ? (
    posts.map(post => {
      let dbDate = new Date(post.creationDate.seconds * 1000).toString().slice(0, 15) //returns Tue May 18 2021
      let todaysDate = new Date().toString().slice(0, 15) //returns Tue May 18 2021

      if (dateFilters.today) {
        // Compare today's date to the date of each post in the db
        if (dbDate === todaysDate) {
          if ((post.title.toString().toLowerCase().includes(search)) || (search === '')) {
            return (
              <div className="col-12 col-md-6" key={post.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="mb-2 d-flex align-items-center">
                      <h6 className="card-title m-0">{post.title}</h6>
                      <div className="card-date mx-2 text-muted">
                        {/* //converts post.date (unix timestamp in miliseconds) to '{15} de {maio}' */}
                        {convertDate(post.creationDate.seconds * 1000)}
                      </div>
                    </div>
                    <p className="card-text text-muted">{post.description}</p>
                    {/* <p onClick={() => { deletePost(post.id) }}>Apagar</p> */}
                  </div>
                </div>
              </div>
            )
          } else {
            return null
          }
        }
      } else {
        if ((post.title.toString().toLowerCase().includes(search)) || (search === '')) {
          return (
            <div className="col-12 col-md-6" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <div className="mb-2 d-flex align-items-center">
                    <h6 className="card-title m-0">{post.title}</h6>
                    <div className="card-date mx-2 text-muted">
                      {/* //converts post.date (unix timestamp in miliseconds) to '{15} de {maio}' */}
                      {convertDate(post.creationDate.seconds * 1000)}
                    </div>
                  </div>
                  <p className="card-text text-muted">{post.description}</p>
                  {/* <p onClick={() => { deletePost(post.id) }}>Apagar</p> */}
                </div>
              </div>
            </div>
          )
        } else {
          return null
        }
      }

      // solve issue: map() always needs to return something
      return null
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