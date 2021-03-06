import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts postData={props.state} dispatch={props.dispatch}/>
    </div>
    );
}

export default Profile;