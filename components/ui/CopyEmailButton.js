'use client';

import { useEffect, useRef, useState } from 'react';
import Button from './Button';

export default function CopyEmailButton({ email, disabled = false }) {
  const [status, setStatus] = useState('');
  const resetTimer = useRef(null);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const copyEmail = async () => {
    clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus('copied');
      resetTimer.current = setTimeout(() => setStatus(''), 3000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Button type="button" variant="secondary" disabled={disabled} onClick={copyEmail}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
          style={{ flexShrink: 0 }}
        >
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
        </svg>
        {status === 'copied' ? 'Email Copied!' : 'Copy Email'}
      </Button>
      <span role="status" className={status === 'error' ? 'mono' : 'visually-hidden'}>
        {status === 'copied' && 'Email address copied to clipboard.'}
        {status === 'error' && `Could not copy. You can copy the address manually: ${email}`}
      </span>
    </>
  );
}
