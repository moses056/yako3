/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import createDocument, { updateJob } from "../../../Network/Network";
import { auth } from "./../../../firebase";
import { useSelector } from "react-redux";

export default function PostJobGetStarted({ start, isStart, completeStep, completedSteps }) {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const client = useSelector(state => state.clientData)
  const [job, setJob] = useState({ jobDuration: "" });
  const [loading, setLoading] = useState(false);

  // Check if we already have a job session
  useEffect(() => {
    const docID = localStorage.getItem("docID");
    if (docID && !start) {
      console.log("Existing job session found, completing getStarted step");
      isStart();
      completeStep("getStarted");
    }
  }, [isStart, completeStep, start]);

  const createJob = () => {
    setLoading(true);
    isStart();
    console.log();
    createDocument("job",
      {
        jobID: "",
        authID: auth.currentUser.uid,
        postTime: "",
        status: "private",
        hired: 0,
        dueDate: "",
        clientCountry: client.location,
        clientAllReviews: client.review,
        clientSpentMoney: client.spentMoney,
        clientPaymentVerified: client.paymentVerified,
        talentJobReview: {},
        clientJobReview: {},
      })
      .then((res) => {
        console.log("Job created successfully:", res.id);
        // Ensure docID is stored in localStorage before navigating
        localStorage.setItem("docID", res.id);
        completeStep("getStarted");
        // Add a small delay to ensure localStorage is updated
        setTimeout(() => {
          const storedId = localStorage.getItem("docID");
          if (storedId) {
            // Don't navigate to title yet, let user choose duration first
            // navigate("/post-job/title");
          } else {
            console.error("Failed to store docID in localStorage");
            alert("Failed to create job. Please try again.");
          }
        }, 100);
      })
      .catch((error) => {
        console.error("Error creating job:", error);
        alert("Failed to create job. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const getData = ({ target }) => {
    job.jobDuration = target.value;
    setJob({ ...job, jobDuration: job.jobDuration });
  };

  const addData = () => {
    console.log(job);
    const id = localStorage.getItem("docID");
    console.log(id);
    if (id && job.jobDuration) {
      setLoading(true);
      updateJob({ jobID: id, jobDuration: job.jobDuration, jobDurationAr: job.jobDuration === "short term" ? "فترة قصيرة" : "فترة طويلة" }, id)
        .then(() => {
          // First complete getStarted if not already completed
          if (!completedSteps.getStarted) {
            completeStep("getStarted");
          }
          // Then complete title step
          completeStep("title");
          navigate("/post-job/title");
        })
        .catch((error) => {
          console.error("Error updating job:", error);
          alert("Failed to save job duration. Please try again.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <section className=" bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>{t("Getting started")}</h4>
      </div>
      {
        !start
          ?
          <div className="ps-4 my-3">
            <button 
              className="btn bg-upwork" 
              onClick={createJob}
              disabled={loading}
            >
              {loading ? t("Loading...") : t("Get Start")}
            </button>
          </div>
          :
          <>
            <div className="ps-4 my-3">
              <p className="fw-bold">{t("What would you like to do?")}</p>
              <div className=" w-75 my-4 ms-4 d-flex justify-content-between" onInput={getData}>
                <label className="border border-success rounded p-3 text-center">
                  <input type="radio" className="float-end" name="short-long-job" value="short term" />
                  <div><i className="far fa-clock"></i></div>
                  <h5 className="my-3">{t("Short-term or part-time work")}</h5>
                  <div>{t("Less than 30 hrs/week")}</div>
                  <div>{t("Less than 3 months")}</div>
                </label>
                <label className="border border-success rounded p-3 text-center">
                  <input type="radio" className="float-end" name="short-long-job" value="long term" />
                  <div><i className="far fa-calendar-plus"></i></div>
                  <h5 className="my-3">{t("Designated, longer term work")}</h5>
                  <div>{t("More than 30 hrs/week")}</div>
                  <div>{t("3+ months")}</div>
                </label>
              </div>
            </div>
            <div className="ps-4 my-3">
              <button className="btn">
                <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">{t("Cancel")}</Link>
              </button>
              <button 
                className={`btn ${job.jobDuration === "" || loading ? "disabled" : ""}`}
                onClick={addData}
                disabled={job.jobDuration === "" || loading}
              >
                <span className="btn bg-upwork px-5">
                  {loading ? t("Loading...") : t("Continue")}
                </span>
              </button>
            </div>
          </>
      }
    </section>
  )
}
