import React, { useContext, useEffect, useState } from 'react';
import { ColorInfo } from '../../components/Colors/ColorInfo';
import Container from '../../components/Container';
import { SourceList } from '../../components/SourceLoader/SourceList';
import { Spinner } from '../../components/Spinner/Spinner';
import { BaseContext } from '../../context';
import { getData, getDataById } from '../../services/manageApi/getData';

//=============================
/**
 * The Colors component displays the list of colors view of the application.
 * @param {object} props - The properties passed to the component.
 * @returns {JSX.Element} The Colors component.
 */
//==============================
function Colors(props) {
    const{setCustomColor}=useContext(BaseContext);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const { data } = await getData('undefined');
            setLoading(false);
            setItems(data);
        })();
    }, []);

    const handleGetDataById = async (id) => {
        setLoading(true);
        const response = await getDataById('undefined', id);
        setLoading(false);
        setCustomColor(response?.data?.color);
        return response;
    }


    return (
        <Container>
            <Spinner loading={loading} />
            <SourceList
                items={items}
                resourceName="colors"
                itemComponent={ColorInfo}
                onClick={handleGetDataById}
            />
        </Container>
    );
}

export default Colors;