import { Row, Col } from "react-bootstrap";

export const UserCard = ({ id, username, image, follower }) => {
  return (
    <div className="user-card d-flex flex-row justify-content-start align-items-center col-12">
      <div className="user-profile me-3 d-flex justify-content-center align-items-center">
          <img alt="User" src={image}/>
      </div>
      <div className="card-detail d-flex flex-column justify-content-center">
        <a className="mb-2 mt-2" href={"/user-detail/" + id}>@{username}</a>
        <p>Followers: {follower}</p>
      </div>
    </div>
  )
}