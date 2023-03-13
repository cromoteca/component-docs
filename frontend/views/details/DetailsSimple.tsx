import { Details } from "@hilla/react-components/Details.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";

export default function DetailsSimple() {
    return (
        <Details summary='Contact information' opened>
            <VerticalLayout>
                <span>Sophia Williams</span>
                <span>sophia.williams@company.com</span>
                <span>(501) 555-9128</span>
            </VerticalLayout>
        </Details>
    );
}
