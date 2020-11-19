import React from "react";

export default function Repo({items}) {
    let spanstyle ={
        display:'block',

    }

    return <>

        <section className="col-5 mb-4 sectionRepo ml-1">
            <div className="section_title">{items.name}</div>
            <div className="about_section">
                <span style={spanstyle} >
                   {items.description}</span>
            </div>
            <div className="bottom_section">
                {items.language && <span ><i className="fas fa-code"/>&nbsp; {items.language}  &nbsp; </span>  }
                <span><i className="fas fa-star"/>&nbsp; {items.stargazers_count} &nbsp;</span>
                <span><i className="fas fa-code-branch"/>&nbsp; {items.forks_count}</span>
            </div>
        </section>
    </>
}