export function RegisterEmailForm() {
  return (
    <form aria-label='Formulario para saber más ifnormación'>
      <input
        id='email_signup'
        name='email_signup'
        type='email'
        placeholder='tucorreo@ejemplo.com'
        required />
      <button>Me interesa!</button>

      <style jsx>{`
        form {
          border-radius: 5px;
          width: 100%;
          box-shadow: 0 5px 25px -10px rgba(5, 7, 119, 0.15);
        }

        input, button {
          border: none;
          box-sizing: border-box;
        }

        input {
          border-radius: 5px;
          color: #4f5977;
          display: block;
          font-size: 1.15rem;
          font-weight: 400;
          min-height: 65px;
          padding: 0.5rem 1.25rem;
          width: 100%;
          text-align: center;
        }

        input::placeholder {
          color: #677294;
          font-weight: 400;
          font-size: 1.15rem;
        }
        
        button {
          font-size: 1.25rem;
          background-color: #409fdd;
          color: white;
          font-weight: 500;
          border-radius: 5px;
          box-shadow: 0 7px 11px 0px rgba(5,7,119,0.15);
          padding: 0.5rem 1rem;
          cursor: pointer;
          width: 100%;
          margin-top: 0.5rem;
          min-height: 60px;
          transition: background-color ease-in-out 0.15s;
        }

        button:hover {
          background-color: #2980b9;
        }

        @media screen and (min-width: 768px) {
          form {
            position: relative;
          }
  
          input {
            min-height: 75px;
            padding: 0.5rem 125px 0.5rem 2rem;
            text-align: left;
            font-size: 1.25rem;
          }

          input::placeholder {
            font-size: 1.25rem;
          }
          
          button {
            position: absolute;
            right: 0.65rem;
            top: 0.65rem;
            bottom: 0.65rem;
            min-height: 50px;
            width: auto;
            margin-top: 0;
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
            transform: translateY(-5px);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </form>
  )
}