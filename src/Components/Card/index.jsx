import { Avatar, Card } from 'antd';
import React from 'react'

import videoImage from "../../assets/Home/video-image.png";

const { Meta } = Card;
function Cart() {
    return (
        <Card

            hoverable
            cover={<img src={videoImage} />}
        >
            <Meta
                className='video-cart'
                avatar={<Avatar src={videoImage} />}
                title="Lorem ipsum dolor sit amet, consecte adipiscing elit."
                description="15K Views .1 week ago" />
        </Card>
    )
}

export default Cart
