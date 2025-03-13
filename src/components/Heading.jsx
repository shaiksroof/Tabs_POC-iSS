/**
 * Heading component that displays a heading text.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display inside the heading.
 * @returns {JSX.Element} The rendered heading component.
 */
const Heading = ({ text }) => (
    <h1 className="text-4xl font-bold text-center">{text}</h1>
);
export default Heading;