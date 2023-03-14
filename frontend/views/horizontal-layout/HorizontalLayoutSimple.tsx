import { Button } from "@hilla/react-components/Button.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";

export default function HorizontalLayoutSimple() {
    return (
        <HorizontalLayout theme='spacing padding'>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
            <Button>Button 4</Button>
        </HorizontalLayout>
    );
}
