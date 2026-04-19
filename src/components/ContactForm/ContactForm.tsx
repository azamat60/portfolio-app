'use client'

import { useState } from 'react'

interface Props {
  sendMessage: string
  sent: string
  namePlaceholder: string
  emailPlaceholder: string
  messagePlaceholder: string
  sendBtn: string
  sending: string
  error: string
  nameLabel: string
  emailLabel: string
  messageLabel: string
}

export default function ContactForm({
  sendMessage,
  sent,
  namePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
  sendBtn,
  sending,
  error,
  nameLabel,
  emailLabel,
  messageLabel,
}: Props) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isSent, setIsSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setIsSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setIsSent(false), 3000)
    } catch {
      setSubmitError(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="eyebrow" style={{ marginBottom: 4 }}>/message</div>
      <h3 style={{ marginBottom: 8 }}>{sendMessage}</h3>
      <div className="form-field">
        <label>{nameLabel}</label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder={namePlaceholder}
          required
        />
      </div>
      <div className="form-field">
        <label>{emailLabel}</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder={emailPlaceholder}
          required
        />
      </div>
      <div className="form-field">
        <label>{messageLabel}</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={messagePlaceholder}
          required
        />
      </div>
      {isSent ? (
        <div className="form-success">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
          {' '}{sent}
        </div>
      ) : submitError ? (
        <div className="form-error">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4m0 4h.01" /><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /></svg>
          {' '}{submitError}
        </div>
      ) : (
        <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
              {sending}
            </>
          ) : (
            <>
              {sendBtn}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" /></svg>
            </>
          )}
        </button>
      )}
    </form>
  )
}
