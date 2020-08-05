export function Logo() {
  return (
    <div>
      <img src='/images/cat.svg'/>
      <span>Aguacato</span>

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
        }

        img {
          width: 30px;
          height: 30px;
          margin-right: 0.5rem;
        }

        span {
          font-weight: 900;
          font-size: 1.25rem;
        }
      `}</style>
    </div>
  )
}