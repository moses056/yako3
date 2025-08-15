import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostJobAside from '../../../Components/ClientComponents/PostJobAside/PostJobAside';
import PostJobTitle from '../../../Components/ClientComponents/PostJobTitle/PostJobTitle';
import PostJobDescription from '../../../Components/ClientComponents/PostJobDescription/PostJobDescription';
import PostJobDetails from '../../../Components/ClientComponents/PostJobDetails/PostJobDetails';
import PostJobExpertise from '../../../Components/ClientComponents/PostJobExpertise/PostJobExpertise';
import PostJobVisibility from '../../../Components/ClientComponents/PostJobVisibility/PostJobVisibility';
import PostJobBudget from '../../../Components/ClientComponents/PostJobBudget/PostJobBudget';
import PostJobReview from '../../../Components/ClientComponents/PostJobReview/PostJobReview';
import PostJobGetStarted from '../../../Components/ClientComponents/PostJobGetStarted/PostJobGetStarted';

export default function PostJob() {
  const [start, setStart] = useState(false);
  const [btns, setBtns] = useState({
    title: true,
    description: true,
    details: true,
    expertise: true,
    visibility: true,
    budget: true,
    review: true
  });

  const isStart = () => {
    setStart(true); // ✅ plus de mutation directe
  };

  // Fonction pour activer un bouton spécifique
  const enableBtn = (key) => {
    setBtns((prev) => ({
      ...prev,
      [key]: false // par exemple false = bouton activé
    }));
  };

  return (
    <section className="sec-bg-cn p-4">
      <div className="container">
        <div className="row">
          {/* Barre latérale avec état des boutons */}
          <div className="col-lg-3">
            <PostJobAside btns={btns} />
          </div>

          {/* Zone principale */}
          <div className="col-lg-9">
            <Routes>
              <Route
                path="/post-job"
                element={
                  <PostJobGetStarted
                    start={start}
                    isStart={isStart}
                    setBtns={setBtns}
                    btns={btns}
                  />
                }
              />
              <Route
                path="/post-job/title"
                element={<PostJobTitle setBtns={setBtns} btns={btns} enableBtn={enableBtn} />}
              />
              <Route
                path="/post-job/description"
                element={<PostJobDescription setBtns={setBtns} btns={btns} enableBtn={enableBtn} />}
              />
              <Route
                path="/post-job/details"
                element={<PostJobDetails setBtns={setBtns} btns={btns} enableBtn={enableBtn} />}
              />
              <Route
                path="/post-job/expertise"
                element={<PostJobExpertise setBtns={setBtns} btns={btns} enableBtn={enableBtn} />}
              />
              <Route
                path="/post-job/visibility"
                element={<PostJobVisibility setBtns={setBtns} btns={btns} enableBtn={enableBtn} />}
              />
              <Route
                path="/post-job/budget"
                element={<PostJobBudget setBtns={setBtns} btns={btns} enableBtn={enableBtn} />}
              />
              <Route path="/post-job/review" element={<PostJobReview />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}
