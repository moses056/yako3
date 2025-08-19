import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateJob } from "../../../Network/Network";
import "./PostJobDetails.css";
import { useTranslation } from "react-i18next";

export default function PostJobDetails({ onComplete, onBack, isCompleted }) {
  const [job, setJob] = useState({ jobType: "" });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Check if we have a valid job session
  useEffect(() => {
    const docID = localStorage.getItem("docID");
    
    if (!docID) {
      console.log("No job session found, redirecting to get started");
      navigate("/post-job");
      return;
    }
    
    // If already completed, redirect to next step
    if (isCompleted) {
      navigate("/post-job/expertise");
      return;
    }
  }, [navigate, isCompleted]);

  const getData = (e) => {
    setJob({ jobType: e.target.value });
  };

  const addData = () => {
    const id = localStorage.getItem("docID");
    
    if (!id) {
      alert("Job session expired. Please start over.");
      navigate("/post-job");
      return;
    }
    
    if (!job.jobType) {
      alert("Please select a project type before proceeding.");
      return;
    }
    
    setLoading(true);
    updateJob({
      jobType: job.jobType, 
      jobTypeAr: job.jobType === "one time project" ? "مشروع مرة واحدة" : 
                  job.jobType === "ongoing project" ? "مشروع مستمر" : "مشروع معقد"
    }, id)
      .then(() => {
        onComplete();
      })
      .catch((error) => {
        console.error("Error updating job:", error);
        alert("Failed to save job details. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <section className="bg-white border rounded mt-3 pt-4">
        <div className="border-bottom ps-4">
          <h4>{t("Details")}</h4>
          <p>{t("Step 3 of 7")}</p>
        </div>
        <div className="px-4 mt-3">
          <p className="fw-bold mt-2">
            {t("What type of project do you have?")}
          </p>
          <div className="my-4 d-flex justify-content-between" onInput={getData}>
            <label className="border border-success rounded p-3 text-center">
              <input type="radio" className="float-end" name="jobType" value="one time project" />
              <div><i className="fas fa-briefcase"></i></div>
              <h6 className="my-3">{t("One-time project")}</h6>
              <div>{t("Find the right skills for a short-term need.")}</div>
            </label>
            <label className="border border-success rounded p-3 text-center mx-3">
              <input type="radio" className="float-end" name="jobType" value="ongoing project" />
              <div><i className="fas fa-list-alt"></i></div>
              <h6 className="my-3">{t("Ongoing project")}</h6>
              {t("Find a skilled resource for an extended engagement.")}
            </label>
            <label className="border border-success rounded p-3 text-center">
              <input type="radio" className="float-end" name="jobType" value="complex project" />
              <div><i className="fas fa-th-large"></i></div>
              <h6 className="my-3">{t("Complex project")}</h6>
              <div>
                {t("Find specialized experts and agencies for large projects.")}
              </div>
            </label>
          </div>
        </div>
      </section>

      <section className="bg-white border rounded mt-3">
        <div className="ps-4 my-3">
          <button className="btn border text-success me-4 px-5" onClick={onBack}>
            {t("Back")}
          </button>
          <button 
            className={`btn ${job.jobType === "" || loading ? "disabled" : ""}`}
            onClick={addData}
            disabled={job.jobType === "" || loading}
          >
            <span className="btn bg-upwork px-5">
              {loading ? t("Loading...") : t("Next")}
            </span>
          </button>
        </div>
      </section>
    </>
  )
}