import { useTranslation } from 'react-i18next'
import './PostJobAside.css'

export default function PostJobAside({ currentStep, completedSteps, onStepClick }) {
  const { t } = useTranslation();
  
  const steps = [
    { key: 'getStarted', path: '/post-job', icon: 'fas fa-play', label: t('Get Started') },
    { key: 'title', path: '/post-job/title', icon: 'fas fa-pencil-alt', label: t('Title') },
    { key: 'description', path: '/post-job/description', icon: 'fas fa-edit', label: t('Description') },
    { key: 'details', path: '/post-job/details', icon: 'fas fa-list-alt', label: t('Details') },
    { key: 'expertise', path: '/post-job/expertise', icon: 'fas fa-tools', label: t('Expertise') },
    { key: 'visibility', path: '/post-job/visibility', icon: 'fas fa-user-clock', label: t('Visibility') },
    { key: 'budget', path: '/post-job/budget', icon: 'fas fa-search-dollar', label: t('Budget') },
    { key: 'review', path: '/post-job/review', icon: 'fas fa-check', label: t('Review') }
  ];

  const isStepAccessible = (stepKey) => {
    const stepIndex = steps.findIndex(step => step.key === stepKey);
    if (stepIndex === 0) return true; // getStarted is always accessible
    
    const previousStep = steps[stepIndex - 1];
    return completedSteps[previousStep.key];
  };

  const isStepActive = (stepKey) => currentStep === stepKey;
  const isStepCompleted = (stepKey) => completedSteps[stepKey];

  return (
    <aside>
      <ul>
        {steps.map((step, index) => {
          const isAccessible = isStepAccessible(step.key);
          const isActive = isStepActive(step.key);
          const isCompleted = isStepCompleted(step.key);
          
          return (
            <li key={step.key} className="py-1 my-2">
              <button 
                className="btn w-100" 
                disabled={!isAccessible || isCompleted}
                onClick={() => isAccessible && !isCompleted && onStepClick(step.key)}
              >
                <div
                  className={`d-flex justify-content-between w-100 ${
                    !isCompleted && isActive ? "border-start border-4 border-success" : ""
                  }`}
                >
                  <span className={`text-dark ${!isAccessible ? 'opacity-50' : ''}`}>
                    <i className={`${step.icon} mx-4`}></i>
                    {step.label}
                  </span>
                  <i className={`fas fa-check-circle ${
                    isCompleted ? 'text-success' : 
                    isActive ? 'text-dark' : 
                    'text-muted opacity-50'
                  }`}></i>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}