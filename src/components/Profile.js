import React, {useState, useEffect} from 'react';
import UserInfo from './UserInfo';
import ListRepo from './ListRepo';
import {apiFetch} from "../utils/api";

export default function Profile({data}) {

    return <>
        <div className="row">

            <div className="col-xl-4 col-lg-4 col-md-4  col-12">
                    <UserInfo data={data} />
            </div>

            <div className="col-xl-8 col-lg-8  col-md-8  col-sm-12  col-12 ">
                <ListRepo data={data} />
            </div>
        </div>

    </>
}