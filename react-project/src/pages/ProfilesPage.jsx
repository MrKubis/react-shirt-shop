import { NavLink,Outlet } from "react-router-dom";

function ProfilesPage(){
const profiles = [1,2,3,4,5];
return(
    <div className='flex flex-col gap-2'>
        {profiles.map((profile)=> (
            <NavLink key={profile} 
            to={`/profiles/${profile}`}
            >
                Profile {profile}
            </NavLink>
        ))};
        <Outlet/>
    </div>

);
}
export default ProfilesPage