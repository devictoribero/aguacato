import {Container} from 'components/Container'
import {Logo} from 'components/Logo'
import {RegisterEmailForm} from 'components/RegisterEmailForm'

export default function Home() {
  return (
    <div>
      <TopBar/>
      <HomeHeader/>
      <Letter />

    <style jsx>{`
      div {
        margin-bottom: 3rem;
      }
    `}</style>

    <style jsx global>{`
      html, body {
        margin: 0;
        box-sizing: border-box;
      }
      
      * {
        font-family: 'Poppins', sans-serif;
      }

      .grid {
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (min-width: 768px) {
        .grid {
          max-width: 700px;
        }
      }

      @media screen and (min-width: 900px) {
        .grid {
          max-width: 800px;
        }
      }
    `}</style>
    </div>
  )
}

function TopBar() {
  return (
    <header className='grid'>
      <Logo />

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          min-height: 100px;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;

          animation: fadein 0.75s ease-in-out, comeleft 0.5s ease-in-out;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes comeleft {
          from {
            transform: translateX(-20px);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  )
}

function HomeHeader(){
  return (
    <div className='hero'>
      <div className='grid hero-info'>
        <h1><span className='highlight'>Haz crecer tu restaurante </span>vendiendo pedidos online</h1>
        <p>Te ofrecemos un servicio con más flexibilidad, menos comisiones y pensado para ti</p>
        <div className='hero-emailAdquisition'>
          <RegisterEmailForm/>
        </div>
      </div>

      <style jsx>{`
      .hero {
        background-color: #f5f5ff;
        padding-top: 8rem;
        padding-bottom: 10rem;
        min-height: 70vh;
      }

      .hero-info {
        opacity: 0;
        animation: fadein 2s, comedown 0.75s;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
      }

      h1 {
        font-size: 2.25rem;
        color: #051441;
        line-height: 1.15;
        font-weight: 600;
        letter-spacing: -1px;
        margin-top: 0;
        margin-bottom: 1rem;
        text-align: center;
      }

      .highlight {color:  #2980b9;}

      p {
        font-size: 1.25rem;
        line-height: 1.75;
        color: #677294;
        letter-spacing: 0.2px;
        margin-top: 0;
        margin-bottom: 2rem;
        font-weight: 300;
        text-align: center;
        
      }

      @media screen and (max-width: 350px) {
        .hero {
          padding-top: 6rem;
          padding-bottom: 8rem;
        }
      }

      @media screen and (min-width: 768px) {
        .hero {
          padding-top: 10rem;
          min-height: 40vh;
        }

        .hero-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align:center;
          width: 100%;
        }

        h1 {
          font-size: 3.5rem;
          width: 600px;
          width: 100%;
        }

        p {
          font-size: 1.5rem;
          width: 600px;
          width: 100%;
        }

        .hero-emailAdquisition {
          width: 450px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media screen and (min-width: 900px) {
        .hero {
          padding-top: 10rem;
        }

        h1 {
          font-size: 3.5rem;
          width: 750px;
          margin-left: auto;
          margin-right: auto;
        }

        p {
          font-size: 1.5rem;
          width: 750px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-emailAdquisition {
          width: 500px;
        }
      }

      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes comedown {
        from {
          transform: translateY(-20px);
        }
        to {
          transform: translateY(0);
        }
      }
    `}</style>
    </div>
  )
}


function Letter() {
  return (
    <div className='grid'>
      <section>
        <p className='hello bold'>Lorem ipsum dolor sit amet,</p>
        <p>Consectetur adipiscing elit. Donec condimentum erat quis molestie dapibus. Vivamus sollicitudin congue nibh, nec placerat eros molestie vel.</p>
        <p>Mauris blandit sollicitudin magna, sit amet venenatidignissim turpis at, eleifend metus. Duis ac sapien eget mauris varius tristique.</p>
        <p>Orci varius natoque penatibus et magnimentum sed ibero. Integer sit amet nisi viverra, sollicitudin nulla vitae, euismod nunc. Phasellus auctor ipsum a consectetur pulvinar. Aenean scelerisque eros ac nunc placerat placerat.</p>
        <p>Phasellus eget hendrerit arcu, et dictum nibh. Sed bibendum, velit ac sodales tincidunt.</p>
        <p className='goodbye bold'>Firmado, Aguacato.</p>
      </section>

      <style jsx>{`
        section {
          margin-top: -5rem;
          background-color: white;
          padding: 2rem 1.5rem;
          border-radius: 10px;
          box-shadow: 0 6px 16px -3px rgba(5,7,119,0.05);

          // animation
          opacity: 0;
          animation: fadein 0.5s ease-in-out, comeup 0.45s ease-in-out;
          animation-delay: 1s;
          animation-fill-mode: forwards;
        }

        .bold {
          font-weight: 600;
        }

        p:first-child {
          margin-top: 0;
        }

        p {
          line-height: 30px;
          font-size: 1.1rem;
          font-family: 'Poppins', sans-serif !important;
          color: #3b3b3b;
          letter-spacing: 0.2px;
        }

        .hello {
          margin-bottom: 2rem;
        }

        .goodbye {
          margin-top: 3rem;
          marginn-bottom: 0;
        }

        @media screen and (min-width: 768px) {
          section {
            padding: 4rem 3rem;
          }

          p {
            font-size: 1.15rem;
          }
        }

        @media screen and (min-width: 992px) {
          section {
            margin-top: -5rem;
          }
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
  
        @keyframes comeup {
          from {
            transform: translateY(75px);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}