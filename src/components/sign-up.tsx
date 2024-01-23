import React from 'react'
import TextInput from './basic/text-input'

export default function SignUp() {
  return (
    <section>
      <h2 className='text-xl font-semibold mb-6'>Signup a driver</h2>
      <div className='flex gap-3'>
        <TextInput label='Enter Full Name' id='fullName' placeholder='Jonny Ive' />
        <TextInput label='Enter Email' id='email' placeholder='John@gmail.com' />
      </div>
    </section>
  )
}
