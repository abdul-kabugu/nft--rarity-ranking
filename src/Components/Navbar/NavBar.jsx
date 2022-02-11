import React, {useState} from 'react';
import { useMoralis } from "react-moralis";
import { Select, Input,Typography, Card,Badge,Alert,Button,Image,Spin, Divider, Row, Col } from 'antd'
import {StockOutlined, ConsoleSqlOutlined, enterButton, FireOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import "./navbar.css"
const {Option} = Select
const { Search } = Input;
const { Meta } = Card;
const {Text, Paragraph, Title} = Typography

const styles = {
  NFTs: {
    display: "flex",
    
    flexWrap: "wrap",
    WebkitBoxPack: "start",
    justifyContent: "space-around",
    margin: "0px  auto",
    maxWidth: "1200px",
    width: "100%",
    gap: "10px",
  },
};




const NavBar = () => {
  const [visibility, setVisibility] = useState(false);
  const [NFTBalances, setNFTBalances] = useState();
  const [collection, setCollection] = useState();
  const [toggle, setToggler] = useState(false)
  const [nft, setNft] = useState();
  const { Moralis } = useMoralis();
  const fallbackImg =
    "data:image/png;base64,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";
    const [token, setToken] = useState()
//FUNCTIONS TO USE
   
const handleVisibility = () =>{
  visibility ? setVisibility(false): setVisibility(true)
}
const showNav = () =>{
  toggle === false ? setToggler(true) : setToggler(false)
}

  const handleChangeCollection = async (col) => {
    const dbNFTs = Moralis.Object.extend(col);
    const query = new Moralis.Query(dbNFTs);
    query.ascending("rank");
    const topNFTs = query.limit(18);
    const results = await topNFTs.find();
    setNFTBalances(results);
  };

  const handleSelectToken = async (num, col) => {
    if (num && col) {
      const dbNFTs = Moralis.Object.extend(col);
      const query = new Moralis.Query(dbNFTs);
      console.log(num);
      query.equalTo("tokenId", num);
      let selectedNFT = await query.first();
      selectedNFT = selectedNFT.attributes;
      console.log(selectedNFT);
      setNft(selectedNFT);
      setVisibility(true);
    }
  };

  const collectionChanged = async (col) => {
    setCollection(col);
    handleSelectToken(token, col);
    handleChangeCollection(col);
  };

 const addToNFTs = async (col) => {
    const dbNFTs = Moralis.Object.extend(col);
    const query = new Moralis.Query(dbNFTs);
    query.ascending("rank");
    query.limit(6);
    const topNFTs = query.skip(NFTBalances.length);
    const results = await topNFTs.find();
    setNFTBalances(NFTBalances.concat(results));
  }
    return <div>
   <div className='nav-main'>
   <div className='nav-container'> 
        {/*NAV HEADER*/}
        <div className='nav-left'>
            <div className='logo-icon'>
              <img src='img/meta-2.png' alt='logo' style={{width: "30px", cursor: "pointer", borderRadius: "50%"}} />
            </div>
            <button className='show-btn btn' onClick={showNav}>show btn</button>
        </div>
        
        <div className='nav-right'> 
        <Link to='/upcoming'>  <Text style={{textTransform: "capitalize", cursor: "pointer", fontSize: "19px", marginRight: "15px", }} className='upcoming-txt'>upcoming drop <FireOutlined style={{color: " #4094e1"}}/> </Text></Link>
         <Select
           showSearch
           style={{width: 250}}
           placeholder="Search For Collection"
          onChange={(e) => collectionChanged(e)}
         >
           <Option value="BoredApeYachtClub"> BoredApeYachtClub </Option>
         </Select>
           <Search 
            style={{width: "250px"}}
            placeholder="search for token"
             onChange={(e) => setToken(e.target.value)}
             onSearch={() => handleSelectToken(token, collection)}
             enterButton
           />
           
           <div className='social-container'>
             <div className='social-icon twitter'>
               <TwitterOutlined style={{fontSize: "24px", color: "white"}}/>
             </div>
             <div className='social-icon linkeldin'>
               <LinkedinOutlined  style={{fontSize: "24px", color: "white"}}/>
             </div>
             <div className='social-icon ig'>
               <InstagramOutlined  style={{fontSize: "24px", color: "white"}}/>
             </div>
           </div>
          <button className='list-btn btn'> <Link to='/getlisted' style={{color: "white"}}> get listed </Link></button>
        </div>
        </div>
        
   </div>
   
        
        <div className='announcement-container'>
          <div className='ad-container'>
            <img src='img/AD-4.gif' alt='advertisement' />
          </div>
        </div>
       
        
        {visibility && (
          <>
            <div className='card-container'>
              <Badge.Ribbon
                text={`Rank #${nft.rank}`}
                style={{ fontSize: "18px" }}
              >
               
                <img onClick={handleVisibility}
                  preview={false}
                  src={nft.image}
                  loading="lazy"
                  className='bg-card-img'
                  
                  placeholder={
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        borderRadius: "18px",
                      }}
                    >
                      <Spin
                        size="large"
                        style={{
                          margin: "auto",
                          padding: "250px 0",
                          width: "440px",
                          height: "640px",
                        
                        }}
                          
                      />
                    </div>
                  }
                  fallback={fallbackImg}
                  alt=""
                  style={{}}
                />
              </Badge.Ribbon>
            <div className='big-card-container'>
                <p className='big-card-title'>{`${collection} #${nft.tokenId} `  }</p>
                <div
                  style={{
                    backgroundColor: "#91d5ff",  
                    height: "100px",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "24px",
                  }}
                >
                  Rarity Score
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      width: "98%",
                      margin: "auto",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "green",
                      marginTop: "2px",
                    }}
                  >
                    {nft.rarity.toFixed(1)}
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: " 10px",
                      fontWeight: "normal",
                      paddingBottom: "2px",
                    }}
                  >
                    MetaExplore NFT Ranking
                  </div>
                </div>
                {nft.attributes.map((e) => {
                  return (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontWeight: "bold",
                        }}
                      >
                        <span style={{ color: "gray" }}>{e.trait_type}</span>
                        <span
                          style={{ color: "green", paddingRight: "4%" }}
                        >{`+${e.rarityScore.toFixed(1)}`}</span>
                      </div>
                      <Alert
                        style={{
                          padding: "2px 2px 2px 12px",
                          width: "98%",
                          margin: "0px auto 5px",
                          fontSize: "14px",
                        }}
                        message={e.value ? e.value : "<null>"}
                        type="info"
                        action={
                          
                          <Button
                            size="small"
                            style={{
                              display: "flex",
                              justifyContent: "end",
                              width: "60px",
                            }}
                          >
                            {e.trait_type === "TraitCount" ? 
                            ((8* (10000 / e.rarityScore)).toFixed(0)) :  //Only use this if rarity generator adjusted to 8x traitcount
                            ((10000 / e.rarityScore).toFixed(0))         //Also must be adjusted for collections with +- 10000 NFTs
                            }  
                          </Button>
                          
                          
                          
                        }
                       
                      />
                     
                    </>
                  );
                })}
                
                </div>
            </div>
          </>
        )}
        
        
        <div className='collection-container'>
        <div className='collection-container-header'>
       <p className='collection-name'> {collection? collection : "collection name"}</p>
        <div className='item-stats'>
          <ul className='list-item-container'>
            <li className='list-item'><span className='total-numbers'>10k </span>items</li>
            <li className='list-item'> <span className='total-numbers'>2.5k</span> owners</li>
            <li className='list-item'> <img src='img/eth-icon.png' alt='ethereum' style={{width: "20px", marginRight: "8px", marginLeft: "8px"}} /><span className='total-numbers'>1.3</span>  floor</li>
            <li className='list-item'> <img src='img/eth-icon.png' alt='ethereum' style={{width: "20px", marginRight: "8px", marginLeft: "8px"}} /> <span className='total-numbers'>100</span> volume</li>
          </ul>
        </div>
          <div className='coins-media'>
            <div className='media-icon'>
              <img src='img/opensea-2.png' alt='opensea' style={{width: "40px", borderRadius: "50%"}}/>
            </div>
            <div className='media-icon'>
              <img src='img/looksrare-2.png' alt='looksrare' style={{width: "40px", borderRadius: "50%"}}/>
            </div>
            <div className='media-icon'>
              <img src='img/web4.png' alt='websites' style={{width: "40px", borderRadius: "50%"}}/>
            </div>
            <div className='media-icon'>
              <img src='img/discord.png' alt='discord' style={{width: "40px", borderRadius: "50%"}}/>
            </div>
          </div>
        </div>
        <div className='collection-content'>
         
          
        
        
        <div style={styles.NFTs}>
          {NFTBalances &&
            NFTBalances.map((nft, index) => {
              return (
                <Card
                  onClick={() =>
                    handleSelectToken(nft.attributes.tokenId, collection)
                  }
                  hoverable
                  style={{ width: 190, border: "2px solid #e7eaf3" }}
                  cover={
                    <Image
                      preview={false}
                      src={nft.attributes.image}
                      fallback="data:image/png;base64,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"
                      alt=""
                      style={{ height: "190px" }}
                    />
                  }
                  key={index}
                >
                  <Meta
                    title={`Rank #${nft.attributes.rank}`}
                    description={`#${nft.attributes.tokenId}`}
                  />
                </Card>
              );
            })}
        </div>
        {NFTBalances && <Button onClick={() => addToNFTs(collection)} type="primary">Load More</Button>}
      </div>
      </div>
    
  
        
    </div>;
}


export default NavBar;