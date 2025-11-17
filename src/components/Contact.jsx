import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company') || undefined,
      subject: form.get('subject'),
      message: form.get('message'),
      source: 'portfolio-site'
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus('Thanks! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Let’s talk</h2>
        <p className="text-gray-600 mb-8">Tell me about your project, timelines, and goals. I typically reply within 24 hours.</p>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
            <input type="email" name="email" required placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          </div>
          <input name="company" placeholder="Company (optional)" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          <input name="subject" required placeholder="Subject" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          <textarea name="message" required placeholder="Message" rows="5" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          <button disabled={loading} className="px-5 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60">
            {loading ? 'Sending…' : 'Send message'}
          </button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
