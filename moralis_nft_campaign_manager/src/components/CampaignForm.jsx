import React, { useCallback, useState } from 'react';
import { FormLayout, Form, TextField, Button, } from '@shopify/polaris';



export default function CampaignForm() {

    const [contract, setContract] = useState('');
    const [minId, setMinId] = useState(1);
    const [maxId, setMaxId] = useState(1);

    const handleSubmit = useCallback((_event) => {
        /* Perform data validation oninformation */
        /* Send the  information */
        /* Reset the state */
        console.log('Send information here', contract, minId, maxId)
    }, []);

    const handleContractChange = useCallback(
        (value) => setContract(value),
        [],
    );
    const handleMinIdChange = useCallback(
        (value) => setMinId(value),
        [],
    );
    const handleMaxIdChange = useCallback(
        (value) => setMaxId(value),
        [],
    );


    return (
        <Form onSubmit={handleSubmit}>
            <FormLayout>

                <TextField
                    value={contract}
                    onChange={handleContractChange}
                    label="NFT Contract"
                    autoComplete="off"
                    helpText={
                        <span>
                            Contract address for the nft.
                        </span>
                    }
                />

                <TextField
                    label="Min NFT Id"
                    type="number"
                    value={minId}
                    onChange={handleMinIdChange}
                    autoComplete="off"
                    helpText={
                        <span>
                            Min id for the nft collection.
                        </span>
                    }
                />

                <TextField
                    label="Max NFT Id"
                    type="number"
                    value={maxId}
                    onChange={handleMaxIdChange}
                    autoComplete="off"
                    helpText={
                        <span>
                            Max id for the nft collection.
                        </span>
                    }
                />

                <Button submit>Submit</Button>
            </FormLayout>
        </Form>
    );
}