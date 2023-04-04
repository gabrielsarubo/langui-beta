import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import './index.css'

const Home = () => {
  return (
    <div className="learnerHome">
      <Header />
      <Navbar />
      <main className="container mt-3">
        <div className="row gy-3">
          {/* TODO make every card a Link to go to the card destination */}
          <div className="col-sm-6">
            <div className="highlighted-card">
              <div className="h5">
                <i className="bi bi-pencil-square text-primary"></i>
                <span>Escrever um post</span>
              </div>
              <p className="text-secondary mb-0">Pratique sua produção de texto todo dia para ajudar a memorizar novas palavras</p>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="highlighted-card">
              <div className="h5">
                <i className="bi bi-book-half text-primary"></i>
                <span>Phrasal Verb</span>
              </div>
              <p className="text-secondary mb-0">Pratique todos os dias um novo phrasal verb e melhore seu vocabulário</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
