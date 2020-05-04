import React from 'react';
import './profile.scss'
import BioImage from "../../assets/bioImg.jpg"

function Profile (props) {
  return (
      <div className="profileContainer">
        {/* profile picture */}
      <div className={props.showImg ? "profileImg" : "hidden"}>
          <img src={BioImage} alt="Profile picture of Alan Martin"/>
        </div>
        {/* User bio */}
        <div className="profileInfo">
          {/* name */}
        <h1 className={props.showImg ? "" : "hidden"}>Alan Martin</h1>
          {/* bio */}
          <p className={props.showBio ? "bio" : "hidden"}>
          <span className='alan'>Alan</span> is a recreational photographer born and raised in the small town of Paris Ontario, Canada. He currently resides in Toronto. His roots to photography go back over fifteen years ago, when he saved up all his pocket change to buy his first camera! His early inspirations were the likes of Atiba Jefferson(SLAP, TransWorld, Thrasher, etc.) and many other local skateboard photographers. With a camera around his neck and an eyeball well... in his head, he started shooting local skateboarders in the skate scenes in and around Brant County. Unfortunately, his empty pockets began to eat away at his inspiration to be a skateboard photographer. With the many light rigs and expensive lenses needed to shoot “epic skateboard tricks” being <span>way</span> out of his price range, he began to take interest in the art of street photography. This raw and uncut type of photography spoke to him even more than his original inspiration had. Around the same time his Aunt had then passed down an Olympus Om-G camera, yes you heard it right! O-M-G! With which he quickly fell in love with film photography. Fast forward to the present day: Alan has continued his path with analog photography and has since added to his collection of vintage cameras while practicing developing his own film from the comfort of his bathtub! So with the stench of blix and developer in the air, I introduce his... What I really mean is <span>my</span> mediocre works of... art?
          {/* show and hide bio button  */}
          </p>
          <button className="btn" onClick={props.clickBio}>
          About {props.showImg ? "" : <i className="fas fa-times" aria-hidden="true" title="Close Cart"></i>}
          </button>
        </div>
      </div>
  )

};


export default Profile