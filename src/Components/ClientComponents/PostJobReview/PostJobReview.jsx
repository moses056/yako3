/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverTimestamp, doc, onSnapshot, deleteDoc } from 'firebase/firestore';
import { db } from "../../../firebase";
import { updateJob } from "../../../Network/Network";
import "./PostJobReview.css";
import { useTranslation } from "react-i18next";
import Loader from "../../SharedComponents/Loader/Loader";

export default function PostJobReview({ onComplete, onBack, isCompleted }) {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);

  const id = localStorage.getItem("docID");

  useEffect(() => {
    if (!id) {
      navigate("/post-job");
      return;
    }
    
    // If already completed, redirect to home
    if (isCompleted) {
      navigate("/");
      return;
    }
    
    const unsubscribe = onSnapshot(doc(db, "job", id), (doc) => {
      if (doc.exists()) {
        setJob({ ...doc.data() });
        console.log(job);
      } else {
        console.log("No such document!");
        navigate("/post-job");
      }
    });
    return unsubscribe;
  }, [id, navigate, isCompleted]);

  const publishJob = () => {
    if (id) {
      updateJob(
        { postTime: serverTimestamp(), status: "public" },
        id
      ).then(() => {
        // Complete the review step
        onComplete();
      }).catch((error) => {
        console.error("Error publishing job:", error);
        alert("Failed to publish job. Please try again.");
      });
    } else {
      alert("Job session expired. Please start over.");
      navigate("/post-job");
    }
  };

  const deletePost = () => {
    if (id) {
      deleteDoc(doc(db, "job", id))
        .then(() => {
          localStorage.removeItem("docID");
          navigate("/home");
        })
        .catch((error) => {
          console.error("Error deleting job:", error);
          alert("Failed to delete job. Please try again.");
        });
    }
  }

  return (
    <>
      {
        job !== null
          ? <>
            <section className="bg-white border rounded mt-3">
              <div className="ps-4 d-flex border-bottom justify-content-between align-items-center py-4">
                <h4>{t("Review and post")}</h4>
                <button 
                  className="btn bg-upwork me-4 px-5" 
                  onClick={publishJob}
                >
                  {t("Post Job Now")}
                </button>
              </div>
              <div className="px-4 mt-4">
                <h5>{t("Title")}</h5>
                <div>
                  <div className="my-4">
                    <p>{job.jobTitle}</p>
                  </div>
                  <div>
                    <h6 className="text-muted">{t("Job Category")}</h6>
                    <p>{job.jobCategory}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border rounded mt-4">
              <div className="px-4 mt-4">
                <h5>{t("Description")}</h5>
                <div>
                  <div className="my-4">
                    <p>{job.jobDescription}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border rounded mt-4">
              <div className="px-4 mt-4">
                <h5>{t("Details")}</h5>
                <div>
                  <div className="my-4">
                    <h6 className="text-muted">{"Type of Project"}</h6>
                    <p>{job.jobType}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border rounded mt-4">
              <div className="px-4 mt-4">
                <h5>{t("Expertise")}</h5>
                <div>
                  <div className="my-4">
                    <h6 className="text-muted">{t("Experience Level")}</h6>
                    <p>{job.jobExperienceLevel}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border rounded mt-4">
              <div className="px-4 mt-4">
                <h5>{t("Visibility")}</h5>
                <div>
                  <div className="my-4">
                    <h6 className="text-muted">{t("Job Posting Visibility")}</h6>
                    <p>{job.jobVisibility}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border rounded mt-4">
              <div className="px-4 mt-4">
                <h5>{t("Budget")}</h5>
                <div className="d-flex">
                  <div className="my-4 w-50">
                    <h6 className="text-muted">{t("JobHourly or Fixed-Price")}</h6>
                    <p>{job.jobPaymentType}</p>
                  </div>
                  <div className="my-4">
                    <h6 className="text-muted">{"Budget"}</h6>
                    <p>{job.jobBudget}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border rounded mt-4">
              <div className="ps-4 my-3 py-2">
                <button 
                  className="btn bg-upwork me-4 px-5" 
                  onClick={publishJob}
                >
                  {t("Post Job Now")}
                </button>
                <button 
                  className="btn border text-success me-4 px-5" 
                  onClick={onBack}
                >
                  {t("Back")}
                </button>
                <button 
                  className="btn border-danger text-danger px-5" 
                  onClick={deletePost}
                >
                  {t("Delete & Exit")}
                </button>
              </div>
            </section>
          </>
          : <Loader />
      }
    </>
  )
}