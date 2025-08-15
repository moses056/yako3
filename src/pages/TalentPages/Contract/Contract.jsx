/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import ContractEarnings from '../../../Components/TalentComponents/ContractEarnings/ContractEarnings';
import ContractFeedback from '../../../Components/TalentComponents/ContractFeedback/ContractFeedback';
import img from "../../../assets/Img/icon-user.svg";
import "../../ClientPages/Talent/Talent.css";
import { db } from "../../../firebase";
import { useSelector } from "react-redux";
import { serverTimestamp, collection, doc, where, query, getDocs, updateDoc, addDoc } from 'firebase/firestore';
import StarsRating from "../../../Components/SharedComponents/StarsRating/StarsRating";

export default function Contract({ location }) {

    const user = useSelector(state => state.talentData);
    const [data, setData] = useState({ job: {}, client: {}, clientContract: {} })

    useEffect(() => {
        const { job, client, clientContract } = location?.state;
        setData({ job, client, clientContract });
    }, [])

    const { job, client, clientContract } = data;

    const askPayment = async () => {
        await addDoc(collection(db, "client", client?.authID, "notification"), {
            time: serverTimestamp(),
            message: `the job finished "${job?.jobTitle}" and he asked for payment.`,
            type: "Payment Request",
            userID: user.authID,
            userName: user.firstName,
            userPhoto: user.profilePhoto,
            isShow: false,
            route: "/all-contracts"
        })
    }

    const endContract = async () => {
        await updateDoc(doc(db, "job", job?.jobID), { status: "closed" })

        const q = query(collection(db, "talent", user?.authID, "jobProposal"), where("jobId", "==", job?.jobID));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs[0]) {
            await updateDoc(doc(db, "talent", user?.authID, "jobProposal", querySnapshot.docs[0]?.id), { 
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
        <div className="container my-5 px-5">
            <div className="row bg-white border border-rounded border-1 bg-gray mx-3">
                <div className="row p-5">
                    <div className="col-9">
                        <h3 className="">{job?.jobTitle}</h3>
                        {
                            job?.clientJobReview?.review &&
                            <div>
                                <small>
                                    <i className="fas fa-check-circle text-success"> </i>
                                    {"  "}Completed Feb 21{"  "}
                                    <StarsRating clientReview={job?.clientJobReview?.review} index={1} />
                                    <StarsRating clientReview={job?.clientJobReview?.review} index={2} />
                                    <StarsRating clientReview={job?.clientJobReview?.review} index={3} />
                                    <StarsRating clientReview={job?.clientJobReview?.review} index={4} />
                                    <StarsRating clientReview={job?.clientJobReview?.review} index={5} />
                                </small>
                            </div>
                        }
                    </div>
                    <div className="col-3">
                        <img style={{ height: "40px", width: "40px" }} className="circle bg-white" src={img} alt="" />
                        <span className="h4 ms-3">
                            {client?.firstName + " " + client?.lastName}
                        </span>
                        <p className="text-muted text-center">{client?.location}</p>
                    </div>
                </div>

                <div className="row px-5">
                    <ul className="nav nav-tabs ">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                activeClassName="active"
                                exact
                                to="/contract"
                            >
                                Earnings
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink
                                className="nav-link"
                                activeClassName="active"
                                exact
                                to="/contract/feedback"
                            >
                                Feedback
                            </NavLink>
                        </li>
                        {
                            job?.status !== "closed" &&
                            <li className="nav-item ms-3">
                                <button
                                    type="button"
                                    className="btn btn-light dropdown-toggle border border-1 rounded-circle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-ellipsis-h " />
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item" onClick={askPayment}>
                                            Ask for pyament
                                        </button>
                                        <button className="dropdown-item" onClick={endContract}>
                                            End contract
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        }
                    </ul>
                    <Routes>
                        <Route path="/contract" element={<ContractEarnings job={job} client={client} clientContract={clientContract} />} />
                        <Route path="/contract/feedback" element={<ContractFeedback job={job} />} />
                    </Routes>
                </div>

            </div>

        </div>

    )
}
