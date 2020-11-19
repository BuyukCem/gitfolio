import React, {useState, useEffect} from 'react';
import {ApiErrors, apiFetch} from "../utils/api";
import '../style/style.css'
import Profile from './Profile';

export function UserForm() {
    const [error, setError] = useState(null);
    const [username, setusername] = useState("");
    const [userdata, sertUserdata] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const userInfo = await apiFetch('/users/' + username, {
                    method: 'GET',
                })
                sertUserdata(userInfo)
            } catch (err) {
                setError(err.errors)
            }
        };

        if (username) {
            fetchData()
        }
    }, [username]);

    const handleSubmit = async function (e) {
        e.preventDefault()
        const data = new FormData(e.target)
        setusername(data.get('userName'))

    }
    return <>
        {userdata ? <Profile data={userdata}/> :
            <div className='container'>
                <div className="row">
                    <div className="col-sm-offset-3 col-sm-12 text-center mt-5">
                        <div>
                            <i className="fab fa-github"/>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group input-group-lg">
                                <input type="text" className="form-control" placeholder="Your github username"
                                       name="userName"/>
                            </div>
                            <button type="submit" value="Envoyer" id="continue-btn"
                                    className="btn btn-success btn-block">Continue
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        }
    </>
}


function Alert({children}) {
    return <div className="alert alert-danger">{children}</div>
}
