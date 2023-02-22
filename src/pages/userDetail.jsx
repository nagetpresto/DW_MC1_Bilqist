import {Container} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetail(){
    const params = useParams();

    const [data, setData] = useState();
    console.log(data)

    useEffect (() => {
        fakeAPI();
    }, [])
    
    const fakeAPI = async () => {
        const response = await fetch(`http://localhost:3001/products/${params.id}`);
        const jsonData = await response.json();
        setData(jsonData)
    }

    return (
        <Container className='text-center'>
            <div className='user-detail d-flex flex-column align-items-center justify-content-center bg-secondary'>
                <div className='detail-img mb-3 d-flex align-items-center justify-content-center'>
                    <img src={data?.image} alt="User" className=''/>
                </div>
                <p>@{data?.username}</p>
                <div className='d-flex flex-row col-5 align-items-center justify-content-center'>
                    <div className="d-flex flex-column col-3 text-center">
                        <p className='text-dark'>{data?.follower}</p>
                        <p className='text-dark'>Followers</p>
                    </div>
                    <div className="d-flex flex-column col-3 text-center">
                        <p className='text-dark fw-3'>{data?.following}</p>
                        <p className='text-dark fw-3'>Following</p>
                    </div>
                </div>
            </div>
            <a className="text" href="/">Back</a>
        </Container>
    )
}

export default UserDetail;