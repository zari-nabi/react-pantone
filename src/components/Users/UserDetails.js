// import { useDataSource } from "../../hooks/customHook/useDatasource";
import { DangerButton } from "../Button";
import {  AvatarLargeContainer, Item, SubContainer, UserInfoContainer } from "./Users.style";

export const UserDetails = ({ item,handleEvent,eventName,onClick }) => {
    // const user = useDataSource(onClick(item?.id));
    const {id,avatar,first_name,last_name,email}=item || {};

    return item ? (
    <UserInfoContainer >
        <SubContainer>
        <AvatarLargeContainer src={avatar}/>
        <Item> name: {`${first_name} ${last_name}`}  </Item>
        <Item> email: {email} </Item>
        </SubContainer>
        
        <DangerButton onClick={()=>handleEvent(id)}>{eventName}</DangerButton>
    </UserInfoContainer>
) : null};
