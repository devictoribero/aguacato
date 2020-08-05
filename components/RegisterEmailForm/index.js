export function RegisterEmailForm() {
  return (
    <form>
      <label htmlFor='email_signup'>Entérate de más</label>
      <div>
        <input
          id='email_signup'
          name='email_signup'
          type='email'
          placeholder='tucorreo@ejemplo.com'
          required />
        <button>Saber más</button>
      </div>

      <style jsx>{`
        div {
          display: flex;
          margin-top: 0.5rem;
        }

        input, button {
          min-height: 60px;
          border: none;
          border-radius: 5px;
          padding: 0.5rem 1rem;
          box-sizing: border-box;
        }

  
        input {
          font-size: 1rem;
          border: none;
          background-color: #f2f2f2;
          flex: 1;
        }
        
        button {
          font-size: 1rem;
          background-color: #27ae60;
          color: white;
          font-weight: 600;
        }
      `}</style>
    </form>
  )
}