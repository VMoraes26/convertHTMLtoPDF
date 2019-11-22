import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'

import createPDFTable from './createPDFTable'

import './style.css'

function fakeData(rows) {
    const data = []
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rows; i++) {
        const row = faker.helpers.createCard()
        data.push({
            name: row.name,
            username: row.username,
            email: row.email,
            phone: row.phone,
            website: row.website,
            city: row.address.city,
            country: row.address.country,
            state: row.address.state,
        })
    }
    return data
}

const title = 'Tabela teste'
const header = ['name', 'username', 'email', 'phone', 'website', 'city', 'state', 'country']
const data = fakeData(20)

function App() {

    return (
        <div className="container">

            <div>
                <table>
                    <tr>
                        {header.map((item, key) => (
                            <th key={key}>{item}</th>
                        ))}
                    </tr>
                    {data.map((item, key) => (
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                            <td>{item.country}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <button type="button" onClick={() => createPDFTable(title, header, data, 8)}>
                Export PDF
            </button>

        </div>
    )
}

render(<App />, document.getElementById('root'))
