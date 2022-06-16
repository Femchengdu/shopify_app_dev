import React, { useCallback, useState } from "react";
import { FormLayout, Form, Button, Caption, DropZone, Stack, Thumbnail } from '@shopify/polaris';
import { NoteMinor } from '@shopify/polaris-icons';
export default function DiscountCodeComponent() {
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);

    const handleDropZoneDrop = useCallback(
        (_dropFiles, acceptedFiles, _rejectedFiles) =>
            setFile(acceptedFiles[0]),
        [],
    );


    const validImageTypes = ['text/csv'];

    const fileUpload = !file && <DropZone.FileUpload />;
    const uploadedFiles = file && (
        <div style={{ padding: '0' }}>
            <Stack vertical>

                <Stack alignment="center" >
                    <Thumbnail
                        size="small"
                        alt={file.name}

                        source={
                            validImageTypes.includes(file.type)
                            && NoteMinor
                        }
                    />
                    <div>
                        {file.name} <Caption>{file.size} bytes</Caption>
                    </div>
                </Stack>

            </Stack>
        </div>
    );
    const fileReader = new FileReader();

    const handleOnChange = (e) => {
        console.log("the event onchang is:", e)
        setFile(e.target.files[0]);
    };

    const csvFileToArray = string => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        const array = csvRows.map(i => {
            const values = i.split(",");
            const obj = csvHeader.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
            }, {});
            return obj;
        });

        setArray(array);
    };

    const handleSubmit = (e) => {

        console.log("Am I being fired???")
        if (file) {
            fileReader.onload = function (event) {
                const text = event.target.result;
                csvFileToArray(text);
            };

            fileReader.readAsText(file);
        }
    };

    const headerKeys = Object.keys(Object.assign({}, ...array));

    return (
        <div style={{ textAlign: "center" }}>
            <h1>REACTJS CSV IMPORT EXAMPLE </h1>
            <Form onSubmit={handleSubmit}>
                <FormLayout>
                    <DropZone onDrop={handleDropZoneDrop}>
                        {uploadedFiles}
                        {fileUpload}
                    </DropZone>

                    <Button onClick={handleSubmit}>
                        IMPORT CSV
                    </Button>
                </FormLayout>
            </Form>

            <br />

            <table>
                <thead>
                    <tr key={"header"}>
                        {headerKeys.map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {array.map((item, index) => (
                        <tr key={index}>
                            {Object.values(item).map((val) => (
                                <td key={val}>{val}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

