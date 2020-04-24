import React, { useEffect } from 'react';
import { firestore } from '../index'
import Foodform from './Foodform';

const Store = () => {

    useEffect(() => {
        firestore.collection('food').get().then(snapshot => {
            snapshot.forEach((res) => {
                console.log(res.data())
            })
        })
    }, [])

    return (
        <div>
            <Foodform/>
        </div>

    );
}

export default Store;