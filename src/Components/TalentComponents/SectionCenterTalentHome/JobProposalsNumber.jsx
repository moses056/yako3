/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { collection, getDocs } from "firebase/firestore";

export default function JobProposalsNumber({ jobID }) {
    const [num, setNum] = useState(0)
    useEffect(() => {
        console.log(jobID);
        const proposalsRef = collection(db, "job", jobID, "proposals");
        getDocs(proposalsRef).then(res => {
            setNum(res.docs.length);
        })
    }, [])

    return (
        <span>
            {num}
        </span>
    )
}
