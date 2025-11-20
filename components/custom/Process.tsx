import React from 'react';

interface Step { id: number; title: string; desc: string; }
interface Stat { value: string; label: string; }

const steps: Step[] = [
  { id: 1, title: 'Needs Analysis & Profile Submission', desc: 'Our platform facilitates seamless integration of your organizational needs and candidate profiles for precise matching.' },
  { id: 2, title: 'Strategic Talent Engagement', desc: 'Our dedicated consultants initiate direct engagement to align candidate capabilities with your precise requirements.' },
  { id: 3, title: 'Performance Optimization & Readiness', desc: 'Candidates undergo tailored development, including advanced interview simulations and skill-specific workshops.' },
  { id: 4, title: 'Successful Integration & ROI Realization', desc: 'We manage the full placement cycle, ensuring seamless onboarding and accelerating your return on investment.' }
];

const stats: Stat[] = [
  { value: '98%', label: 'Client Satisfaction Score' },
  { value: '5000+', label: 'Professionals Placed' },
  { value: '10+', label: 'Years of Industry Leadership' }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="pt-20 pb-0 sm:pt-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-1.5 text-sm font-semibold text-blue-500 ring-1 ring-blue-500/20 uppercase tracking-wide mb-4">
            <span className="material-symbols-outlined text-base">timeline</span> Our Process
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Streamlined Talent Acquisition Protocol
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
            A systematic, data-informed approach to securing optimal talent and achieving strategic workforce goals.
          </p>
        </div>
        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {steps.map(step => (
            <li key={step.id} className="text-center">
              <div className="flex items-center justify-center mx-auto h-12 w-12 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-sm shadow-blue-600/30">
                {step.id}
              </div>
              <h3 className="mt-6 text-xs sm:text-[13px] font-semibold leading-tight text-slate-800 dark:text-slate-100 tracking-wide">
                {step.title}
              </h3>
              <p className="mt-3 text-[11px] sm:text-xs leading-5 text-slate-600 dark:text-slate-400 max-w-60 mx-auto">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
      {/* Attached stats band */}
      <div className="mt-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-3 text-center" role="list">
            {stats.map(s => (
              <li key={s.label} className="space-y-2">
                <p className="text-xl sm:text-2xl font-bold tracking-tight">{s.value}</p>
                <p className="text-[11px] sm:text-xs font-medium opacity-90 uppercase tracking-wide">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;