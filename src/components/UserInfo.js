import React from "react";

export default function UserInfo({data}) {
    let spanstyle ={
        display:'block',

    }
    let sticky ={
        top:'20rem'
    }
    return <>
            <div className="position-sticky position_profil mt-5"style={sticky}>
                <img className="profile_imag ml-5 mb-3" src={data.avatar_url}/>
                <div id="username">
                    <span style={spanstyle} className="mt-2">{data.login}</span>
                    <a href="https://github.com/${data.login}">@{data.login}</a>
                    <span style={spanstyle} className="mt-2">{data.bio}</span>
                </div>
                <div id="about" className="mt-5">
                    <span style={spanstyle} className="mt-2"> <i className="fas fa-map-marker-alt mr-1" aria-hidden="true"/>  {data.location}</span>
                    <span style={spanstyle} className="mt-2"><i className="fas fa-link"/> <a href={data.blog}>{data.blog}</a></span>
                </div>
            </div>
    </>
}