export function RegisterEmailForm() {
  return (
    <form aria-label='Formulario para saber más ifnormación'>
      <input
        id='email_signup'
        name='email_signup'
        type='email'
        placeholder='tucorreo@ejemplo.com'
        required />
      <button>Saber más</button>

      <style jsx>{`
        form {
          position: relative;
          padding-right: 135px;
          min-height: 75px;
          border: 2px solid #eaeaea;
          border-radius: 5px;
          display: flex;
          width: 100%;
          box-sizing: border-box;
        }

        input, button {
          border: none;
          padding: 0.5rem 1rem;
          box-sizing: border-box;
        }

        input {
          font-size: 1.15rem;
          border: none;
          flex: 1;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          min-height: 60px;
        }
        
        button {
          font-size: 1rem;
          background-color: #27ae60;
          color: white;
          font-weight: 500;
          border-radius: 5px;
          position: absolute;
          right: 0.75rem;
          top: 0.75rem;
          bottom: 0.75rem;
        }

        @media scre
      `}</style>
    </form>
  )
}