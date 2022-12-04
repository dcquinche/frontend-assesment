import './styles.css';
import ProfileImg from './profile.jpg';

const Profile = () => (
  <div className="profile">
    <section className="profile__title">
      <img className="profile__figure" alt="profile" src={ProfileImg} />
      <h3 className="profile__name">Diana Carolina Quinche Velez</h3>
    </section>
    <section className="profile__description">
      <p className="profile__text">Soy Ingeniera Biomédica, actualmente retandome y aprendiendo desarrollo de software.</p>
      <p className="profile__contact">Correo: <strong>dcquinche@gmail.com</strong> - <a href="https://github.com/dcquinche">GitHub</a></p>
    </section>
    <p className="profile__listTitle">Aprendizajes solucionando el Assesment:</p>
    <ul className="profile__list">
      <li className="profile__listKnowledge">Conocer el funcionamiento del método setInterval para generar cambios en el timer cada segundo.</li>
      <li className="profile__listKnowledge">Conocer la propiedad disabled de un elemento para deshabilitar su funcionalidad si cumple un requisito.</li>
      <li className="profile__listKnowledge">Recordar el hook useEffect para traer los datos de la fake api.</li>
    </ul>
  </div>
);

export default Profile;
