import React, { useEffect, useState } from 'react';
import { firebase } from '../index'
import { useDispatch, useSelector} from 'react-redux';
import './css/Foodform.css';

const Foodform = () => {
    const dispatch = useDispatch()
    const foods = useSelector(state => state.foods)
    const [cook, setcook] = useState('')

    const test = () => {
        setcook('aa')
    }

    return (
        <div className="form">
            <div className="media">
                <img src="https://img.wongnai.com/p/1968x0/2019/03/24/2b7eb56c86fd48869d4e676b17113e5f.jpg" className="mr-3" alt="..." />
                <div className="media-body">
                    <h5 className="mt-0">บัวลอย</h5>
                    <p>ขนมบัวลอย สูตรขนมไทยหวานหอมมีเอกลักษณ์ หากินที่ไหนไม่ได้ต้องเมืองไทยเท่านั้น เสิร์ฟพร้อมกันถึง 7 สูตรขนมหวาน แป้งนุ่ม ทำกินเพลิน ๆ หลังอาหารเที่ยงก็อร่อย มาเติมความหวานให้ร่างกายกัน.</p>
                    <button className="btn1 btn-primary btn-lg" onClick={test} role="button">สูตรการทำ</button>
                    <p>{cook} <a onClick={()=>setcook('')}>close</a></p>
                </div>
            </div>

            <div className="media">
                <img src="https://img.wongnai.com/p/1968x0/2019/03/24/2b7eb56c86fd48869d4e676b17113e5f.jpg" className="mr-3" alt="..." />
                <div className="media-body">
                    <h5 className="mt-0">บัวลอย</h5>
                    <p>ขนมบัวลอย สูตรขนมไทยหวานหอมมีเอกลักษณ์ หากินที่ไหนไม่ได้ต้องเมืองไทยเท่านั้น เสิร์ฟพร้อมกันถึง 7 สูตรขนมหวาน แป้งนุ่ม ทำกินเพลิน ๆ หลังอาหารเที่ยงก็อร่อย มาเติมความหวานให้ร่างกายกัน.</p>
                    <button className="btn1 btn-primary btn-lg" href="#" role="button">สูตรการทำ</button>
                </div>
            </div>

        </div >
    )
}

export default Foodform;