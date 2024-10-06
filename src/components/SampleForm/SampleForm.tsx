import { useState } from 'react';
import './SampleForm.scss';

export interface SampleFormProps {
  prop?: string;
}

export function SampleForm() {
  const [form, setForm] = useState({
    firstName: 'S',
    lastName: 'B',
    email: '',
  });

  const handleSubmit = (event: any) => {
    console.log('Data:', form);
    // resetBoundary();
    new Error("search error");
    event.preventDefault();
    // Handle form submission, e.g., send data to an API
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          id="email"
          // onChange={(e) => setEmail(e.target.value)}
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <button type="submit">Submit</button>
      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p>
    </form>
  );



  // let defaultName = 'SB';
  let readOnly = false
  const [name, setName] = useState('SB');
  const [email, setEmail] = useState('');

  const handleSubmit2 = (event: any) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <form onSubmit={handleSubmit2}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          // defaultValue={defaultName}
          readOnly={readOnly}
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value.toUpperCase());
          }
          }
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
