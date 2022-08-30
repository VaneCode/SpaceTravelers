// Import
import { useSelector, shallowEqual, useDispatch } from 'react-redux/es/exports';
import { FetchedRockets } from '../../redux/rockets/rockets';
import Rocket from '../Rocket/Rocket';

const RocketList = () => {
  // Get the list of books from the state
  const rocketsStatus = useSelector(
    (state) => state.rockets,
    shallowEqual,
  );
  // console.log(rocketsList);
  // Dispatch the action to get the rockets from the API
  const dispatch = useDispatch();
  dispatch(FetchedRockets());
  return (
    <>
      <div>
        {rocketsStatus.rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            rocket={rocket}
          />
        ))}
      </div>
    </>
  );
};

export default RocketList;
