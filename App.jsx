import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', role: '', message: '' });

  return (
    <div className="container">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">Lobac</h1>
        <p className="text-lg max-w-xl mx-auto">
          Logistics and coordination platform for post-structure home construction in rural and Tier 2/3 India.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Tiles', 'Sanitaryware', 'Electricals', 'UPVC Windows', 'Wood', 'Labor'].map((item) => (
            <div key={item} className="card text-center font-medium">{item}</div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">How Lobac Works</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>No inventory — we coordinate sourcing city-wise</li>
          <li>We focus on high-margin new constructions</li>
          <li>Brand commissions + logistics + labor margins</li>
          <li>Reliable, local delivery + analytics support</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Partner With Us</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <input placeholder="Your Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
          <input placeholder="Phone Number" onChange={e => setFormData({ ...formData, phone: e.target.value })} />
          <input placeholder="Role (Supplier / Labor / Builder)" onChange={e => setFormData({ ...formData, role: e.target.value })} />
          <textarea placeholder="Message" rows="4" onChange={e => setFormData({ ...formData, message: e.target.value })} />
        </div>
        <button className="mt-4">Submit</button>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Lobac. All rights reserved.
      </footer>
    </div>
  );
}