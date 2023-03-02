import React from 'react'
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <>
      <div className="container-card">
        <div className="box">
          <img src="images/movie.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Black-Panther</h5>
            <div className='button'><Link to="./viewdetails" className="btn btn-primary">View Details</Link></div>
          </div>
        </div>

        <div className="box">
          <img src="images/movie3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ant-Man</h5>
            <div className='button'><Link to="./viewdetails" className="btn btn-primary">View Details</Link></div>
          </div>
        </div>

        <div className="box">
          <img src="images/movie4.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Avengers-Endgame</h5>
            <div className='button'><Link to="./viewdetails" className="btn btn-primary">View Details</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card