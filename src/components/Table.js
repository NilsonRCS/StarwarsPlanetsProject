import React, { useContext } from 'react';
import AppContext from '../context/Context';
import Tbody from './Tbody';

function Table() {
  const { data,
    filters: { filterByName: { name },
    } } = useContext(AppContext);
  if (name !== '') {
    const search = data.filter((planets) => planets.name.toLowerCase().includes(name));
    return (
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Rotation Period </th>
            <th> Orbital Period </th>
            <th> Diameter </th>
            <th> Climate </th>
            <th> Gravity </th>
            <th> Terrain </th>
            <th> Surface Water </th>
            <th> Population </th>
            <th> Film </th>
            <th> Created </th>
            <th> Edited </th>
            <th> URL </th>
          </tr>
        </thead>
        <tbody>
          {search.map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <Tbody />
  );
}

export default Table;
