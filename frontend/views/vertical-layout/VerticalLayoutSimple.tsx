import { Button } from "@hilla/react-components/Button.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";

export default function VerticalLayoutSimple() {
    return (
        <VerticalLayout theme='spacing padding'>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
            <Button>Button 4</Button>
        </VerticalLayout>
    );
}
