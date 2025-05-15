import React from 'react';

interface Contact {
  email: string;
  phone: string;
  address: string;
}

const ContactSection = ({ contact }: { contact: Contact }) => (
  <div className="bg-base-100 rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
    <div className="grid md:grid-cols-3 gap-6 text-center">
      <div>
        <span className="font-semibold">Email:</span>
        <div className="text-blue-600">{contact.email}</div>
      </div>
      <div>
        <span className="font-semibold">Phone:</span>
        <div className="text-green-600">{contact.phone}</div>
      </div>
      <div>
        <span className="font-semibold">Address:</span>
        <div className="text-gray-700">{contact.address}</div>
      </div>
    </div>
  </div>
);

export default ContactSection;
