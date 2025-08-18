/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Loader from "../../../Components/SharedComponents/Loader/Loader"
import { auth, db } from "../../../firebase"
import { collection, query, where, onSnapshot, doc, getDoc } from "firebase/firestore";
import OfferCard from "./OfferCard";

export default function Offers() {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        getOffers();
    }, [])

    const getOffers = async () => {
        const q = query(
            collection(db, "talent", auth.currentUser.uid, "jobProposal"),
            where("status", "==", "offer")
        );
        
        onSnapshot(q, async res => {
            const arr = [];
            if (res.docs.length > 0) {
                for (const doc of res.docs) {
                    const jobRef = doc(db, "job", doc.data().jobId);
                    const jobDoc = await getDoc(jobRef);
                    if (jobDoc.exists()) {
                        arr.push(jobDoc.data());
                    }
                }
                setJobs([...arr]);
            } else {
                setJobs([...arr]);
            }
        });
    }

    return (

        <div className=" bg-gray">
            <div className="container">
                <div className="row px-5">
                    <div className="col-12 mt-5">
                        <h3>Offers</h3>
                    </div>
                    <div className="col-12 bg-white mb-3 p-5 border border-gray rounded">
                        {
                            jobs.length > 0 ?
                                jobs[0]?.jobTitle ?
                                    <>
                                        {jobs.map((job, index) =>
                                            <OfferCard clientID={job.authID} jobID={job.jobID} getOffers={getOffers} key={index} />
                                        )}
                                    </>
                                    : <Loader />
                                : <p className="h3 py-3">No offers yet.</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
