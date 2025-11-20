import { ArrowRight, HeartIcon } from 'lucide-react';
import React from 'react';

interface JobCardProps {
  company: string;
  logo: string;
  title: string;
  location: string;
  type: string;
  isHot: boolean;
  isRemote: boolean;
  experience: string;
  salary: string;
  skills: string[];
  postedDays: number;
}

const JobCard: React.FC<JobCardProps> = ({ 
  company,
  logo,
  title,
  location,
  type,
  isHot,
  isRemote,
  experience,
  salary,
  skills,
  postedDays
}) => {
  return (
    <article className="group relative rounded-xl bg-white dark:bg-slate-900/40 ring-1 ring-slate-200 dark:ring-white/10 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Header with Logo and Favorite */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-cyan-500 text-white text-2xl shadow-md shrink-0">
            {logo}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
              {title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 truncate">{company}</p>
          </div>
        </div>
        <button className="text-slate-400 hover:text-red-500 transition-colors shrink-0">
          <span className="material-symbols-outlined text-xl"><HeartIcon /></span>
        </button>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {isHot && (
          <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-semibold text-red-600 dark:text-red-400 ring-1 ring-red-500/20">
            🔥 Hot
          </span>
        )}
        {isRemote && (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-600 dark:text-green-400 ring-1 ring-green-500/20">
            Remote
          </span>
        )}
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20">
          {type}
        </span>
      </div>

      {/* Metadata Row */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
        <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base text-slate-400">location_on</span>
          {location}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base text-slate-400">work</span>
          {experience}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base text-slate-400">payments</span>
          {salary}
        </span>
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.slice(0, 4).map((skill) => (
          <span 
            key={skill}
            className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
          >
            {skill}
          </span>
        ))}
        {skills.length > 4 && (
          <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            +{skills.length - 4}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
        <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500">
          <span className="material-symbols-outlined text-sm">schedule</span>
          Posted {postedDays} days ago
        </span>
        <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
          Apply Now
        </button>
      </div>
      <div className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-blue-500/40 transition-colors pointer-events-none"></div>
    </article>
  );
};

const RecentJobs: React.FC = () => {
  const jobs = [
    {
      company: "Axis Bank",
      logo: "🏦",
      title: "Assistant Manager",
      location: "Haldwani",
      type: "Full-time",
      isHot: true,
      isRemote: false,
      experience: "0-2 years",
      salary: "₹3L - ₹5L",
      skills: ["Banking Operations", "Customer Service", "Sales", "Finance"],
      postedDays: 2
    },
    {
      company: "Tech Solutions BPO",
      logo: "📞",
      title: "Telecaller",
      location: "Haldwani",
      type: "Full-time",
      isHot: false,
      isRemote: true,
      experience: "0-1 years",
      salary: "₹96k - ₹1.8L",
      skills: ["Communication", "Customer Support", "Sales", "CRM"],
      postedDays: 5
    },
    {
      company: "FinCorp Services",
      logo: "💰",
      title: "Senior Accountant",
      location: "Haldwani",
      type: "Full-time",
      isHot: true,
      isRemote: false,
      experience: "3-5 years",
      salary: "₹2.4L - ₹3L",
      skills: ["Tally", "GST", "Accounting", "Excel", "Tax Filing"],
      postedDays: 7
    }
  ];

  return (
    <section className="py-20 sm:py-24 relative" id="jobs">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(30,64,175,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="inline-flex items-center gap-2 rounded-md bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-600 ring-1 ring-blue-500/20 mb-4">Recent Job Openings</h2>
          <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Find Your Next Role</p>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Explore our latest opportunities across various sectors.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-colors">
            See all jobs
            <span className="material-symbols-outlined text-base"><ArrowRight /></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentJobs;