import React, { useCallback, useState } from 'react';
import { Card, Tabs } from '@shopify/polaris';
import NewCapmpaignPage from './NewCapmpaignPage';
import DiscountCodeComponent from './DiscountCodeComponent'

const TextComponent = () => (<div>All campaings here</div>)


export default function HomePagination() {
    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const tabs = [
        {
            id: 'all-campaigns-fitted-2',
            content: 'All campaigns',
            accessibilityLabel: 'All campaigns',
            panelID: 'all-campaigns-fitted-content-2',
            component: TextComponent
        },
        {
            id: 'new-campaign-fitted-2',
            content: 'New campaign',
            panelID: 'new-campaign-fitted-Ccontent-2',
            component: NewCapmpaignPage
        },
        {
            id: 'load-campaign-codes-2',
            content: 'Load campaign codes',
            panelID: 'load-campaign-codes-Ccontent-2',
            component: DiscountCodeComponent
        },
    ];

    let SelectedComponent = tabs[selected].component
    return (
        <Card>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
                <Card.Section title={tabs[selected].content}>
                    <SelectedComponent />
                </Card.Section>
            </Tabs>
        </Card>
    );
}
