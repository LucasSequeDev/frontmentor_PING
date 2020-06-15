import React from 'react'

export default function Suscribe() {
    return (
        <section className='suscribe'>
            <span className='title'>We are launching <b className='soon'>soon!</b></span>
            <p className='subtitle'>Suscribe and get notified</p>
            <input className='input-email' placeholder='Your email address...'/>
            <button className='btn btn-primary btn-suscribe'>Notify Me</button>
        </section>
    )
}
