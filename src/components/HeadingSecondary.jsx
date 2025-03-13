/**
 * HeadingSecondary component renders a secondary heading (h4) with specific styles.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.text - The text to be displayed inside the heading.
 *
 * @returns {JSX.Element} The rendered h4 element with the provided text.
 */
const HeadingSecondary = ({ text }) => (
  <h4 className="text-4x4 font-bold text-center text-blue-500">{text}</h4>
);
export default HeadingSecondary;