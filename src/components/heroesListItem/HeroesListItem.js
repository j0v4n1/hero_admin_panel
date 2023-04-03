import { useDispatch } from "react-redux";
import { deleteHero } from "../../actions/actions";
import { useHttp } from "../../hooks/http.hook";
const HeroesListItem = ({name, description, element, heroId}) => {

  const dispatch = useDispatch();
  const {request} = useHttp();

  const deletingHero = (id) => {
    request(`http://localhost:3001/heroes/${id}`, 'DELETE')
    .then(() => {
      dispatch(deleteHero(id))
    })
  }

    let elementClassName;

    switch (element) {
        case 'fire':
            elementClassName = 'bg-danger bg-gradient';
            break;
        case 'water':
            elementClassName = 'bg-primary bg-gradient';
            break;
        case 'wind':
            elementClassName = 'bg-success bg-gradient';
            break;
        case 'earth':
            elementClassName = 'bg-secondary bg-gradient';
            break;
        default:
            elementClassName = 'bg-warning bg-gradient';
    }

    return (
        <li
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}>
            <img src="https://avatars.mds.yandex.net/i?id=2a0000017a1615a6ef943674619205613134-4356754-images-thumbs&n=13"
                 className="img-fluid w-25 d-inline"
                 alt="unknown hero"
                 style={{objectFit: 'cover', borderRadius: '0.375rem'}}/>
            <div className="card-body">

                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button onClick={() => {deletingHero(heroId)}} type="button" className="btn-close btn-close" aria-label="Close"></button>
            </span>
        </li>
    )
}

export default HeroesListItem;
