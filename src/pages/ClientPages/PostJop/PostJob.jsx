import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
  const [currentStep, setCurrentStep] = useState('getStarted');
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

  // Load state from localStorage on mount
  useEffect(() => {
    const savedSteps = localStorage.getItem('completedSteps');
    const savedCurrentStep = localStorage.getItem('currentStep');
    
    if (savedSteps) {
      setCompletedSteps(JSON.parse(savedSteps));
    }
    
    if (savedCurrentStep) {
      setCurrentStep(savedCurrentStep);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('completedSteps', JSON.stringify(completedSteps));
    localStorage.setItem('currentStep', currentStep);
  }, [completedSteps, currentStep]);

  // Update current step based on URL
  useEffect(() => {
    const pathToStep = {
      '/post-job': 'getStarted',
      '/post-job/title': 'title',
      '/post-job/description': 'description',
      '/post-job/details': 'details',
      '/post-job/expertise': 'expertise',
      '/post-job/visibility': 'visibility',
      '/post-job/budget': 'budget',
      '/post-job/review': 'review'
    };
    
    const step = pathToStep[location.pathname];
    if (step && step !== currentStep) {
      setCurrentStep(step);
    }
  }, [location.pathname]);

  const completeStep = (stepName) => {
    setCompletedSteps(prev => ({ ...prev, [stepName]: true }));
  };

  const resetAll = () => {
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
    setCurrentStep('getStarted');
    localStorage.removeItem('completedSteps');
    localStorage.removeItem('currentStep');
    localStorage.removeItem('docID');
    navigate('/post-job');
  };

  // Navigation functions
  const goToNextStep = () => {
    const steps = ['getStarted', 'title', 'description', 'details', 'expertise', 'visibility', 'budget', 'review'];
    const currentIndex = steps.indexOf(currentStep);
    
    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1];
      setCurrentStep(nextStep);
      navigate(`/post-job/${nextStep === 'getStarted' ? '' : nextStep}`);
    }
  };

  const goToPreviousStep = () => {
    const steps = ['getStarted', 'title', 'description', 'details', 'expertise', 'visibility', 'budget', 'review'];
    const currentIndex = steps.indexOf(currentStep);
    
    if (currentIndex > 0) {
      const previousStep = steps[currentIndex - 1];
      setCurrentStep(previousStep);
      navigate(`/post-job/${previousStep === 'getStarted' ? '' : previousStep}`);
    }
  };

  // Check if step is accessible
  const isStepAccessible = (stepName) => {
    const steps = ['getStarted', 'title', 'description', 'details', 'expertise', 'visibility', 'budget', 'review'];
    const stepIndex = steps.indexOf(stepName);
    
    if (stepIndex === 0) return true; // getStarted is always accessible
    
    const previousStep = steps[stepIndex - 1];
    return completedSteps[previousStep];
  };

  // Auto-redirect if accessing inaccessible step
  useEffect(() => {
    if (!isStepAccessible(currentStep) && currentStep !== 'getStarted') {
      // Find the first accessible step
      const steps = ['getStarted', 'title', 'description', 'details', 'expertise', 'visibility', 'budget', 'review'];
      for (let step of steps) {
        if (isStepAccessible(step)) {
          setCurrentStep(step);
          navigate(`/post-job/${step === 'getStarted' ? '' : step}`);
          break;
        }
      }
    }
  }, [currentStep, completedSteps, navigate]);

  // Auto-reset when job is completed
  useEffect(() => {
    if (completedSteps.review) {
      const timer = setTimeout(() => {
        resetAll();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [completedSteps.review]);

  return (
    <section className="sec-bg-cn p-4">
      <div className="container">
        <div className="row">
          {/* Barre latérale avec état des boutons */}
          <div className="col-lg-3">
            <PostJobAside 
              currentStep={currentStep}
              completedSteps={completedSteps}
              onStepClick={(step) => {
                if (isStepAccessible(step) && !completedSteps[step]) {
                  setCurrentStep(step);
                  navigate(`/post-job/${step === 'getStarted' ? '' : step}`);
                }
              }}
            />
          </div>

          {/* Zone principale */}
          <div className="col-lg-9">
            <Routes>
              <Route
                index
                element={
                  <PostJobGetStarted
                    onComplete={() => {
                      completeStep('getStarted');
                      goToNextStep();
                    }}
                    isCompleted={completedSteps.getStarted}
                    resetAll={resetAll}
                  />
                }
              />
              <Route
                path="title"
                element={
                  <PostJobTitle
                    onComplete={() => {
                      completeStep('title');
                      goToNextStep();
                    }}
                    onBack={goToPreviousStep}
                    isCompleted={completedSteps.title}
                  />
                }
              />
              <Route
                path="description"
                element={
                  <PostJobDescription
                    onComplete={() => {
                      completeStep('description');
                      goToNextStep();
                    }}
                    onBack={goToPreviousStep}
                    isCompleted={completedSteps.description}
                  />
                }
              />
              <Route
                path="details"
                element={
                  <PostJobDetails
                    onComplete={() => {
                      completeStep('details');
                      goToNextStep();
                    }}
                    onBack={goToPreviousStep}
                    isCompleted={completedSteps.details}
                  />
                }
              />
              <Route
                path="expertise"
                element={
                  <PostJobExpertise
                    onComplete={() => {
                      completeStep('expertise');
                      goToNextStep();
                    }}
                    onBack={goToPreviousStep}
                    isCompleted={completedSteps.expertise}
                  />
                }
              />
              <Route
                path="visibility"
                element={
                  <PostJobVisibility
                    onComplete={() => {
                      completeStep('visibility');
                      goToNextStep();
                    }}
                    onBack={goToPreviousStep}
                    isCompleted={completedSteps.visibility}
                  />
                }
              />
              <Route
                path="budget"
                element={
                  <PostJobBudget
                    onComplete={() => {
                      completeStep('budget');
                      goToNextStep();
                    }}
                    onBack={goToPreviousStep}
                    isCompleted={completedSteps.budget}
                  />
                }
              />
              <Route 
                path="review" 
                element={
                  <PostJobReview
                    onComplete={() => {
                      completeStep('review');
                    }}
                    onBack={goToPreviousStep}
                    isCompleted={completedSteps.review}
                  />
                } 
              />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}