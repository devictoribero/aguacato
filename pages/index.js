export default function Home() {
  return (
    <div>
      <header>
        <span>logo</span>
        <nav>
          <a href=''>link 1</a>
          <a href=''>link 2</a>
        </nav>
      </header>
      <div className='hero'>
        <h1> Este será el titulo</h1>
        <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla diam eget vestibulum vestibulum.</p>
        <form>
          <input />
          <button>registrarme</button>
        </form>
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

    <style jsx>{`
      html, body {
        margin: 0;
        box-sizing: border-box;
      }

      header {
        display: flex;
        justify-content: space-between;
        min-height: 50px;
        align-items: center;
      }

      a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        padding: 0.5rem 1rem;
      }

      h1 {
        font-size: 2.25rem;
      }

      .subtitle {
        font-size: 1.5rem;
        line-height: 1.5;
      }


      form {
        display: flex;
      }

      input {
        min-height: 40px;
        flex: 1;
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
    </div>
  )
}
