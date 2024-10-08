'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import heroImage from '@/assets/img/paws-img.png'
import logo from '@/assets/img/logo.png'
import paw3 from '@/assets/img/paw3.png'
import paw4 from '@/assets/img/paw4.png'
import toast from 'react-hot-toast'
import { Spinner } from '@/assets/icons/Spinner'

const HomePage = () => {
  const [data, setData] = useState({ name: '', email: '' })
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('https://getlaunchlist.com/s/QoSyCe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: data.name,
          email: data.email,
        }),
      })
      if (response.ok) {
        toast.success('Thank you! You are now on the waitlist.')
      }
    } catch (error) {
      toast.error('Oops! Something went wrong. Please try again later.')
    } finally {
      setData({ name: '', email: '' })
      setLoading(false)
    }
  }

  const list = [
    {
      preamble: 'Tailored Matches:',
      text: 'Our algorithm connects you with dogs that best match your preferences. Choose based on breed, health status, age, location, and more to ensure compatibility.',
    },
    {
      preamble: 'Trusted Breeders:',
      text: 'We vet breeders and ensure every dog on our platform meets high standards of care and health. You can be confident that you’re connecting with reputable dog owners and breeders.',
    },
    {
      preamble: 'Community and Support:',
      text: 'Join a growing community of dog lovers and breeders who are committed to ethical breeding. Share tips, seek advice, and access our resources to ensure your dogs are happy and healthy.',
    },
  ]
  return (
    <div className='min-h-screen flex flex-col items-center bg-background pt-20'>
      <section className='w-full text-center py-16 px-5'>
        <div className='flex justify-center mb-10 '>
          <Image alt='logo-img' className='swing' src={logo} />
        </div>

        <h1 className='text-4xl font-bold mb-4 text-textShade'>
          Connect. Breed. <br />
          Create the Perfect Paws Match.
        </h1>
        <p className='text-lg text-gray-700 mb-6'>
          Join our community of breeders and pet owners. Be the first to know
          when we launch!
        </p>
        <a href='#about'>
          <button className='bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600'>
            Learn More
          </button>
        </a>
        <div className='flex justify-center mt-16'>
          <div className='bg-foreground/5 w-fit rounded-full p-4'>
            <Image width={450} height={250} alt='hero-image' src={heroImage} />
          </div>
        </div>
      </section>

      <section
        id='waitlist'
        className='relative w-full max-w-md my-10 px-6 py-10 bg-white shadow-md rounded-lg'
      >
        <h2 className='text-2xl font-semibold text-center mb-6 text-textShade'>
          Join the Waitlist
        </h2>
        <form onSubmit={onSubmit}>
          <div className='mb-4'>
            <label
              className='block text-sm text-textShade/75 font-medium mb-2'
              htmlFor='name'
            >
              Full Name
            </label>
            <input
              id='name'
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className='w-full border border-gray-300 rounded-md px-4 py-2 text-black'
              placeholder='Enter your full name'
              name='name'
            />
          </div>

          <div className='mb-4'>
            <label
              className='block text-sm text-textShade/75 font-medium mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className='w-full border border-gray-300 rounded-md px-4 py-2 text-black'
              placeholder='Enter your email address'
              name='email'
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full flex justify-center gap-2 items-center bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600'
          >
            Join the Waitlist{' '}
            {loading && (
              <span className='animate-spin '>
                <Spinner />
              </span>
            )}
          </button>
        </form>

        <div className='absolute w-full top-0 z-50'>
          <div className='relative'>
            <Image
              alt='paws-img'
              width={60}
              height={60}
              src={paw3}
              className='absolute -top-10 -left-20'
            />
            <Image
              alt='paws-img'
              width={60}
              height={60}
              src={paw4}
              className='absolute -bottom-10 -left-9'
            />
          </div>
        </div>
      </section>

      <section
        id='about'
        className='w-full py-16 mb-10 bg-foreground/10 text-black'
      >
        <ul className='flex flex-col gap-2 max-w-xl mx-auto px-5'>
          <h3 className='text-xl font-semibold mb-4 text-white'>
            About Twisty Tails
          </h3>
          <p className='mb-10 mx-auto'>
            At Twisty Tails, we believe that finding the perfect breeding
            partner for your dog should be simple, secure, and enjoyable.
            Whether you&apos;re a professional breeder or a passionate dog
            owner, our platform is designed to make your journey seamless.
          </p>
          {list.map(({ preamble, text }, index) => (
            <li key={index}>
              <span className='font-semibold'>{preamble}</span> {text}
            </li>
          ))}
          <a href='#waitlist'>
            <button className='bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 mt-4'>
              Join waitlist
            </button>
          </a>
        </ul>
      </section>

      <footer className='w-full py-5 bg-blue-100 text-center'>
        <p className='text-gray-600'>
          © 2024 Twisty Tails. All rights reserved.
        </p>
        <p className='text-gray-600'>
          Contact us at{' '}
          <a
            className='text-foreground/60'
            href='mailto:unegbuclinton5@gmail.com'
          >
            here
          </a>
        </p>
      </footer>
    </div>
  )
}

export default HomePage
