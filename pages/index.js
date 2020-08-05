import {Container} from 'components/Container'
import {Logo} from 'components/Logo'
import {RegisterEmailForm} from 'components/RegisterEmailForm'

export default function Home() {
  return (
    <Container>
      <header>
        <Logo />
      </header>
      <div className='hero'>
        <h1>Augmenta las ventas online de tu restaurante</h1>
        <p className='subtitle'>Más flexibilidad, menos comisiones y un servicio pensado pensado para ti.</p>
        <RegisterEmailForm/>
      </div>

      {/* // problema de mercado */}
      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae iaculis sapien. Maecenas quis nisl id arcu sagittis semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      </section>
      {/* // nunestra diferencia */}
      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae iaculis sapien. Maecenas quis nisl id arcu sagittis semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      </section>

      {/* // nuestros valores */}
      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae iaculis sapien. Maecenas quis nisl id arcu sagittis semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      </section>

    <style jsx global>{`
      html, body {
        margin: 0;
        box-sizing: border-box;
      }
      
      * {
        font-family: 'Roboto', sans-serif;
      }
    `}</style>

    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        min-height: 75px;
        align-items: center;
        padding-left: 1rem;
        padding-right: 1rem;
      }

      a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        padding: 0.5rem 1rem;
      }

      .hero {
        padding-top: 3rem;
        padding-bottom: 3rem;
        min-height: 70vh;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }

      h1 {
        font-size: 2.25rem;
        line-height: 1.35;
        color: #1a1a1a;
        letter-spacing: -1px;
        margin-top: 0;
        margin-bottom: 1rem;
      }

      .subtitle {
        font-size: 1.5rem;
        line-height: 1.5;
        color: #393939;
        letter-spacing: 0.2px;
        margin-top: 0;
        margin-bottom: 2rem;
      }

      section {
        padding-top: 3rem;
        padding-bottom: 3rem;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
      }

      section p {
        line-height: 1.25;
        font-size: 1.25rem;
      }
    `}</style>
    </Container>
  )
}
