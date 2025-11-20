'use client'

import React, { useState } from 'react';

interface FormState {
  firstName: string; lastName: string; email: string; message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle'|'submitting'|'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    await new Promise(r => setTimeout(r, 900));
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative isolate py-20 sm:py-24 bg-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-x-12 px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-lg">
          <span className="inline-flex items-center gap-2 rounded-md bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-400 ring-1 ring-blue-500/20">Contact</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">We'd love to hear from you. Ask a question or tell us more about what you need.</p>
          <div className="mt-8 space-y-6 text-sm leading-6 text-slate-300">
            <div className="flex gap-x-3 items-start"><span className="material-symbols-outlined text-blue-400 shrink-0">location_on</span><span>Near Palam City, Dewalchior Chauraha, Rampur Road, Haldwani Nainital, Uttarakhand 263139</span></div>
            <div className="flex gap-x-3 items-start"><span className="material-symbols-outlined text-blue-400 shrink-0">call</span><span className="break-all">+91 9546360248, +91 7037227949</span></div>
            <div className="flex gap-x-3 items-start"><span className="material-symbols-outlined text-blue-400 shrink-0">mail</span><span className="break-all">info@devbhoomiglobalservices.com</span></div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-16 lg:mt-0">
          <fieldset disabled={status==='submitting'} className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <legend className="sr-only">Contact form fields</legend>
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-white">First name</label>
              <input id="firstName" name="firstName" type="text" autoComplete="given-name" value={formData.firstName} onChange={handleChange} required className="mt-2 w-full rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-white">Last name</label>
              <input id="lastName" name="lastName" type="text" autoComplete="family-name" value={formData.lastName} onChange={handleChange} required className="mt-2 w-full rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold text-white">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required className="mt-2 w-full rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-white">Message</label>
              <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-2 w-full rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
          </fieldset>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-xs text-slate-400">We never share your information.</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
              {status==='submitting' ? 'Sending…' : status==='success' ? 'Sent!' : 'Send message'}
              <span className="material-symbols-outlined text-base">{status==='success' ? 'check_circle' : 'send'}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;