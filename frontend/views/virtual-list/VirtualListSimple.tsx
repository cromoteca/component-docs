import { VirtualList } from "@hilla/react-components/VirtualList.js";

export default function VirtualListSimple() {
    const data = Array.from(Array(100).keys()).map(i => '◯'.repeat(i));

    return (
        <VirtualList items={data}>
            {({ item }) => <span>{item}</span>}
        </VirtualList>
    );
}
