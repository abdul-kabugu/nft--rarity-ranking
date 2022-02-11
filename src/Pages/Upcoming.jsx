import React from 'react';
import {Typography} from 'antd'
import { WarningOutlined } from '@ant-design/icons';
import { upcomingItems } from './UpcomingItems';
import {Link} from 'react-router-dom'

const {Title, Paragraph} = Typography

const Upcoming = () => {
    return <div className='upcoming-container'>
       <div className='upcoming-header'>
           <h1 className='upcoming-title'>upcoming Drops Calendar</h1>
           <p className='upcoming-length'><span className='length-no'>12</span> collections</p>
           <p className='upcoming-note'> <WarningOutlined />  Upcoming Collections may not be 
           fully verified. Always do your own research.</p>
           <h1 className='coll-title'>latest collections</h1>

       </div>
       
           
           <div className='upcoming-collec-container'>
           {upcomingItems.map(items =>(
               <div className='item-card'>
                   <img src={items.img} alt="card images" className="card-image"  />
                   <h3 className='card-name'>{items.name}</h3>
                   <div className='card-attributes'>
                       <p className='card-currency'>{items.network}</p>
                       <p className='card-icon rare-icon'>looks Rare <img src={items.looksRare} alt="" className='card-attri-icon'/></p>
                       <p className='card-icon rare-icon'>website <img src={items.web} alt=""className='card-attri-icon'/></p>
                       <p className='card-icon rare-icon'>discord <img src={items.discord} alt=""className='card-attri-icon'/></p>
                   </div>
               </div>
           ))}
           </div>
       
    </div>;
}



export default Upcoming;