'use client'

import { useRef, useState } from 'react'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      setSuccess(true)
      setError(false)
      formRef.current?.reset()
    } else {
      setSuccess(false)
      setError(true)
    }
  }

  return (
    <section id="contact" className=" py-13 px-4" 
    style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
          url('/images/wood-texture.jpg')
        `,
      }}>
      {/* Google Maps */}
      <div className="max-w-6xl mx-auto mb-10" data-aos='fade-down'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10600.000000000001!2d10.752245!3d59.913869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e5d1e1c1e1d%3A0x1e1e1e1e1e1e1e1e!2sOslo!5e0!3m2!1sen!2sno!4v1680000000000!5m2!1sen!2sno"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Info + Form */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start" data-aos='fade-down' data-aos-delay='100'>
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#A67C52]/70">Clinic Info</h3>
          <p><strong className='text-[#F0DFAD]'>Address:</strong><br />123 Smile Street<br />Toothville, TX 12345</p>
          <p><strong className='text-[#F0DFAD]'>Phone:</strong><br /><a href="tel:+1234567890" className="text-[#EDF0DA] hover:underline">+1 (234) 567-890</a></p>
          <p><strong className='text-[#F0DFAD]'>Email:</strong><br /><a href="mailto:info@smilebright.com" className="text-[#EDF0DA] hover:underline">info@smilebright.com</a></p>
          <p><strong className='text-[#F0DFAD]'>Hours:</strong><br />Mon–Fri: 9am – 5pm<br />Sat–Sun: Closed</p>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-[#A67C52]/70 mb-6">Contact Us</h2>
          {success && <p className="text-green-600 mb-4">Thank you! We&#39;ll get back to you soon.</p>}
          {error && <p className="text-red-600 mb-4">Something went wrong. Please try again.</p>}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3_KEY || ''} />
            <input type="hidden" name="subject" value="New Contact Form Submission" />
            <input type="hidden" name="from_name" value="Thief Carpentry" />

            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input type="text" name="name" required className="w-full border px-3 py-2 rounded" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input type="email" name="email" required className="w-full border px-3 py-2 rounded" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea name="message" rows={5} required className="w-full border px-3 py-2 rounded"></textarea>
            </div>

            <div className="flex justify-center md:justify-start">
              <button type="submit" className="bg-[#A67C52] hover:bg-[#8B5E34] text-white px-6 py-3 rounded transition cursor-pointer">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
