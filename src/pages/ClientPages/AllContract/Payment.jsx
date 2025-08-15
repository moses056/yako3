import React from 'react'
import { db } from '../../../firebase';
import { serverTimestamp, collection, doc, where, query, getDocs, getDoc, updateDoc, addDoc } from 'firebase/firestore';

export default function Payment({ job, talent, clientContract }) {
    console.log(clientContract);

    const pay = async () => {

        await addDoc(collection(db, "talent", talent.authID, "notification"), {
            time: serverTimestamp(),
            message: `Your payment request for "${job?.jobTitle}" is approved.`,
            type: "Payment approved",
            userID: talent.authID,
            userName: talent.firstName,
            userPhoto: talent?.profilePhoto,
            isShow: false,
            route: "/all-contract",
            jobID: job?.jobID
        })

        const docRef = doc(db, "talent", talent?.authID);
        const docSnap = await getDoc(docRef);
        const res = docSnap.data()?.totalEarnings + clientContract.jobBudget;
        await updateDoc(doc(db, "talent", talent?.authID), { totalEarnings: res })

    }
    const end = async () => {
        await updateDoc(doc(db, "job", job?.jobID), { status: "closed" })

        const q = query(collection(db, "talent", talent?.authID, "jobProposal"), where("jobId", "==", job?.jobID));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs[0]) {
            await updateDoc(doc(db, "talent", talent?.authID, "jobProposal", querySnapshot.docs[0]?.id), { 
                status: "closed", 
                endContractTime: serverTimestamp() 
            })
        }

        const q2 = query(collection(db, "client", clientContract?.clientID, "contracts"), where("jobID", "==", job?.jobID));
        const querySnapshot2 = await getDocs(q2);
        if (querySnapshot2.docs[0]) {
            await updateDoc(doc(db, "client", clientContract?.clientID, "contracts", querySnapshot2.docs[0].data().id), { 
                endContractTime: serverTimestamp() 
            })
        }
    }
    return (
        <div className=" pt-4 pb-5 ps-4 mt-3">
            <div className="row">
                <div className="col">
                    <h6>Budget</h6>
                    <h4>${clientContract?.jobBudget}</h4>
                </div>
                <div className="col">
                    <button className="btn bg-upwork me-2" onClick={pay}>Pay for talent</button>
                    <button className="btn btn-danger ms-2" onClick={end}>End contract</button>
                </div>
            </div>

        </div>
    )
}
