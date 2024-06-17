import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../component/Loading';
import '../App.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("mleqqzaj");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 
  
    return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      if (state.succeeded) {
        toast.success("Message sent successfully!");
      }
    }, [state.succeeded]);

  return (
    <>
      {loading && (
        <Loading />
      )}
      <div className={`w-full mt-24 px-4 pl-12 md:px-32 bg-black text-white ${loading ? 'blur-xl' : ''}`}>
        <ToastContainer />
        <div>
          <h1 className="text-4xl lg:text-7xl mb-4 text-white" style={{ fontFamily: 'cursive' }}>Contact Me</h1>
          <div className="w-full border border-white"></div>
        </div>
        <div className='flex flex-col lg:flex-row justify-evenly mt-10'>
          <div className='flex flex-col gap-16 w-full lg:w-1/2'>
            <p className='text-white text-2xl' style={{ fontFamily: 'cursive' }}>Get In Touch</p>
            <div className='flex flex-col gap-8'>
              <p className='text-white font-semibold text-md' style={{ fontFamily: 'cursive' }}>Mail: <span className='text-normal'>youssefhihi18@gmail.com</span></p>
              <p className='text-white font-semibold text-md' style={{ fontFamily: 'cursive' }}>Tel: <span className='text-normal'>+212 648233165</span></p>
              <p className='text-white font-semibold text-md max-w-96 text-center' style={{ fontFamily: 'cursive' }}>
                I am always excited to connect with new people and explore opportunities for collaboration. Whether you have a project idea, need assistance with development, or just want to chat about technology and innovations, feel free to reach me. Let's create something amazing together!
              </p>
            </div>
          </div>
          <div className="form-card1 w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="form-card2">
              <form className="form" onSubmit={handleSubmit}>
                <p className="form-heading">Contact Me</p>
                <div className="form-field">
                  <input required name='name' placeholder="Name" className="input-field" type="text" />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="form-field">
                  <input required placeholder="Email" name='email' className="input-field" type="email" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="form-field">
                  <textarea required placeholder="Message" name='message' cols="30" rows="3" className="input-field"></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting} className="sendMessage-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
