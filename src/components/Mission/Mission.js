import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getMissionData } from '../../redux/missions/missions';
import './Mission.css';

const Mission = () => {
  const missions = useSelector((state) => state.missions.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.lenght) dispatch(getMissionData());
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        {missions.map((mission) => (
          <tbody key={mission.id}>
            <tr>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                <button type="submit" className="btnMember">
                  Active Member
                </button>
              </td>
              <td>
                <button type="submit" className="btnJoin">Join Mission</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Mission;
