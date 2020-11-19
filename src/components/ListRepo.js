import React, {useEffect, useState} from "react";
import Repo from "./Repo"
import {apiFetch} from "../utils/api";

export default function ListRepo({data}) {
    const [repodata, setrepo] = useState(null);
    const [username, setusername] = useState(data);
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                console.log("Hello")
                const userRepo = await apiFetch('/users/'+username.login+'/repos', {
                    method: 'GET',
                })
                    setrepo(userRepo)
                    SetIsLoading(false)

            } catch (err) {
                console.log(err)
            }
        })();
    }, []);

    return (<>
        <div className="mt-5 ml-3 col-12">
            <h1>Works.</h1>

                <div className="mt-5 row">
                    {isLoading ? <div>Loading ....</div> :
                        repodata.map((repo, key) => (
                            <Repo key={key} items={repo}/>
                        ))
                    }
                </div>

        </div>
    </>)
}
