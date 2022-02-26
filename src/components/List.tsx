import {IState as IProps} from '../App'
import React from 'react'

const List: React.FC<IProps> = ({people}) => {
    const renderList = () : JSX.Element[] => {
        return people.map((person) => {
            return (
            <li className="List">
                <div className="List-header">
                    <img src={person.url} alt="profile"  className="List-img" />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
            )
        })
    }

  return (
    <ul>
        {renderList()}
    </ul>
  )
}

export default List