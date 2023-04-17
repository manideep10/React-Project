import React from "react";
import Items from './Items';
import { Button, Table } from 'react-bootstrap';
import { Outlet, Link, useNavigation } from "react-router-dom";


function Guardian() {
    let Guardians = JSON.parse(JSON.stringify(Items));

    const handleEdit = (i) => {
        // navigation.navigate('EditGuardian', { id: i});
    }

    const handleDelete = (i) => {
        Items.splice(i, 1);
    }

    return (
        <div style={{ margin: '1rem' }}>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Guardians && Guardians.length > 0
                            ? Guardians.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button className="btn" onClick={() => handleEdit(index)}><i className="fa fa-edit"></i></button>
                                            <button className="btn" onClick={() => handleDelete(index)}><i className="fa fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                            : 'No Data Found'
                    }
                </tbody>
            </Table>
            <button className="btn pull-right">
                <Link to="/dashboard/course-create">Create Guardian</Link>
            </button>
        </div>
    )
}

export default Guardian;