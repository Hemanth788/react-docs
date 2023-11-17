function Profile(){
    return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export function Gallery(){
    return <div>
        <Profile/>
        <Profile/>
        <Profile/>
    </div>
}

export default Profile;