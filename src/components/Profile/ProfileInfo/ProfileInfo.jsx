import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                {/*<img src="https://sellics.com/wp-content/uploads/2017/06/Complete-Guide-to-Product-Image-Optimization-on-Amazon-1024x500-1024x500.jpg" alt=""/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava + descr
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;
