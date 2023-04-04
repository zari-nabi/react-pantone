import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../components/Button';
import Container from '../../components/Container';
import { Modal } from '../../components/Modal/Modal';
import { SourceList } from '../../components/SourceLoader/SourceList';
import { SourceLoader } from '../../components/SourceLoader/SourceLoader';
import { Spinner } from '../../components/Spinner/Spinner';
import { UserDetails } from '../../components/Users/UserDetails';
import { UserInfo } from '../../components/Users/UserInfo';
import { UserInfoForm } from '../../components/Users/UserInfoForm';
import { deleteData } from '../../services/manageApi/deleteData';
import { getData, getDataById } from '../../services/manageApi/getData';
import { getFromLocalStorage } from '../../services/manageLocalStorage';

//=======================================
/**
 * A component that displays a list of users and allows for adding, deleting, and viewing user details.
 * @returns {JSX.Element} The Users component.
 */
//=======================================
function Users(props) {
    // const handleGetData = async () => {
    //     const response = await getData('api/users', '');
    //     return response;
    // }
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [currentitems, setCurrentItems] = useState(null);
    const [loading, setLoading] = useState(false);

    const [addUser, setAddUser] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        (async () => {
            const { data } = await getData('users');
            setItems(data);
        })();
    }, []);

    //-----------------------------------
    /**
    * Fetches the user data by id and sets it to the current items state.
    * @param {number} id - The id of the user to fetch.
    * @returns {Promise} A promise that resolves to the response data.
    */
    //-------------------------------------
    const handleGetDataById = async (id) => {
        setLoading(true);
        const response = await getDataById('users', id);
        setLoading(false);
        setCurrentItems(response?.data)
        setShowModal(true);
        return response;
    }
    //--------------------------------------
    /**
    * Deletes a user from the list based on the id.
    * @param {Event} e - The event object.
    * @param {number} id - The id of the user to delete.
    * @returns {Promise} A promise that resolves to the response data.
    */
    //-----------------------------------
    const handleDelete = async (e, id) => {
        e.stopPropagation();
        setLoading(true);
        const response = await deleteData('user', id);
        setLoading(false);
        if (response) {
            const filteredItems = items?.filter(item => item?.id !== id);
            setItems(filteredItems);
        }
        return response;
    }
    //------------------------------------
    /**
    * Sets the addUser state to true to trigger the display of the user info form.
    */
    //-----------------------------------
    const handleAddUser = () => {
        setAddUser(true);
    }
    //---------------------------------
    /**
    * Closes the modal by setting the showModal state to false.
    */
    //---------------------------------
    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <Container>
            {/* <SourceLoader 
            getDataSource={handleGetData}
            resourceName="users"
            >
                <UserInfo/>
            </SourceLoader> */}
            <Spinner loading={loading} />

            <Button size="medium" onClick={handleAddUser}>Add User</Button>
            {addUser ? <UserInfoForm /> : null}

            {showModal ?
                <Modal showModal={showModal} onClose={handleCloseModal}>
                    <SourceList
                        items={[currentitems]}
                        resourceName="users"
                        itemComponent={UserDetails}
                        eventName="Close"
                        onClick={handleGetDataById}
                        handleEvent={handleCloseModal}
                    />
                </Modal>
                : null}

            <SourceList
                items={items}
                resourceName="users"
                itemComponent={UserInfo}
                eventName="Delete"
                onClick={handleGetDataById}
                handleEvent={handleDelete}
            />
        </Container>
    );
}

export default Users;