/**
 * Paragraph component that displays a text inside a paragraph element.
 *
 * @param {Object} props - The props object.
 * @param {string} props.text - The text to be displayed inside the paragraph.
 * @returns {JSX.Element} The rendered paragraph element.
 */
const Paragraph = ({ text }) => (
  <p className="text-lg text-center text-gray-600 mt-4">{text}</p>
);

export default Paragraph;
