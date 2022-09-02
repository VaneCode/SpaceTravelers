import 'bootstrap/dist/css/bootstrap.min.css';
import ReservedRockets from '../../components/ReservedRockets/ReservedRockets';
import ReservedMissions from '../../components/ReservedMissions/ReservedMissions';

const Profile = () => (
  <div className="container-fluid" style={{ padding: '2rem' }}>
    <div className="d-flex" style={{ gap: '3rem' }}>
      <ReservedMissions />
      <ReservedRockets />
    </div>
  </div>
);

export default Profile;
