/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clientDataAction } from "./../../../Store/actions/clientData";
import { useTranslation } from "react-i18next";
import { collection, getDocs, query, where } from "firebase/firestore";
import { clientJobsAction } from "../../../Store/actions/clientJobAction";
import { auth, db } from "../../../firebase";
import "./HomeLayout.css";
import j1 from "../../../assets/svg/jobs1.svg";
import j2 from "../../../assets/svg/jobs2.svg";
import j3 from "../../../assets/svg/jobs3.svg";
import j4 from "../../../assets/svg/jobs4.svg";
import s1 from "../../../assets/Img/jobslide1.jpg";
import s2 from "../../../assets/Img/jobslide2.jpg";
import s3 from "../../../assets/Img/jobslide2.jpg";
import Loader from "../../SharedComponents/Loader/Loader";

export default function HomeLayout() {
  const { t } = useTranslation();
  const user = useSelector(state => state.clientData);
  const jobs = useSelector(state => state.clientJobs);
  const dispatch = useDispatch();
  const [proposals, setProposals] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(clientDataAction());
        dispatch(clientJobsAction("authID", "==", auth.currentUser.uid));
        
        // Vérifier si jobs[0] existe avant d'accéder à docID
        if (jobs[0]?.docID) {
          const q = query(collection(db, "job", jobs[0].docID, "proposals"));
          const querySnapshot = await getDocs(q);
          const length = querySnapshot.docs.length;
          setProposals(length);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [jobs, dispatch]);

  const job = jobs[0]?.data;

  return (
    <>
      {
        user.firstName
          ?
          <div className="container container-fluid-sm my-lg-4">
            <div className="row px-5 my-5">
              <div className="col-lg-8 col-xs-12">
                <div className="row my-3">
                  <div className="col-4">
                    <h4>{user.firstName + " " + user.lastName}</h4>
                  </div>
                </div>
                <div className="list-group-item py-lg-4">
                  <h4 className="d-inline-block">{t("My Postings")}</h4>
                  <Link to="/all-job-posts" className="float-sm-end mt-0">
                    {t("All Posts")}
                  </Link>
                </div>
                {jobs ? (
                  <div className="list-group-item">
                    <div>
                      <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-10 col-xs-9">
                          <h4
                            className="d-inline-block"
                            style={{ fontSize: "18px" }}
                          >
                            {job?.title}
                          </h4>
                          <div>
                            <span style={{ fontSize: "14px" }}>
                              {job?.type}
                            </span>
                            <span
                              className="mx-2"
                              style={{ fontSize: "14px" }}
                            >
                              {job?.salary}
                            </span>
                            <span style={{ fontSize: "14px" }}>
                              {job?.duration}
                            </span>
                          </div>
                          <div>
                            <span style={{ fontSize: "14px" }}>
                              {job?.experience}
                            </span>
                            <span
                              className="mx-2"
                              style={{ fontSize: "14px" }}
                            >
                              {job?.time}
                            </span>
                          </div>
                          <div>
                            <span style={{ fontSize: "14px" }}>
                              {job?.country}
                            </span>
                            <span
                              className="mx-2"
                              style={{ fontSize: "14px" }}
                            >
                              {job?.city}
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                          <div className="d-flex justify-content-end">
                            <div>
                              <Link
                                to={`/job-details/${jobs[0]?.docID}`}
                                className="btn btn-outline-success btn-sm"
                              >
                                {t("View Details")}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="d-flex justify-content-between">
                            <div>
                              <span style={{ fontSize: "14px" }}>
                                {t("Proposals")}: {proposals}
                              </span>
                              <span
                                className="mx-2"
                                style={{ fontSize: "14px" }}
                              >
                                {t("Messaging")}: 0
                              </span>
                              <span style={{ fontSize: "14px" }}>
                                {t("Hired")}: 0
                              </span>
                            </div>
                            <div>
                              <span style={{ fontSize: "14px" }}>
                                {job?.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="list-group-item">
                    <div className="text-center">
                      <h4>{t("You don't have any job posts")}</h4>
                      <Link to="/post-job" className="btn btn-success">
                        {t("Post a Job")}
                      </Link>
                    </div>
                  </div>
                )}
                <div className="list-group-item py-lg-4">
                  <h4 className="d-inline-block">{t("Find Talent")}</h4>
                  <Link to="/talent" className="float-sm-end mt-0">
                    {t("All Talent")}
                  </Link>
                </div>
                <div className="list-group-item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{t("Post a Job")}</h5>
                          <p className="card-text">
                            {t(
                              "Get proposals from qualified talent within 24 hours."
                            )}
                          </p>
                          <Link to="/post-job" className="btn btn-success">
                            {t("Post a Job")}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{t("Browse Talent")}</h5>
                          <p className="card-text">
                            {t(
                              "Explore our talent pool and find the perfect match for your project."
                            )}
                          </p>
                          <Link to="/talent" className="btn btn-success">
                            {t("Browse Talent")}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{t("Bring Your Talent")}</h5>
                          <p className="card-text">
                            {t(
                              "Already have someone in mind? Bring them to Upwork."
                            )}
                          </p>
                          <Link
                            to="/bring-your-own-talent"
                            className="btn btn-success"
                          >
                            {t("Bring Your Talent")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group-item py-lg-4">
                  <h4 className="d-inline-block">{t("My Projects")}</h4>
                  <Link to="/all-contracts" className="float-sm-end mt-0">
                    {t("All Projects")}
                  </Link>
                </div>
                <div className="list-group-item">
                  <div className="text-center">
                    <h4>{t("You don't have any active contracts")}</h4>
                    <Link to="/post-job" className="btn btn-success">
                      {t("Post a Job")}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xs-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{t("How to Hire")}</h5>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            {t("Post a Job")}
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {t(
                              "Post a job and get proposals from qualified talent within 24 hours."
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            {t("Browse Talent")}
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {t(
                              "Explore our talent pool and find the perfect match for your project."
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            {t("Bring Your Talent")}
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {t(
                              "Already have someone in mind? Bring them to Upwork."
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card my-3">
                  <div className="card-body">
                    <h5 className="card-title">{t("How to Hire")}</h5>
                    <div className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={s1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src={s2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src={s3} className="d-block w-100" alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{t("Talent Categories")}</h5>
                    <div className="row">
                      <div className="col-6">
                        <div className="d-flex">
                          <img src={j1} alt="" />
                          <div className="mx-2">
                            <h6>{t("Developer")}</h6>
                            <p style={{ fontSize: "12px" }}>
                              {t("Web, Mobile, Software")}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex">
                          <img src={j2} alt="" />
                          <div className="mx-2">
                            <h6>{t("Designer")}</h6>
                            <p style={{ fontSize: "12px" }}>
                              {t("Creative, Design")}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex">
                          <img src={j3} alt="" />
                          <div className="mx-2">
                            <h6>{t("Writer")}</h6>
                            <p style={{ fontSize: "12px" }}>
                              {t("Content, Copywriting")}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex">
                          <img src={j4} alt="" />
                          <div className="mx-2">
                            <h6>{t("Virtual Assistant")}</h6>
                            <p style={{ fontSize: "12px" }}>
                              {t("Admin, Support")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : <Loader />
      }
    </>
  );
}