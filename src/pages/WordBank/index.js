import './index.css'

const WordBank = () => {
  return (
    <div className="WordBank container">
      <header className="row text-center mb-3">
        <h1 className="my-3">Word Bank</h1>
        <p className="text-muted">Não sobrecarregue sua cabeça com muitas palavras novas de uma vez. Pratique todo dia.</p>
      </header>

      <main className="row">
        <div className="col">
          <div className="box-exercise">
            <h6 className="m-0 p-0">Phrasal verb</h6>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right text-primary" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WordBank;