import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import './index.css'

const Home = () => {
  return (
    <div className="learnerHome">
      <Header />
      <Navbar />
      <div className="container">
        <div className="row gy-3">
          {/* TODO make every card a Link to go to the card destination */}
          <div className="col-sm-6">
            <div className="highlighted-card">
              <div className="h5">
                <i className="bi bi-pencil-square text-primary"></i>
                <span>Escrever um post</span>
              </div>
              <p className="text-secondary mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit sed morbi</p>
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
      </div>
    </div>
  );
}

export default Home;