// Components
import { useDispatch } from "react-redux";
import HeaderTitle from "../../components/HeaderTitle";
import Navbar from "../../components/Navbar"

const Profile = (props) => {
  const profileData = {
    name: 'Gabriel Sousa',
    email: 'gabrielsaubo@hotmail.com',
    password: 'abcd1234'
  }

  const { name, email, password } = profileData

  const dispatch = useDispatch()

  const handleSignOut = () => {
    // Dispatch an action to sign out (clear email and set userSignedIn to false)
    dispatch({type: 'SIGN_OUT'})
    // Redirect user to sign in page at /signin
    props.history.push('/signin')
  }

  return (
    <div className="Profile">
      <Navbar />

      <main className="container">
        <HeaderTitle
          title="Perfil"
          paragraph="Gerencie seu perfil aqui."
        />

        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="name" id="name" className="form-control" value={name} placeholder="Seu nome" readOnly disabled />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" id="email" className="form-control" value={email} placeholder="Seu email" readOnly disabled />
        </div>
        <div className="mb-4">
          <label className="form-label">Senha</label>
          <input type="password" id="password" className="form-control" value={password} placeholder="Sua senha" readOnly disabled />
        </div>
        <hr />
        <button className="btn btn-dark" onClick={handleSignOut}>
          <i className="bi bi-box-arrow-left"></i>&nbsp;&nbsp;Desconectar
        </button>
      </main>
    </div>
  );
}

export default Profile;