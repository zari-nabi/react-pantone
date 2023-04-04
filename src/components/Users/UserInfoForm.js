import { Button } from "../Button";
import { editableResource } from "../HOC/editableResource";
import { Input } from "../Input";
import { Item, SubFormContainer, UserFormContainer } from "./Users.style";

export const UserInfoForm = editableResource("users", "users", ({ users, onChangeUsers, onSaveUsers, onResetUsers }) => {
    const { name, job,id } = users || {};

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChangeUsers({ [name]: value });
    }

    return (
        <UserFormContainer>
            <SubFormContainer>
                <Input
                    name="name"
                    label="Name"
                    value={name}
                    type="text"
                    onChange={handleChange}
                />
                <Input
                    name="job"
                    label="Job"
                    value={job}
                    type="text"
                    onChange={handleChange}
                />
                <Button onClick={onSaveUsers} size="medium">Submit User</Button>
            </SubFormContainer>
            {id?<Item>{`This user with id ${id} added.`} </Item>:null}
        </UserFormContainer>
    );
}) 