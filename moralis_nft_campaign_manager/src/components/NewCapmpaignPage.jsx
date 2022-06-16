
import { Page, Layout, DisplayText } from "@shopify/polaris";
import CampaignForm from "./CampaignForm"

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

export default function NewCapmpaignPage() {
    // const [open, setOpen] = useState(false);
    // const handleSelection = (resources) => {
    //     setOpen(false);
    //     setSelection(resources.selection.map((product) => product.id));
    // };
    return (
        <Page >
            <Layout>
                <CampaignForm />
            </Layout>
        </Page>
    );
}
