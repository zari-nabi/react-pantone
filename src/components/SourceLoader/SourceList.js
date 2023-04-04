import { SourceListContainer } from "./SourceLoader.style";

/**
 * React SourceList component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.items - The list of items to be displayed in the component.
 * @param {string} props.resourceName - The name of the resource being displayed in the component.
 * @param {function} props.onClick - The function to be called when an item is clicked.
 * @param {function} props.handleEvent - The function to be called when an event occurs on an item.
 * @param {string} props.eventName - The name of the event being handled.
 * @param {ReactComponent} props.itemComponent - The component to be used to render each item.
 * @returns {ReactNode} The rendered React component.
 */

export const SourceList = ({ items, resourceName, onClick, handleEvent, eventName, itemComponent: ItemComponent }) => (
    <SourceListContainer>
        {items.map((item, i) => (
            <>
                <ItemComponent
                    key={i}
                    item={item}
                    onClick={onClick}
                    handleEvent={handleEvent}
                    eventName={eventName}
                />
            </>
        ))}
    </SourceListContainer>
);