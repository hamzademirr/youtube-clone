import { Card } from 'antd';
import React from 'react'

const { Meta } = Card;
function Cart() {
    return (
        <Card
            hoverable
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}

export default Cart