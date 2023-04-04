import { DangerButton } from "../Button";
import { AvatarContainer, Item, SubContainer, UserInfoContainer } from "./Users.style";

export const UserInfo = ({ item,onClick,handleEvent,eventName }) => {
    const {id,avatar,first_name,last_name,email}=item;
    
    return(
    <UserInfoContainer onClick={()=>onClick(id)}>
        <SubContainer>
        <AvatarContainer src={avatar}/>
        <Item> {`${first_name} ${last_name}`}  </Item>
        </SubContainer>
        
        <Item>  {email} </Item>
        <DangerButton onClick={(event)=>handleEvent(event,id)}>{eventName}</DangerButton>
    </UserInfoContainer>
)};
