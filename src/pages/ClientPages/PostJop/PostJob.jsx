import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Outlet } from 'react-router-dom';
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
  const [completedSteps, setCompletedSteps] = useState({
    getStarted: false,
    title: false,
    description: false,
    details: false,
    expertise: false,
    visibility: false,
    budget: false,
    review: false
  });
  
  const navigate = useNavigate();
  const location = useLocation();

  // Load completed steps from localStorage on mount
  useEffect(() => {
    const savedSteps = localStorage.getItem('completedSteps');
    if (savedSteps) {
      const parsedSteps = JSON.parse(savedSteps);
      // Check if we're starting a new job (all steps are completed)
      if (parsedSteps.review && parsedSteps.budget && parsedSteps.visibility && parsedSteps.expertise && parsedSteps.details && parsedSteps.description && parsedSteps.title && parsedSteps.getStarted) {
        // If all steps are completed, reset for a new job
        resetSteps();
      } else {
        setCompletedSteps(parsedSteps);
      }
    }
    
    const savedStart = localStorage.getItem('jobStarted');
    if (savedStart === 'true') {
      setStart(true);
    }
  }, []);

  // Save completed steps to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('completedSteps', JSON.stringify(completedSteps));
  }, [completedSteps]);

  // Save start state to localStorage
  useEffect(() => {
    localStorage.setItem('jobStarted', start.toString());
  }, [start]);

  const isStart = () => {
    setStart(true);
    setCompletedSteps(prev => ({ ...prev, getStarted: true }));
  };

  const completeStep = (stepName) => {
    setCompletedSteps(prev => ({ ...prev, [stepName]: true }));
  };

  const resetSteps = () => {
    setCompletedSteps({
      getStarted: false,
      title: false,
      description: false,
      details: false,
      expertise: false,
      visibility: false,
      budget: false,
      review: false
    });
    setStart(false);
    localStorage.removeItem('completedSteps');
    localStorage.removeItem('jobStarted');
    localStorage.removeItem('docID');
  };

  // Check if user can access current route
  const canAccessRoute = () => {
    const path = location.pathname;
    const steps = ['getStarted', 'title', 'description', 'details', 'expertise', 'visibility', 'budget', 'review'];
    const stepPaths = {
      '/post-job': 'getStarted',
      '/post-job/title': 'title',
      '/post-job/description': 'description',
      '/post-job/details': 'details',
      '/post-job/expertise': 'expertise',
      '/post-job/visibility': 'visibility',
      '/post-job/budget': 'budget',
      '/post-job/review': 'review'
    };

    const currentStep = stepPaths[path];
    if (!currentStep) return true; // Allow access to unknown paths

    const currentIndex = steps.indexOf(currentStep);
    
    // Always allow access to getStarted
    if (currentStep === 'getStarted') return true;
    
    // Allow access if previous step is completed
    if (currentIndex > 0 && completedSteps[steps[currentIndex - 1]]) return true;
    
    // Allow access if current step is completed
    if (completedSteps[currentStep]) return true;
    
    return false;
  };

  // Redirect if user cannot access current route
  useEffect(() => {
    if (!canAccessRoute()) {
      // Find the first accessible step
      const steps = ['getStarted', 'title', 'description', 'details', 'expertise', 'visibility', 'budget', 'review'];
      const stepPaths = {
        getStarted: '/post-job',
        title: '/post-job/title',
        description: '/post-job/description',
        details: '/post-job/details',
        expertise: '/post-job/expertise',
        visibility: '/post-job/visibility',
        budget: '/post-job/budget',
        review: '/post-job/review'
      };

      for (let i = steps.length - 1; i >= 0; i--) {
        if (completedSteps[steps[i]] || i === 0) {
          navigate(stepPaths[steps[i]]);
          break;
        }
      }
    }
  }, [location.pathname, completedSteps, navigate]);

  return (
    <section className="sec-bg-cn p-4">
      <div className="container">
        <div className="row">
          {/* Barre latérale avec état des boutons */}
          <div className="col-lg-3">
            <PostJobAside btns={completedSteps} />
          </div>

          {/* Zone principale */}
          <div className="col-lg-9">
            <Routes>
              <Route
                index
                element={
                  <PostJobGetStarted
                    start={start}
                    isStart={isStart}
                    completeStep={completeStep}
                    completedSteps={completedSteps}
                    resetSteps={resetSteps}
                  />
                }
              />
              <Route
                path="title"
                element={<PostJobTitle completeStep={completeStep} completedSteps={completedSteps} />}
              />
              <Route
                path="description"
                element={<PostJobDescription completeStep={completeStep} completedSteps={completedSteps} />}
              />
              <Route
                path="details"
                element={<PostJobDetails completeStep={completeStep} completedSteps={completedSteps} />}
              />
              <Route
                path="expertise"
                element={<PostJobExpertise completeStep={completeStep} completedSteps={completedSteps} />}
              />
              <Route
                path="visibility"
                element={<PostJobVisibility completeStep={completeStep} completedSteps={completedSteps} />}
              />
              <Route
                path="budget"
                element={<PostJobBudget completeStep={completeStep} completedSteps={completedSteps} />}
              />
              <Route 
                path="review" 
                element={<PostJobReview completeStep={completeStep} completedSteps={completedSteps} />} 
              />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}
