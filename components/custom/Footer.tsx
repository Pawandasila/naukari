import React from 'react';

const linkGroups = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#' },
      { label: 'Available Jobs', href: '#jobs' },
      { label: 'Services', href: '#services' },
      { label: 'Contact Us', href: '#contact' }
    ]
  },
  {
    title: 'Information',
    links: [
      { label: 'Disclaimer', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' }
    ]
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl py-14 px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {linkGroups.map(group => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white">{group.title}</h3>
              <ul role="list" className="mt-6 space-y-3">
                {group.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] opacity-40">chevron_right</span>{l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white">Contact</h3>
            <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <p><span className="font-semibold text-slate-800 dark:text-slate-200">Office:</span> Near Palam City, Haldwani</p>
              <p><span className="font-semibold text-slate-800 dark:text-slate-200">Phone:</span> +91 9084017662</p>
              <p><span className="font-semibold text-slate-800 dark:text-slate-200">Email:</span> info@devbhoomiglobalservices.com</p>
              <p><span className="font-semibold text-slate-800 dark:text-slate-200">Hours:</span> Mon-Sat (9:00 AM – 07:00 PM)</p>
              <div className="flex gap-3 pt-2">
                {['facebook','linkedin','public'].map(icon => (
                  <a key={icon} href="#" className="flex h-9 w-9 items-center justify-center rounded-md bg-white/70 dark:bg-white/10 ring-1 ring-slate-200 dark:ring-white/10 text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:ring-blue-500 transition-colors">
                    <span className="material-symbols-outlined">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-900/10 dark:border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">© 2025 K J R Devbhoomi Global Services. All Rights Reserved.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500">Built with passion in Uttarakhand.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;