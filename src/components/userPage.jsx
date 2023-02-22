import { Container, Row} from "react-bootstrap";
import {UserCard} from "../pages/userCard";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [data, setData] = useState();
  console.log(data)

  useEffect (() => {
    fakeAPI();
  }, [])

  const fakeAPI = async () => {
    const response = await fetch(`http://localhost:3001/products`);
    const jsonData = await response.json();
    setData(jsonData)
  }

  return (
    <Container className=''>
        <Row className='user-page'>
        {
          data?.map((data, i) => {
            return (
            <UserCard
                key={i}
                {...data}
                />
            )
          })
        }
        </Row>
    </Container>
  )
}
  
  export default UserPage