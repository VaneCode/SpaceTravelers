import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getMissionData, joinMission } from '../../redux/missions/missions';
import './Mission.css';

const Mission = () => {
  const missions = useSelector((state) => state.missions.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissionData());
    }
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="headTable">Mission</th>
            <th className="headTable">Description</th>
            <th className="headTable">Status</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {missions.map((mission, index) => (
            <tr key={mission.mission_id} className={(index + 1) % 2 === 0 && 'madMax'}>
              <td className="nameHead">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                <button
                  type="button"
                  className={mission.join ? 'btnNotMember' : 'btnMember'}
                >
                  {mission.join ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className={mission.join ? 'btnLeave' : 'btnJoin'}
                  onClick={() => dispatch(joinMission({ mission }))}
                >
                  {mission.join ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
