import { Details } from "@hilla/react-components/Details.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";

export default function DetailsContent() {
    return (
        <VerticalLayout>
            <Details summary='Analytics' opened>
                <VerticalLayout>
                    <a href='#'>Dashboard</a>
                    <a href='#'>Reports</a>
                    <a href='#'>Data sources</a>
                </VerticalLayout>
            </Details>

            <Details summary='Customers'>
                <VerticalLayout>
                    <a href='#'>Accounts</a>
                    <a href='#'>Contacts</a>
                </VerticalLayout>
            </Details>

            <Details summary='Finances'>
                <VerticalLayout>
                    <a href='#'>Invoices</a>
                    <a href='#'>Transactions</a>
                    <a href='#'>Statements</a>
                </VerticalLayout>
            </Details>
        </VerticalLayout>
    );
}
