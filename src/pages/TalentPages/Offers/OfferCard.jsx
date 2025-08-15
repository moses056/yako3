/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../../firebase'
import { serverTimestamp, collection, doc, where, query, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export default function OfferCard({ clientID, jobID, getOffers }) {

    const [offer, setOffer] = useState()
    const [job, setJob] = useState()

    useEffect(async () => {
        const q = query(collection(db, "client", clientID, "contracts"), where("jobID", "==", jobID));
        const querySnapshot = await getDocs(q);
        setOffer({ data: querySnapshot.docs[0]?.data(), contractId: querySnapshot.docs[0]?.id })
        const docRef = doc(db, "job", jobID);
        const docSnap = await getDoc(docRef);
        setJob(docSnap.data())
    }, [])

    const accept = async (contractId) => {
        console.log(jobID);
        console.log(contractId);

        const jobRef = doc(db, "job", jobID);
        await updateDoc(jobRef, { status: "hired" })

        const q = query(collection(db, "talent", auth.currentUser.uid, "jobProposal"), where("jobId", "==", jobID));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs[0].exists) {
            const proposalRef = doc(db, "talent", auth.currentUser.uid, "jobProposal", querySnapshot.docs[0]?.id);
            await updateDoc(proposalRef, {
                status: "contract",
                startContractTime: serverTimestamp()
            })
            getOffers();
        }

        const contractRef = doc(db, "client", clientID, "contracts", contractId);
        await updateDoc(contractRef, {
            talentResponse: "accept",
            startContractTime: serverTimestamp()
        })
    }

    const decline = async (contractId) => {
        console.log(jobID);
        console.log(contractId);

        const q = query(collection(db, "talent", auth.currentUser.uid, "jobProposal"), where("jobId", "==", jobID));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs[0].exists) {
            const proposalRef = doc(db, "talent", auth.currentUser.uid, "jobProposal", querySnapshot.docs[0]?.id);
            await updateDoc(proposalRef, { status: "proposal" })
            getOffers();
        }

        const contractRef = doc(db, "client", clientID, "contracts", contractId);
        await deleteDoc(contractRef)
    }

    return (

        <div className="col-11 mx-auto bg-gray border border-gray rounded p-5 mb-4 text-center">
            {
                (offer && job) &&
                <>
                    <p><strong>Contract Title: </strong>{job?.jobTitle}</p>
                    <p><strong>Contract Budget: </strong>${offer?.data?.jobBudget}</p>
                    <p><strong>Contract Payment Type: </strong>{offer?.data?.jobPaymentType}</p>
                    <p><strong>Contract Due Date: </strong>{offer?.data?.dueDate}</p>
                    <button
                        className="btn bg-upwork me-1"
                        onClick={() => accept(offer?.contractId)}
                    >
                        Accept
                    </button>
                    <button
                        className="btn btn-danger ms-1"
                        onClick={() => decline(offer?.contractId)}
                    >
                        Decline
                    </button>
                </>
            }
        </div>
    )
}
