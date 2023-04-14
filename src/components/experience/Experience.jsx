import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const experience = () => {
  return (
    <section id="experience">
      <h5>what skills i have</h5>
      <h2>my experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>html</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>css</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div><h4>javascript</h4>
              <small className="text-light">experienced</small></div>
            </article>
          
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>bootstrap</h4>
              <small className="text-light">experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>tailwind</h4>
              <small className="text-light">experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>react</h4>
              <small className="text-light">experienced</small>
            </div>
          </article>
        </div>
</div>
        <div className="experience__backend">
          <h3>backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>nodeJS</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>php</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>mysql</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>python</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>tailwinddb</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
