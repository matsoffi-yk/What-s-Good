import React from 'react';
import './css/Foodform.css';

const Foodform = () => {

    return (
        <div className="form">
            <div className="card">
                <img src="https://img.wongnai.com/p/1968x0/2019/03/24/2b7eb56c86fd48869d4e676b17113e5f.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">บัวลอย</h5>
                    <p className="card-text"> ขนมบัวลอย สูตรขนมไทยหวานหอมมีเอกลักษณ์ หากินที่ไหนไม่ได้ต้องเมืองไทยเท่านั้น เสิร์ฟพร้อมกันถึง 7 สูตรขนมหวาน แป้งนุ่ม ทำกินเพลิน ๆ หลังอาหารเที่ยงก็อร่อย มาเติมความหวานให้ร่างกายกัน</p>
                    <a href="#" className="btn btn-primary">สูตรการทำ</a>
                </div>
            </div>

            <div className="card">
                <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="card">
                <img src="https://img.wongnai.com/p/1968x0/2019/03/24/2b7eb56c86fd48869d4e676b17113e5f.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Foodform;