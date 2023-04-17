import React, { useState } from 'react';
import Items from './Items';
import { Button, Table } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';


function CreateGuardian() {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleCreate = () => {
        let obj = { name, lastName, email };
        Items.push(obj);
        history('/dashboard/courses');
    }

    return (
        <div style={{ margin: '1rem' }}>
            <form>
                <label>Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <label>Email:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
            </form>
            <button className="btn btn-primary pull-right" onClick={() => handleCreate()}>
                Create
            </button>
        </div>
    )
}

export default CreateGuardian;