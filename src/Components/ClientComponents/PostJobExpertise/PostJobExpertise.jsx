import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateJob } from "../../../Network/Network";
import "./PostJobExpertise.css";
import { useTranslation } from "react-i18next";

export default function PostJobExpertise({ onComplete, onBack, isCompleted }) {
  const [inputVal, setInputVal] = useState("");
  const [skillsList, setSkillsList] = useState([]);
  const [job, setJob] = useState({ jobExperienceLevel: "", skills: [] });
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
      navigate("/post-job/visibility");
      return;
    }
  }, [navigate, isCompleted]);

  const getData = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "jobExperienceLevel":
        setJob({ ...job, jobExperienceLevel: val });
        break;
      case "jobSkills":
        setInputVal(val);
        break;
      default:
        break;
    }
  };

  const addSkills = () => {
    if (inputVal.trim()) {
      skillsList.push(inputVal.trim());
      setSkillsList([...skillsList]);
      setJob({ ...job, skills: skillsList });
      setInputVal("");
      console.log(skillsList);
    }
  };

  const addData = (e) => {
    e.preventDefault(); // Empêche la navigation immédiate
    const id = localStorage.getItem("docID");
    console.log(id);
    
    if (!id) {
      alert("Job session expired. Please start over.");
      navigate("/post-job");
      return;
    }
    
    if (!job.jobExperienceLevel) {
      alert("Please select an experience level before proceeding.");
      return;
    }
    
    setLoading(true);
    updateJob({ 
      skills: job.skills, 
      jobExperienceLevel: job.jobExperienceLevel, 
      jobExperienceLevelAr: job.jobExperienceLevel === "expert" ? "خبير" : job.jobExperienceLevel === "intermediate" ? "متوسط" : "مبتدئ" 
    }, id)
      .then(() => {
        onComplete();
      })
      .catch((error) => {
        console.error("Error updating job:", error);
        alert("Failed to save job expertise. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <section className="bg-white border rounded mt-3 pt-4">
        <div className="border-bottom ps-4">
          <h4>{t("Expertise")}</h4>
          <p>{t("Step 4 of 7")}</p>
        </div>
        <div className="px-4 mt-3">
          <p className="fw-bold mt-2">
            {t("What level of experience should your freelancer have?")}
            <span className="text-danger"> *</span>
          </p>
          <div
            className="my-4 d-flex justify-content-between"
            onInput={getData}
          >
            <label className="border border-success rounded p-3 text-center">
              <input
                type="radio"
                className="float-end"
                name="jobExperienceLevel"
                value="entry level"
              />
              <h6 className="my-3">{t("Entry Level")}</h6>
              <div>{t("Looking for someone relatively new to this field")}</div>
            </label>
            <label className="border border-success rounded p-3 text-center mx-3">
              <input
                type="radio"
                className="float-end"
                name="jobExperienceLevel"
                value="intermediate"
              />
              <h6 className="my-3">{t("Intermediate")}</h6>
              <div>{t("Looking for substantial experience in this field")}</div>
            </label>
            <label className="border border-success rounded p-3 text-center">
              <input
                type="radio"
                className="float-end"
                name="jobExperienceLevel"
                value="expert"
              />
              <h6 className="my-3">{t("Expert")}</h6>
              <div>
                {t(
                  "Looking for comprehensive and deep expertise in this field"
                )}
              </div>
            </label>
          </div>
          <p className="fw-bold">{t("Enter the skills of your job post?")}</p>
          <div className="my-4 d-flex justify-content-between">
            <input
              className="form-control w-75 shadow-none"
              type="text"
              name="jobSkills"
              value={inputVal}
              onChange={getData}
            />
            <button
              className="btn bg-upwork px-5"
              disabled={!inputVal.trim()}
              onClick={addSkills}
            >
              Add
            </button>
            <div className="my-4 d-flex justify-content-between"></div>
          </div>
          {skillsList.map((item, index) => (
            <div className="chip mb-3 ms" key={index}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border rounded mt-3">
        <div className="ps-4 my-3">
          <button className="btn border text-success me-4 px-5" onClick={onBack}>
            {t("Back")}
          </button>
          <button
            className={`btn ${job.jobExperienceLevel === "" || loading ? "disabled" : ""}`}
            onClick={addData}
            disabled={job.jobExperienceLevel === "" || loading}
          >
            <span className="btn bg-upwork px-5">
              {loading ? t("Loading...") : t("Next")}
            </span>
          </button>
        </div>
      </section>
    </>
  );
}